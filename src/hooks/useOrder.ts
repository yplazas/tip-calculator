import { useState } from "react";
import { MenuItem, OrderItem } from "../interfaces";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (itemId: number) => {
    const updatedOrder = order.filter((item) => item.id !== itemId);
    setOrder(updatedOrder);
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  };
}
