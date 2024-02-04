import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector, UseDispatch } from "react-redux";
import { add2cart, updateCart } from "../redux/cart";
import store from "../redux/store";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state: any) => state.cart);
  return (
    <>
      <div className="m-4 lg:m-16 ">
        <h1 className="font text-3xl" style={{ fontWeight: "500" }}>
          Cart
        </h1>
        <div className="flex flex-col lg:flex-row my-5 lg:my-10 lg:gap-3">
          <div className="w-full xl:w-2/3">
            <TableWithStripedColumns cartItems={cart} />
          </div>
          <div className="w-full xl:w-1/3">
            <SubTotal cartItems={cart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

const TABLE_HEAD = ["Product", "Price", "Quantity"];

const TABLE_ROWS = [1, 2, 3, 4, 5];

export function TableWithStripedColumns({ cartItems }: { cartItems: any }) {
  const dispatch = useDispatch();
  //@ts-ignore
  const token = store.getState().user?.token;

  const incrementItem = (cartItem: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    console.log(cartItem);
    // return console.log(cartItem?.product?._id);
    var raw = JSON.stringify({
      productId: cartItem?.product?._id,
    });

    // console.log(raw);
    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };

    // @ts-ignore
    // fetch(`${import.meta.env.VITE_BASEURL}/cart/add`, requestOptions)
    //   .then((response) => response.json())
    //   .then((result: any) => {
    //     if (result?.valid) {
    //       console.log(result?.message);
    // @ts-ignore
    dispatch(updateCart(cartItem.product));
    //   } else {
    //     alert(result?.message);
    //   }
    // })
    // .catch((error) => console.log("error", error));
  };
  return (
    <div className="h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="  p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem: any, index: number) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 ";

            return (
              <tr key={cartItem?._id}>
                <td className={classes}>
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={cartItem?.product?.image}
                      alt="dress"
                      className="h-10 w-10 rounded-full object-contain"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-ellipsis overflow-hidden max-w-36 lg:max-w-96 whitespace-nowrap">
                        {cartItem?.product?.name}
                      </h4>
                      {/* <p className="text-sm opacity-70">Size: {"S"}</p> */}
                    </div>
                  </div>
                </td>
                <td className={`${classes}`}>
                  <p className="font-light">
                    ₹{Number(cartItem?.product?.price).toLocaleString("en-US")}
                  </p>
                </td>
                <td className="w-fit">
                  <div className="flex items-center gap-4 border border-black p-2 rounded-lg w-fit">
                    <button
                      type="button"
                      className="flex items-center justify-center  ransition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none p-2 rounded-md"
                    >
                      <MinusIcon color="#000" className="h-6 w-6" />
                    </button>
                    {cartItem?.quantity}
                    <button
                      onClick={() => incrementItem(cartItem)}
                      type="button"
                      className="flex items-center justify-center  ransition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none p-2 rounded-md"
                    >
                      <PlusIcon color="#000" className="h-6 w-6" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function SubTotal({ cartItems }: { cartItems: any }) {
  const subTotal = useMemo(
    () =>
      cartItems.reduce((acc: number, current: any) => {
        return acc + Number(current?.product?.price);
      }, 0),
    []
  );

  const navigate = useNavigate();
  return (
    <div className="border rounded-md border-gray-300 p-8 ">
      <div>
        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
          <h2 className="font-bold text-lg">Subtotal</h2>
          <p>₹{Number(subTotal).toLocaleString("en-US")}</p>
        </div>
        <div className="py-3">
          <div className="flex flex-row justify-between py-2 border-b border-gray-300">
            <p className="text-sm">Delivery Charge</p>
            <span className="text-sm">₹{80}</span>
          </div>
          <div className="pt-4 flex flex-row justify-between items-center">
            <p className="text-base font-bold">Grand Total </p>
            <span>₹{(Number(subTotal) + 80).toLocaleString("en-US")}</span>
          </div>
        </div>
      </div>
      <Button onClick={() => navigate("/address")} className="w-full mt-5">
        Proceed to Checkout
      </Button>
    </div>
  );
}
