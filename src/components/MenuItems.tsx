import { menuItems } from "../data/db";
import { MenuItem } from "../interfaces"
interface MenuItemsProps {
    addItem: (item: MenuItem) => void;
}

export default function MenuItems({addItem}: MenuItemsProps) {
    return (
        <>
            {menuItems.map((item) => (
                <button
                    key={item.id}
                    className="flex justify-between items-center 
                  border-2 border-teal-400 p-2 rounded-lg cursor-pointer transition
                  hover:bg-teal-400 hover:text-white active:bg-teal-200"
                    onClick={() => addItem(item)}
                >
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </button>
            ))}
        </>
    )
}
