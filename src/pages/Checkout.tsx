/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../store/cartStore";
import { formatINR } from "../lib/currency";
import {
  CreditCard,
  Smartphone,
  Banknote,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const CheckoutSchema = z.object({
  name: z.string().min(2, "Enter full name"),
  phone: z.string().min(10, "Enter valid phone number").max(15),
  flat: z.string().min(1, "Enter flat or floor number"),
  building: z.string().min(1, "Enter building name"),
  landmark: z.string().optional(),
  city: z.string().min(2, "Enter city name"),
  pincode: z.string().min(5, "Enter valid pincode"),
  payment: z.string().optional(),
});

type CheckoutInput = z.infer<typeof CheckoutSchema>;

type LocationState = {
  appliedCoupon?: { id: string; label: string; type: string; value: number };
  discountAmount?: number;
};

export default function Checkout() {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal)();
  const clear = useCartStore((s) => s.clear);

  const DELIVERY_FEE = 20;

  const location = useLocation();
  const navigate = useNavigate();
  const state = (location.state || {}) as LocationState;

  const [locationURL, setLocationURL] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState<CheckoutInput | null>(null);

  const [appliedCoupon, setAppliedCoupon] = useState<
    LocationState["appliedCoupon"] | null
  >(state.appliedCoupon || null);
  const [discountAmount, setDiscountAmount] = useState<number>(
    state.discountAmount || 0
  );
  const [couponInput, setCouponInput] = useState("");

  useEffect(() => {
    if (state.appliedCoupon && state.discountAmount) {
      setAppliedCoupon(state.appliedCoupon);
      setDiscountAmount(state.discountAmount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CheckoutInput>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: { payment: "cod" },
  });

  useEffect(() => {
    if (showPreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPreview]);

  const coupons = [
    {
      id: "SAVE20",
      label: "SAVE20",
      type: "percent",
      value: 20,
      desc: "20% off sitewide",
    },
    {
      id: "UPI50",
      label: "UPI50",
      type: "flat",
      value: 50,
      minSubtotal: 200,
      desc: "₹50 off on UPI payments above ₹200",
    },
    {
      id: "WELCOME10",
      label: "WELCOME10",
      type: "percent",
      value: 10,
      desc: "10% off for first order (max ₹100)",
    },
  ];

  const calcDiscount = (coupon: any, base: number) => {
    if (!coupon) return 0;
    if (coupon.minSubtotal && base < coupon.minSubtotal) return 0;
    if (coupon.type === "percent") {
      return Math.round((base * coupon.value) / 100);
    }
    return coupon.value;
  };

  const applyCouponOnCheckout = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) {
      toast.error("Enter coupon code");
      return;
    }
    const found = coupons.find((c) => c.label === code);
    if (!found) {
      toast.error("Invalid coupon");
      return;
    }
    if (found.minSubtotal && subtotal < found.minSubtotal) {
      toast.error(`Requires minimum subtotal of ${formatINR(found.minSubtotal)}`);
      return;
    }
    const disc = calcDiscount(found, subtotal);
    setAppliedCoupon(found);
    setDiscountAmount(disc);
    setCouponInput("");
    toast.success(`Coupon applied: -${formatINR(disc)}`);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscountAmount(0);
    toast.success("Coupon removed");
  };

  const discountedSubtotal = Math.max(0, subtotal - (discountAmount || 0));
  const delivery = discountedSubtotal > 0 ? DELIVERY_FEE : 0;
  const total = discountedSubtotal + delivery;

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
          setLocationURL(mapsLink);
          toast.success("Location captured");
        },
        () => toast.error("Unable to fetch location. Please enable GPS.")
      );
    } else {
      toast.error("Geolocation not supported");
    }
  };

  function onSubmit(data: CheckoutInput) {
    setPreviewData(data);
    setShowPreview(true);
  }

  // ✅ Updated WhatsApp message with clear formatting
  function confirmAndSend() {
    if (!previewData) return;
    const id = "TIF" + Math.floor(Math.random() * 90000 + 10000);

    const address = `${previewData.flat}, ${previewData.building}${
      previewData.landmark ? `, ${previewData.landmark}` : ""
    }, ${previewData.city} - ${previewData.pincode}`;
    const paymentMode = previewData.payment || "cod";

    const orderDetails = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.dish.name} × ${item.qty} — ${formatINR(
            item.dish.price * item.qty
          )}`
      )
      .join("%0A");

    const message = `
🛒 *New Food Order Received!*%0A
━━━━━━━━━━━━━━━%0A
*Order ID:* ${id}%0A
*Customer Name:* ${previewData.name}%0A
*Phone:* ${previewData.phone}%0A
%0A🏠 *Delivery Address:*%0A${address}%0A
${
  locationURL
    ? `📍 *Map Location:* ${locationURL}%0A`
    : ""
}
━━━━━━━━━━━━━━━%0A
🍽️ *Order Details:*%0A${orderDetails}%0A
━━━━━━━━━━━━━━━%0A
💰 *Billing Summary:*%0A
• Subtotal: ${formatINR(subtotal)}%0A
• Discount: ${formatINR(discountAmount || 0)}%0A
• Delivery: ${formatINR(delivery)}%0A
━━━━━━━━━━━━━━━%0A
*Grand Total:* ${formatINR(total)}%0A
💵 *Payment Mode:* ${
      paymentMode === "cod" ? "Cash on Delivery" : paymentMode
    }%0A
━━━━━━━━━━━━━━━%0A
🕒 *Order Time:* ${new Date().toLocaleString()}%0A
%0A✅ Thank you for ordering with us!
`.trim();

    const ownerNumber = "7080216257";
    const whatsappURL = `https://wa.me/${ownerNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
    toast.success(`Order placed — ID: ${id}`);

    clear();
    setShowPreview(false);
    setPreviewData(null);
    reset();
    setLocationURL(null);

    setTimeout(() => navigate("/"), 500);
  }

  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-600 text-lg">
        Your cart is empty. Add some items first!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-6 md:p-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        {/* Left Section - Checkout Form */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Link
                to="/cart"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <ArrowLeft size={18} />{" "}
                <span className="font-medium">Back to Cart</span>
              </Link>
              <h2 className="text-2xl font-bold text-gray-900 ml-2">
                Checkout
              </h2>
            </div>
            <div className="text-sm text-gray-500">Step 3 of 3</div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  placeholder="John Doe"
                  className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-3 py-2 shadow-sm"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="9876543210"
                  className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-3 py-2 shadow-sm"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Flat / Floor
                </label>
                <input
                  {...register("flat")}
                  placeholder="Apt 302"
                  className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-3 py-2 shadow-sm"
                />
                {errors.flat && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.flat.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Building Name
                </label>
                <input
                  {...register("building")}
                  placeholder="Sunshine Residency"
                  className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-3 py-2 shadow-sm"
                />
                {errors.building && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.building.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Landmark (optional)
                </label>
                <input
                  {...register("landmark")}
                  placeholder="Near Park / Temple"
                  className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-3 py-2 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  {...register("city")}
                  placeholder="Bengaluru"
                  className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-3 py-2 shadow-sm"
                />
                {errors.city && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pincode
              </label>
              <input
                {...register("pincode")}
                placeholder="560001"
                className="mt-1 block w-full rounded-lg border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-3 py-2 shadow-sm"
              />
              {errors.pincode && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.pincode.message}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={getLocation}
              className="flex items-center gap-2 text-sm text-amber-600 hover:text-amber-700 font-medium"
            >
              <MapPin size={18} /> Share My Current Location
            </button>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Select Payment Method
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <label className="flex items-center gap-3 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    value="cod"
                    {...register("payment")}
                    defaultChecked
                  />
                  <div className="flex items-center gap-2">
                    <Banknote className="text-amber-500" size={18} />
                    <span>Cash on Delivery</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 border rounded-lg p-3 bg-gray-50 text-gray-400 cursor-not-allowed">
                  <input type="radio" disabled />
                  <div className="flex items-center gap-2">
                    <Smartphone size={18} />
                    <span>UPI / Wallet (Coming Soon)</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 border rounded-lg p-3 bg-gray-50 text-gray-400 cursor-not-allowed">
                  <input type="radio" disabled />
                  <div className="flex items-center gap-2">
                    <CreditCard size={18} />
                    <span>Credit / Debit Card (Coming Soon)</span>
                  </div>
                </label>
              </div>
              <p className="mt-3 text-sm text-orange-600 font-medium">
                ⚠️ Currently, we only accept Cash on Delivery.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-amber-600 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right Section - Order Summary */}
        <div className="bg-gray-50 rounded-xl p-6 h-fit">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h3>

          <div className="space-y-3 border-b pb-4 max-h-48 overflow-auto">
            {items.map((item) => (
              <div key={item.dish.id} className="flex justify-between text-gray-700">
                <span>
                  {item.dish.name} × {item.qty}
                </span>
                <span>{formatINR(item.dish.price * item.qty)}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>{formatINR(subtotal)}</span>
            </div>

            {discountAmount > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Discount</span>
                <span className="text-green-700">
                  - {formatINR(discountAmount)}
                </span>
              </div>
            )}

            <div className="flex justify-between text-gray-700">
              <span>Subtotal after discount</span>
              <span>{formatINR(discountedSubtotal)}</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Delivery</span>
              <span>{formatINR(delivery)}</span>
            </div>

            <div className="flex justify-between mt-3 pt-3 border-t font-semibold text-lg text-gray-900">
              <span>Total</span>
              <span>{formatINR(total)}</span>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Apply Coupon</h4>
              <div className="flex gap-2">
                <input
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:ring-amber-500 focus:border-amber-500"
                />
                <button
                  onClick={applyCouponOnCheckout}
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                >
                  Apply
                </button>
              </div>

              {appliedCoupon && (
                <div className="mt-3 flex items-center justify-between bg-green-50 text-green-700 px-3 py-2 rounded-lg">
                  <span>
                    ✅ {appliedCoupon.label} applied (
                    {formatINR(discountAmount)} off)
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Preview Modal */}
      <AnimatePresence>
        {showPreview && previewData && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 space-y-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                Confirm Your Order
              </h3>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Name:</strong> {previewData.name}
                </p>
                <p>
                  <strong>Phone:</strong> {previewData.phone}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {previewData.flat}, {previewData.building},{" "}
                  {previewData.city} - {previewData.pincode}
                </p>
                {previewData.landmark && (
                  <p>
                    <strong>Landmark:</strong> {previewData.landmark}
                  </p>
                )}
                {locationURL && (
                  <p>
                    <strong>Map:</strong>{" "}
                    <a
                      href={locationURL}
                      target="_blank"
                      className="text-amber-600 hover:underline"
                    >
                      Open Map
                    </a>
                  </p>
                )}
              </div>

              <div className="border-t pt-4 space-y-2 text-gray-700">
                {items.map((item) => (
                  <div
                    key={item.dish.id}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.dish.name} × {item.qty}
                    </span>
                    <span>{formatINR(item.dish.price * item.qty)}</span>
                  </div>
                ))}

                <div className="flex justify-between font-semibold text-gray-900 border-t pt-3 mt-3">
                  <span>Total</span>
                  <span>{formatINR(total)}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowPreview(false)}
                  className="w-1/2 py-3 rounded-full border border-gray-300 font-semibold hover:bg-gray-50"
                >
                  Edit
                </button>
                <button
                  onClick={confirmAndSend}
                  className="w-1/2 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600"
                >
                  Confirm & Send
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
