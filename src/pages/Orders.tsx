import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <>
      <p className="text-center w-full text-md mt-20">Orders</p>
      <div className="max-w-5xl w-full m-auto">
        <p className="w-full text-center">Total Order count: 5</p>
        <div className="flex flex-row max-w-5xl m-auto flex-wrap w-full justify-center my-16">
          {[1, 2, 3, 4, 5, 6, 8].map((order) => {
            return <OrderCard />;
          })}
          <OrderCard />
        </div>
      </div>
    </>
  );
};

const OrderCard = () => {
  return (
    <Link to="/orders/2345">
      <div className="flex flex-col w-full max-w-56  md:max-w-72 gap-0 m-2 ">
        <img
          src="https://mern-store-gold.vercel.app/images/placeholder-image.png"
          alt=""
          className=" object-cover "
        />
        <div className="px-3 py-2 border ">
          <p className="font-bold">Order #38492384293842384</p>
          <p>Order on Feb, 5, 2024</p>
          <p>Order Total 50ruppe</p>
        </div>
      </div>
    </Link>
  );
};

export default Orders;
