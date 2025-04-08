import { MdDeleteForever } from "react-icons/md";
import { OrderItem } from "../interfaces"
import { formatCurrency } from "../helpers";

interface OrderContentsProps {
    order: OrderItem[];
    removeItem: (itemId: number) => void;
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <>
            {order.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col gap-1.5 border-2 border-teal-400 p-2 rounded-lg"
                >
                    <div className="flex justify-between items-center">
                        <p>{item.name}</p>
                        <p>{formatCurrency(item.price)}</p>
                    </div>
                    <div className="flex justify-between items-center font-black">
                        <p>Cantidad: {item.quantity} - Subtotal: {formatCurrency(item.price * item.quantity)}</p>
                        <MdDeleteForever onClick={() => removeItem(item.id)} style={{ width: "25px", height: "25px", cursor: "pointer", color: "red" }} />
                    </div>

                </div>
            ))
            }

        </>
    )
}
