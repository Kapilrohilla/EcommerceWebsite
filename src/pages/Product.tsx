import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Chip } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import store from "../redux/store";
import { decrementCartProduct, incrementCartProduct } from "../redux/userSlice";

const Product = () => {
  const productId = useParams()?.productId;
  const navigation = useNavigate();
  if (!productId) {
    return <></>;
  }
  const [productDetails, setProductDetails] = useState({});
  //@ts-ignore
  const cartItems = useSelector((state) => state.user.user?.cart);
  const itemInCartQuantity = cartItems.find((productItem: any) => {
    return productItem?.product?._id === productId;
  })?.quantity;
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`${import.meta.env.VITE_BASEURL}/product/${productId}`, {
      method: "GET",
      signal,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data?.valid) {
          setProductDetails(data?.product);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      controller.abort();
    };
  }, []);

  const dispatch = useDispatch();

  //@ts-ignore
  const token = store.getState().user?.token;

  const incrementItem = (cartItem: string) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    console.log(cartItem);
    var raw = JSON.stringify({
      productId: cartItem,
    });

    // console.log(raw);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    // @ts-ignore
    fetch(`${import.meta.env.VITE_BASEURL}/cart/add`, requestOptions)
      .then((response) => response.json())
      .then((result: any) => {
        if (result?.valid) {
          // console.log(result?.message);
          console.log(result);
          // setItemInCartQuantity(itemInCartQuantity + 1);
          // @ts-ignore
          dispatch(incrementCartProduct(cartItem));
          navigation("/cart");
        } else {
          alert(result?.message);
        }
      })
      .catch((error) => console.log("error", error));
  };
  const decrementItem = (cartItem: string) => {
    //@ts-ignore
    console.log(cartItem);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ productId: cartItem });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    //@ts-ignore
    fetch(`${import.meta.env.VITE_BASEURL}/cart/remove`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result?.valid) {
          //@ts-ignore
          dispatch(decrementCartProduct(cartItem));
        } else {
          alert(result?.message);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 py-9 my-20 px-4 sm:px-20 2xl:px-96 md:gap-10">
        <img
          src={
            productDetails?.image
              ? productDetails?.image
              : "https://mern-store-gold.vercel.app/images/placeholder-image.png"
          }
          alt=""
          className="flex-1 max-h-[350px]"
        />

        <div className="flex-1 flex-col justify-between w-full flex">
          <div>
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-bold text-3xl font-sans">
                {/* @ts-ignore */}
                {productDetails?.name}
              </h1>
              <Chip
                value={productDetails?.stock ? "in stocks" : "Out of stocks"}
                color="green"
                size="sm"
              />
            </div>
            {/* @ts-ignore */}
            <p className="font-medium text-xl">{productDetails?.category}</p>
            <p>
              INR {productDetails?.price}/-{" "}
              <span className="text-cgrey line-through">
                INR {productDetails?.price + 20}/-
              </span>
            </p>
            <p className="pt-5">
              {/* @ts-ignore */}
              {productDetails?.description}
            </p>
          </div>
          <div className="flex flex-row gap-5">
            {itemInCartQuantity && (
              <div className="flex items-center gap-4 border border-black p-2 rounded-lg w-fit">
                <button
                  type="button"
                  className="flex items-center justify-center  ransition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none p-2 rounded-md"
                  onClick={() => {
                    decrementItem(productId);
                  }}
                >
                  <MinusIcon color="#000" className="h-6 w-6" />
                </button>
                {itemInCartQuantity}
                <button
                  onClick={() => {
                    incrementItem(productId);
                  }}
                  type="button"
                  className="flex items-center justify-center  ransition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none p-2 rounded-md"
                >
                  <PlusIcon color="#000" className="h-6 w-6" />
                </button>
              </div>
            )}
            {!itemInCartQuantity && (
              <Button
                className="w-fit"
                onClick={() => {
                  // ? decrementItem(productId)
                  incrementItem(productDetails);
                }}
              >
                {itemInCartQuantity ? "REMOVE FROM CART" : "ADD TO CART"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
