import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "../store/cartStore";
import { formatINR } from "../lib/currency";
import { Trash2, CreditCard, Smartphone, X, ArrowLeft } from "lucide-react";
import { toast } from "react-hot-toast";

type Coupon = {
  id: string;
  label: string;
  type: "percent" | "flat";
  value: number;
  minSubtotal?: number;
  desc?: string;
};

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQty = useCartStore((s) => s.updateQty);
  const remove = useCartStore((s) => s.remove);
  const subtotal = useCartStore((s) => s.subtotal)();
  const clear = useCartStore((s) => s.clear);

  const navigate = useNavigate();

  const DELIVERY_FEE = subtotal > 0 ? 20 : 0;
  const [showModal, setShowModal] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const coupons: Coupon[] = [
    { id: "SAVE20", label: "SAVE20", type: "percent", value: 20, desc: "20% off sitewide" },
    { id: "UPI50", label: "UPI50", type: "flat", value: 50, minSubtotal: 200, desc: "₹50 off on UPI payments over ₹200" },
    { id: "WELCOME10", label: "WELCOME10", type: "percent", value: 10, desc: "10% off for first order (max ₹100)" },
  ];

  const calcDiscount = (coupon: Coupon | null, base: number): number => {
    if (!coupon) return 0;
    if (coupon.minSubtotal && base < coupon.minSubtotal) return 0;
    if (coupon.type === "percent") {
      return Math.round((base * coupon.value) / 100);
    }
    return coupon.value;
  };

  const discountAmount = useMemo(() => calcDiscount(appliedCoupon, subtotal), [appliedCoupon, subtotal]);
  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const delivery = discountedSubtotal > 0 ? DELIVERY_FEE : 0;
  const total = discountedSubtotal + delivery;

  const handleApplyCoupon = (): void => {
    const code = couponInput.trim().toUpperCase();
    if (!code) {
      toast.error("Enter a coupon code");
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
    setAppliedCoupon(found);
    setCouponInput("");
    toast.success(`Coupon ${found.label} applied — saved ${formatINR(calcDiscount(found, subtotal))}`);
  };

  const handleRemove = (id: string): void => {
    const removedItem = items.find((i) => i.dish.id === id);
    remove(id);
    if (removedItem) {
      toast(
        (t) => (
          <div className="flex items-center justify-between gap-4">
            <span>{removedItem.dish.name} removed</span>
            <button
              className="text-amber-500 font-medium"
              onClick={() => {
                updateQty(id, removedItem.qty);
                toast.dismiss(t.id);
              }}
            >
              Undo
            </button>
          </div>
        ),
        { duration: 4000 }
      );
    }
  };

  const handleQtyChange = (id: string, nextQty: number): void => {
    if (nextQty <= 0) {
      remove(id);
      return;
    }
    updateQty(id, nextQty);
  };

  const handleProceedToCheckout = (): void => {
    navigate("/checkout", { state: { appliedCoupon, discountAmount } });
  };

  const handleClearCart = (): void => {
    clear();
    setAppliedCoupon(null);
    toast.success("Cart cleared");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft size={18} /> <span className="font-medium">Back to Home</span>
          </Link>
          <div className="text-gray-500 text-sm">Group Order • Step 2 of 3</div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          {/* LEFT - Cart Items */}
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">Your Cart</h2>
              <div className="text-sm text-gray-500">{items.length} items</div>
            </div>

            {items.length === 0 ? (
              <div className="border rounded-xl p-8 text-center text-gray-600">
                Your cart is empty — add some delicious tiffins!
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.dish.id}
                    layout
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="border rounded-xl p-4 md:p-5 flex items-center justify-between gap-4 hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://source.unsplash.com/100x100/?${encodeURIComponent(item.dish.name + ",food")}`}
                        alt={item.dish.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.dish.name}</h4>
                        <p className="text-sm text-gray-500">{formatINR(item.dish.price)} each</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Subtotal: {formatINR(item.dish.price * item.qty)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <button
                          className="w-9 h-9 flex items-center justify-center text-lg hover:bg-gray-100"
                          onClick={() => handleQtyChange(item.dish.id, item.qty - 1)}
                        >
                          -
                        </button>
                        <div className="w-12 text-center font-medium">{item.qty}</div>
                        <button
                          className="w-9 h-9 flex items-center justify-center text-lg hover:bg-gray-100"
                          onClick={() => handleQtyChange(item.dish.id, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemove(item.dish.id)}
                        className="text-gray-400 hover:text-red-600 p-2 rounded-md"
                        title="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}

                {/* Offers */}
                <div className="border rounded-xl p-5 bg-white">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Available Offers</h3>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 bg-amber-50 rounded-lg p-3">
                      <div className="p-2 rounded-full bg-amber-500 text-white">
                        <CreditCard size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Bank Offer</div>
                        <div className="text-xs text-gray-600">10% off with XYZ Bank Credit Card</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="p-2 rounded-full bg-amber-400 text-white">
                        <Smartphone size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">UPI Offer</div>
                        <div className="text-xs text-gray-600">₹50 cashback on UPI payments above ₹200</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon Input */}
                <div className="border rounded-xl p-4 bg-white flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">Have a coupon?</h4>
                    {appliedCoupon ? (
                      <div className="text-sm text-amber-600 font-medium">{appliedCoupon.label} applied</div>
                    ) : (
                      <div className="text-sm text-gray-500">Apply code at checkout</div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <input
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition disabled:opacity-60"
                      disabled={!items.length}
                    >
                      Apply
                    </button>
                    {appliedCoupon && (
                      <button
                        onClick={() => {
                          setAppliedCoupon(null);
                          toast.success("Coupon removed");
                        }}
                        className="px-3 py-2 rounded-lg border text-gray-700 hover:bg-gray-50"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  {appliedCoupon && (
                    <div className="text-sm text-green-700">
                      {appliedCoupon.desc} — discount {formatINR(discountAmount)}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT - Order Summary */}
          <aside className="bg-gray-50 border rounded-xl p-6 sticky top-6 h-fit">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-800">Order Summary</h3>
              <button
                onClick={handleClearCart}
                className="text-sm text-red-500 hover:underline disabled:opacity-50"
                disabled={items.length === 0}
              >
                Clear
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-gray-700">
                  <span>Coupon ({appliedCoupon?.label})</span>
                  <span className="text-green-700">- {formatINR(discountAmount)}</span>
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

              <div className="border-t pt-4 mt-4 flex justify-between font-semibold text-lg text-gray-900">
                <span>Total</span>
                <span>{formatINR(total)}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="w-full text-center px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition text-gray-700 font-medium"
                disabled={items.length === 0}
              >
                View Cart
              </button>

              <button
                onClick={handleProceedToCheckout}
                className="w-full text-center px-4 py-3 rounded-lg bg-amber-500 text-white font-semibold transition hover:bg-amber-600 disabled:opacity-60"
                disabled={items.length === 0}
              >
                Proceed to Checkout
              </button>

              <Link to="/" className="text-center text-sm text-gray-500 hover:underline">
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>

        {/* MODAL - Mobile Bottom Sheet */}
        <AnimatePresence>
          {showModal && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setShowModal(false)}
              />

              <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 300 }}
                dragElastic={0.3}
                onDragEnd={(_, info) => info.point.y > 200 && setShowModal(false)}
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl p-5 z-50 shadow-xl max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Your Cart</h3>
                  <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-800">
                    <X size={22} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.dish.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.dish.name}</p>
                        <p className="text-sm text-gray-500">
                          {formatINR(item.dish.price)} × {item.qty}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQtyChange(item.dish.id, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded-md"
                        >
                          -
                        </button>
                        <span className="w-6 text-center">{item.qty}</span>
                        <button
                          onClick={() => handleQtyChange(item.dish.id, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded-md"
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemove(item.dish.id)}
                          className="ml-2 text-gray-400 hover:text-red-600 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>{formatINR(subtotal)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between mb-2">
                        <span>Coupon</span>
                        <span>-{formatINR(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between mb-2">
                      <span>Delivery</span>
                      <span>{formatINR(delivery)}</span>
                    </div>
                    <div className="flex justify-between mt-3 pt-3 border-t font-semibold text-lg text-gray-900">
                      <span>Total</span>
                      <span>{formatINR(total)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleProceedToCheckout}
                      className="flex-1 py-3 rounded-lg bg-amber-500 text-white font-semibold"
                    >
                      Proceed to Checkout
                    </button>
                    <Link to="/menu" className="flex-1 py-3 rounded-lg border text-center text-gray-700">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
