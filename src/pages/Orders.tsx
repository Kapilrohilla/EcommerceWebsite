import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../redux/store";

type ProductInOrderType = {
  quantity: number;
  _id: string;
};
type OrderType = {
  products: ProductInOrderType[];
  totalAmount: number;
  userId: string;
  __v: number;
  _id: string;
};

const Orders = () => {
  //@ts-ignore
  const token = store.getState().user?.token;
  const [orders, setOrders] = useState<OrderType[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      signal,
      headers: myHeaders,
      redirect: "follow",
    };
    //@ts-ignore
    fetch(`${import.meta.env.VITE_BASEURL}/order`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.valid) {
          setOrders(result.orders);
        }
      })
      .catch((error) => console.log("error", error));

    return () => controller.abort();
  }, []);

  return (
    <>
      <p className="text-center w-full text-md mt-20">Orders</p>
      <div className="max-w-5xl w-full m-auto">
        <p className="w-full text-center">Total Order count: {orders.length}</p>
        <div className="flex flex-row max-w-5xl m-auto flex-wrap w-full justify-center my-16">
          {orders.map((order) => {
            return (
              <OrderCard
                key={order._id}
                orderId={order._id}
                totalAmount={order.totalAmount}
                orderDetail={order}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const OrderCard = ({
  orderId,
  totalAmount,
  orderDetail,
}: {
  orderId: string;
  totalAmount: number;
  orderDetail: OrderType;
}) => {
  const stateObj = { ...orderDetail };
  return (
    <Link to={{ pathname: `/orders/${orderId}` }} state={stateObj}>
      <div className="flex flex-col w-full max-w-56  md:max-w-72 gap-0 m-2 ">
        <img
          src="https://mern-store-gold.vercel.app/images/placeholder-image.png"
          alt=""
          className=" object-cover "
        />
        <div className="px-3 py-2 border ">
          <p className="font-bold text-ellipsis overflow-hidden whitespace-nowrap">
            Order #{orderId}
          </p>
          {/* <p>Order on Feb, 5, 2024</p> */}
          <p>Order Total ₹{totalAmount}</p>
        </div>
      </div>
    </Link>
  );
};

export default Orders;
