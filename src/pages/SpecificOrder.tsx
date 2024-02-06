const SpecificOrder = () => {
  return (
    <div className="max-w-5xl w-full m-auto pt-20 px-5">
      <h1 className="font-semibold ">Order Details</h1>
      <hr className="h-0.5" />
      <div className=" pt-5">
        <p>Order ID: #{"2345665432"}</p>
        <p>Order Date # {new Date().toLocaleDateString()}</p>
      </div>
      <div className="py-5">
        <h2>Order Items</h2>
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
          return <SpecificItemCard />;
        })}
      </div>
      <div className="p-3 border w-full my-2">
        <h2 className="font-semibold mb-2">Order Summary</h2>
        <hr className="h-1" />
        <div className="flex flex-row justify-between my-3">
          <span>Subtotal</span> <span>$50</span>
        </div>
        <div className="flex flex-row justify-between my-3">
          <span>Shipping & Handling </span> <span>$0</span>
        </div>
        <div className="flex flex-row justify-between my-3">
          <span>Subtotal</span> <span>$50</span>
        </div>
        <hr className="h-1" />
        <div className="flex flex-row justify-between my-3">
          <span>Total</span> <span>$50</span>
        </div>
      </div>
    </div>
  );
};

const SpecificItemCard = () => {
  return (
    <div className="flex flex-row h-20 gap-4 m-2 w-full  sm:w-auto sm:min-w-96">
      <img
        src="https://mern-store-gold.vercel.app/images/placeholder-image.png"
        alt=""
        className="h-full aspect-auto object-contain"
      />
      <div className="flex flex-col w-full">
        <p>Nike Running Shoes</p>
        <p>$50</p>
        <p className="flex flex-row justify-between">
          <span>Quantity 1</span> <span>Total Price $50</span>
        </p>
      </div>
    </div>
  );
};
export default SpecificOrder;
