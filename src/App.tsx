import Header from "./components/Header";
import Card from "./components/Card";
import useOrder from "./hooks/useOrder";
import OrderTotals from "./components/OrderTotals";
import Propina from "./components/Propina";
import OrderContents from "./components/OrderContents";
import MenuItems from "./components/MenuItems";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <Header />
      <main className="max-w-300 mx-auto my-6 gap-6 grid grid-cols-2 max-lg:grid-cols-1 max-lg:mx-2.5">
        <Card title="Menu">
          <MenuItems addItem={addItem} />
        </Card>
        <Card title="Consumo">
          {order.length === 0 ? (
            <p>la orden está vacía</p>
          ) : (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <Propina setTip={setTip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          )}
        </Card>
      </main>
    </>
  );
}
export default App;
