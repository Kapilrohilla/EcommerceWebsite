import { Button } from "@material-tailwind/react";

import { Card, Input, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import store from "../redux/store";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/userSlice";

const Address = () => {
  const cartItems = useSelector((state: any) => state.user).user.cart;
  const [disabledInput, setDisabledInput] = useState(false);
  const subTotal = useMemo(
    () =>
      cartItems.reduce((acc: number, current: any) => {
        return (
          acc + Number(current?.product?.price) * Number(current?.quantity)
        );
      }, 0),
    [cartItems]
  );

  return (
    <>
      <div className="m-4 lg:m-16 ">
        <h1 className="font text-3xl" style={{ fontWeight: "500" }}>
          Checkout
        </h1>
        <div className="flex flex-col lg:flex-row my-5 lg:my-10 gap-5">
          <div className="w-full lg:w-2/3">
            <SimpleRegistrationForm
              disabledInput={disabledInput}
              setDiabledInput={setDisabledInput}
            />
          </div>
          <div className="w-full lg:w-1/3">
            <SubTotal subTotal={subTotal} shouldPlaceOrder={disabledInput} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;

export function SimpleRegistrationForm({
  disabledInput,
  setDiabledInput,
}: {
  disabledInput: boolean;
  setDiabledInput: React.Dispatch<boolean>;
}) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState(0);
  // const navigate = useNavigate();

  function handleSubmit(e: Event) {
    e.preventDefault();
    //@ts-ignore
    const token = store.getState().user?.token;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      address: `${name}, ${address}, ${city}, ${pinCode}`,
      mobile: mobile,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    //@ts-ignore
    fetch(`${import.meta.env.VITE_BASEURL}/cart/address`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        //@ts-ignore
        if (result?.valid) {
          setDiabledInput(true);
          alert("address saved successfully");
        } else {
          alert("something went wrong");
        }
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <Card color="transparent" shadow={false} className="w-full">
      <Typography variant="h4" color="blue-gray">
        Shipping Address
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {/* Nice to meet you! Enter your details to register. */}
        Enter your delivery Address
      </Typography>
      <form className="mt-8 mb-2 w-full max-w-[500]" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6 w-full lg:max-w-[500]">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            value={name}
            onChange={(e) => {
              if (!disabledInput) {
                setName(e.target.value);
              }
            }}
            placeholder="name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "be;fore:content-none after:content-none",
            }}
            required={true}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Mobile number
          </Typography>

          <Input
            size="lg"
            placeholder="8287842425"
            value={mobile}
            onChange={(e) => {
              if (!disabledInput) {
                setMobile(e.target.value);
              }
            }}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required={true}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Flat, House, Building, Apartment
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="********"
            value={address}
            onChange={(e) => {
              if (!disabledInput) {
                setAddress(e.target.value);
              }
            }}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required={true}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            City
          </Typography>
          <Input
            // type="password"
            type="text"
            value={city}
            onChange={(e) => {
              if (!disabledInput) {
                setCity(e.target.value);
              }
            }}
            size="lg"
            required={true}
            // placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Pin code
          </Typography>
          <Input
            type="number"
            size="lg"
            value={pinCode}
            min="0"
            required={true}
            onChange={(e) => {
              if (!disabledInput) {
                setPinCode(Number(e.target.value));
              }
            }}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button
          type={"submit"}
          // style={{ backgroundColor: "#808080" }}
          disabled={disabledInput}
          className="mt-6 "
        >
          Deliver Here
        </Button>
      </form>
    </Card>
  );
}

export function SubTotal({
  subTotal,
  shouldPlaceOrder,
}: {
  subTotal: number;
  shouldPlaceOrder: boolean;
}) {
  //@ts-ignore
  const token = store.getState().user?.token;
  const navigation = useNavigate();
  const dispatch = useDispatch();

  function handlePlaceOrder() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    //@ts-ignore
    fetch(`${import.meta.env.VITE_BASEURL}/order`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert("Order successfully created");
        //@ts-ignore
        dispatch(clearCart());
        navigation("/orders");
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <div className="border rounded-md border-gray-300 p-8 ">
      <div>
        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
          <h2 className="font-bold text-lg">Subtotal</h2>
          <p>₹{subTotal.toLocaleString("en-US")}</p>
        </div>
        <div className="py-3">
          <div className="flex flex-row justify-between py-2 border-b border-gray-300">
            <p className="text-sm">Delivery Charge</p>
            <span className="text-sm">₹{"00"}</span>
          </div>
          <div className="pt-4 flex flex-row justify-between items-center">
            <p className="text-base font-bold">Grand Total </p>
            <span>₹{subTotal.toLocaleString("en-US")}</span>
          </div>
        </div>
      </div>
      {shouldPlaceOrder && (
        <Button onClick={handlePlaceOrder} className="w-full mt-5">
          Place Order
        </Button>
      )}
    </div>
  );
}
