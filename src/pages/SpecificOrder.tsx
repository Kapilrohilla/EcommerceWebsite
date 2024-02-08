import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SpecificOrder = () => {
  const location = useLocation();
  // console.log(location.state);
  const orderDetails = location.state;
  console.log(orderDetails);
  // console.log(orderDetails?.totalAmount);
  return (
    <div className="max-w-5xl w-full m-auto pt-20 px-5">
      <h1 className="font-semibold ">Order Details</h1>
      <hr className="h-0.5" />
      <div className=" pt-5">
        <p>Order ID: #{orderDetails._id}</p>
        {/* <p>Order Date # {new Date().toLocaleDateString()}</p> */}
      </div>
      <div className="py-5">
        <h2>Order Items</h2>
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        {orderDetails.products.map((item: any) => {
          console.log(item);
          return <SpecificItemCard key={item?._id} item={item} />;
        })}
      </div>
      <div className="p-3 border w-full my-2">
        <h2 className="font-semibold mb-2">Order Summary</h2>
        <hr className="h-1" />
        <div className="flex flex-row justify-between my-3">
          <span>Subtotal</span> <span>₹{orderDetails?.totalAmount}</span>
        </div>
        <div className="flex flex-row justify-between my-3">
          <span>Shipping & Handling </span> <span>₹0</span>
        </div>
        {/* <div className="flex flex-row justify-between my-3">
          <span>Subtotal</span> <span>₹00</span>
        </div> */}
        <hr className="h-1" />
        <div className="flex flex-row justify-between my-3">
          <span>Total</span> <span>₹ {orderDetails?.totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

const SpecificItemCard = ({ item }: any) => {
  const [product, setProduct] = useState<any>({});
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const apiUrl = `${import.meta.env.VITE_BASEURL}/product/${item.productid}`;
    // console.log(apiUrl);
    fetch(apiUrl, {
      method: "GET",
      signal,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data?.valid) {
          // console.log(data?.product, "< _ data");
          setProduct(data?.product);
        } else {
          alert(data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(product, "< _ product");
  // console.log(item, ", sepcief");
  return (
    <div className="flex flex-row h-20 gap-4 m-2 w-full  sm:w-auto sm:min-w-96">
      <img
        src={
          product === null
            ? "https://mern-store-gold.vercel.app/images/placeholder-image.png"
            : product?.image
        }
        alt=""
        className="h-full aspect-auto object-contain"
      />
      <div className="flex flex-col w-full">
        <p>{product?.name}</p>
        <p>INR{product?.price}</p>
        <p className="flex flex-row justify-between">
          <span>Quantity {item.quantity}</span>{" "}
          <span>Total Price INR {product.price * item?.quantity}</span>
        </p>
      </div>
    </div>
  );
};
export default SpecificOrder;
