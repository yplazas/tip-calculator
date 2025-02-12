import Header from "./components/Header";
import Card from "./components/Card";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem } = useOrder();

  return (
    <>
      <Header />
      <main className="max-w-300 mx-auto my-6 gap-6 grid md:grid-cols-2">
        <Card title="Menu">
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
        </Card>
        <Card title="Consumo">
          {order.length === 0 ? (
            <p>la orden está vacía</p>
          ) : (
            order.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-2 border-teal-400 p-2 rounded-lg"
              >
                <p>{item.name}</p>
                <p>{item.quantity}</p>
              </div>
            ))
          )}
        </Card>
      </main>
    </>
  );
}

export default App;
