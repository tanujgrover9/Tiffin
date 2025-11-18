import { motion } from "framer-motion";
import { CheckCircle, Clock, XCircle } from "lucide-react";

export default function Orders() {
  const orders = [
    {
      id: "ORD123",
      date: "Oct 25, 2025",
      items: [
        { name: "Paneer Butter Masala", qty: 2, price: 220 },
        { name: "Tandoori Roti", qty: 4, price: 20 },
      ],
      total: 500,
      status: "Delivered",
    },
    {
      id: "ORD124",
      date: "Oct 23, 2025",
      items: [{ name: "Rajma Chawal", qty: 1, price: 180 }],
      total: 180,
      status: "In Progress",
    },
  ];

  const statusColor = {
    Delivered: "text-green-600",
    "In Progress": "text-yellow-500",
    Cancelled: "text-red-600",
  };

  const statusIcon = {
    Delivered: <CheckCircle size={20} className="text-green-600" />,
    "In Progress": <Clock size={20} className="text-yellow-500" />,
    Cancelled: <XCircle size={20} className="text-red-600" />,
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-extrabold text-orange-600 mb-8 text-center">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          No orders placed yet. Start ordering delicious meals!
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <motion.div
              key={order.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b pb-3 mb-3">
                <div>
                  <p className="text-gray-700 font-semibold">Order ID: {order.id}</p>
                  <p className="text-sm text-gray-400">{order.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  {statusIcon[order.status as keyof typeof statusIcon]}
                  <span
                    className={`font-semibold ${statusColor[order.status as keyof typeof statusColor]}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-2">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-gray-700">
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t mt-4 pt-3 flex justify-between items-center">
                <span className="text-gray-600 text-sm">Total:</span>
                <span className="text-lg font-bold text-orange-600">
                  ₹{order.total}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
