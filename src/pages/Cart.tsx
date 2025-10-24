import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { formatINR } from "../lib/currency";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQty = useCartStore((s) => s.updateQty);
  const remove = useCartStore((s) => s.remove);
  const subtotal = useCartStore((s) => s.subtotal)();
  const delivery = subtotal > 0 ? 20 : 0;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {items.length === 0 ? (
        <div className="text-gray-600 text-center mt-10">
          Your cart is empty. Add some delicious tiffins!
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6">
          {/* Items Section */}
          <div className="flex-1 flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.dish.id}
                className="bg-white/50 backdrop-blur-lg rounded-2xl p-4 flex items-center justify-between shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`https://source.unsplash.com/80x80/?${encodeURIComponent(
                      item.dish.name + ",food"
                    )}`}
                    alt={item.dish.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{item.dish.name}</div>
                    <div className="text-sm text-gray-600">
                      {formatINR(item.dish.price)} x {item.qty}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.dish.id, item.qty - 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100 transition"
                  >
                    -
                  </button>
                  <div className="w-8 text-center font-medium">{item.qty}</div>
                  <button
                    onClick={() => updateQty(item.dish.id, item.qty + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => remove(item.dish.id)}
                    className="ml-2 text-red-600 hover:text-red-700 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="md:w-96 bg-white/50 backdrop-blur-lg rounded-3xl p-6 shadow-md flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>{formatINR(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Delivery</span>
              <span>{formatINR(delivery)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-900 border-t pt-3 mt-3">
              <span>Total</span>
              <span>{formatINR(total)}</span>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/menu"
                className="w-full text-center px-4 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="w-full text-center px-4 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
