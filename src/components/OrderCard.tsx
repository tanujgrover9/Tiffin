import type { Order } from "../store/orderStore";
import { formatINR } from "../lib/currency";

export default function OrderCard({ order }: { order: Order }) {
  const statusColors: Record<Order["status"], string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Preparing: "bg-blue-100 text-blue-800",
    "Out for Delivery": "bg-amber-100 text-amber-800",
    Delivered: "bg-green-100 text-green-800",
  };

  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold">Order #{order.id}</div>
          <div className="text-sm text-gray-600">{order.date}</div>
        </div>
        <div
          className={`px-2 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`}
        >
          {order.status}
        </div>
      </div>

      <ul className="mt-3 space-y-1 text-sm text-gray-700">
        {order.items.map((i) => (
          <li key={i.dish.id}>
            {i.dish.name} × {i.qty}
          </li>
        ))}
      </ul>

      <div className="mt-3 font-semibold">Total: {formatINR(order.total)}</div>
    </div>
  );
}
