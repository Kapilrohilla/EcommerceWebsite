import { HeartIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { add2cart } from "../redux/cart";
import store from "../redux/store";

type ProductCardType = {
  image: string;
  title: string;
  shortDescription: string;
  price: number;
  discountedPrice: number;
  productObject: any;
};

const ProductCard = ({
  image,
  title,
  shortDescription,
  price,
  productObject,
}: // discountedPrice,
ProductCardType) => {
  // @ts-ignore
  const token = store.getState().user?.token;

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const isInCart =
    cart.filter((productInCart: any) => {
      return productInCart.product?._id === productObject?._id;
    }).length > 0;

  const handleAdd2cart = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      productId: productObject._id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    //@ts-ignore
    fetch(`${import.meta.env.VITE_BASEURL}/cart/add`, requestOptions)
      .then((response) => response.json())
      .then((result: any) => {
        if (result?.valid) {
          // @ts-ignore
          dispatch(add2cart(productObject));
        } else {
          alert(result?.message);
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className=" min-w-96 w-full max-w-lg rounded-t-md rounded-tr-md overflow-hidden my-3 cursor-pointer shadow-md p-2">
      <div className="relative">
        <img src={image} className=" h-80 w-full object-contain" />
        <div className="absolute top-5 right-5 bg-white h-8 w-8 flex rounded-full items-center justify-center">
          <HeartIcon color="#000" className="h-6 w-6" />
        </div>
        <button
          className="absolute bottom-4 bg-white w-80 left-1/2 -translate-x-1/2 text-black p-2 rounded-md"
          disabled={isInCart}
          // @ts-ignore
          onClick={handleAdd2cart}
        >
          {isInCart ? "Added to cart" : "Add to Cart"}
        </button>
      </div>
      <div className="pt-3 flex flex-col gap-2 ">
        <h3 className="font-bold">{title}</h3>
        <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {shortDescription}
        </p>
        <p className="flex gap-3">
          <span className="font-semibold">
            ₹{price.toLocaleString("en-US")}
          </span>
          <span className="line-through text-cgrey font-semibold">
            ₹{(price + 20).toLocaleString("en-US")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
