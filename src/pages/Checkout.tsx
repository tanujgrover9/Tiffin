/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCartStore } from "../store/cartStore";
import { formatINR } from "../lib/currency";


const CheckoutSchema = z.object({
  name: z.string().min(2, "Enter full name"),
  address: z.string().min(10, "Enter a full delivery address"),
  phone: z.string().min(10, "Enter phone number").max(15),
});

type CheckoutInput = z.infer<typeof CheckoutSchema>;

export default function Checkout(){
  const items = useCartStore(s => s.items);
  const subtotal = useCartStore(s => s.subtotal)();
  const clear = useCartStore(s => s.clear);
  const delivery = subtotal > 0 ? 20 : 0;
  const total = subtotal + delivery;

  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutInput>({ resolver: zodResolver(CheckoutSchema) });

  function onSubmit(_data: CheckoutInput){
    // TODO: integrate backend & payment
    const id = "TIF" + Math.floor(Math.random()*90000+10000);
    alert(`Order placed! ID: ${id}`);
    clear();
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl">
      <h2 className="text-2xl font-bold">Checkout</h2>

      {items.length === 0 ? (
        <div className="mt-4 text-gray-600">Your cart is empty.</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input {...register("name")} className="mt-1 block w-full rounded border px-3 py-2" />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Delivery Address</label>
            <textarea {...register("address")} className="mt-1 block w-full rounded border px-3 py-2" />
            {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input {...register("phone")} className="mt-1 block w-full rounded border px-3 py-2" />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div className="p-3 rounded border">
            <div className="flex justify-between"><div>Subtotal</div><div>{formatINR(subtotal)}</div></div>
            <div className="flex justify-between mt-2"><div>Delivery</div><div>{formatINR(delivery)}</div></div>
            <div className="flex justify-between mt-2 font-bold text-lg"><div>Total</div><div>{formatINR(total)}</div></div>
          </div>

          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 rounded bg-amber-500 text-white">Place Order</button>
          </div>
        </form>
      )}
    </div>
  );
}