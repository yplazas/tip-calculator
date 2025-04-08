import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../interfaces";

interface OrderTotalsProps {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;
}
export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = subtotalAmount * tip;
    const totalAmount = subtotalAmount + tipAmount
    return (
        <div className="border-t border-teal-400 mt-2">
            <h2 className="font-black my-2">Total y propinas</h2>
            <p>Subtotal a pagar: {' '}
                <span className="font-black">
                    {formatCurrency(subtotalAmount)}
                </span>
            </p>
            <p>Propina: {' '}
                <span className="font-black">
                    {formatCurrency(tipAmount)}
                </span>
            </p>
            <p>Total a pagar: {' '}
                <span className="font-black">
                    {formatCurrency(totalAmount)}
                </span>
            </p>
            <button
                onClick={placeOrder}
                className="bg-black text-white rounded-lg cursor-pointer p-1.5 mt-3 w-full"
            >
                Guardar orden
            </button>
        </div>
    )
}
