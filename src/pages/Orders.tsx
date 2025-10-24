import { useOrderStore } from "../store/orderStore";
import OrderCard from "../components/OrderCard";

export default function Orders() {
  const orders = useOrderStore((s) => s.orders);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Orders</h2>
      {orders.length === 0 ? (
        <div className="text-gray-600">
          No orders yet. Place your first tiffin!
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {orders.map((o) => (
            <OrderCard key={o.id} order={o} />
          ))}
        </div>
      )}
    </div>
  );
}
