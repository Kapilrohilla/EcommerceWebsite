const Address = () => {
  return (
    <>
      <div className="m-4 lg:m-16 ">
        <h1 className="font text-3xl" style={{ fontWeight: "500" }}>
          Checkout
        </h1>
        <div className="flex flex-col lg:flex-row my-5 lg:my-10 gap-5">
          <div className="w-full lg:w-2/3">
            {/* <TableWithStripedColumns /> */}
            <SimpleRegistrationForm />
          </div>
          <div className="w-full lg:w-1/3">
            <SubTotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;

import { Button } from "@material-tailwind/react";

import { Card, Input, Typography } from "@material-tailwind/react";

export function SimpleRegistrationForm() {
  return (
    <Card color="transparent" shadow={false} className="w-full">
      <Typography variant="h4" color="blue-gray">
        Shipping Address
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {/* Nice to meet you! Enter your details to register. */}
        Enter your delivery Address
      </Typography>
      <form className="mt-8 mb-2 w-full max-w-[500]">
        <div className="mb-1 flex flex-col gap-6 w-full lg:max-w-[500]">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Mobile number
          </Typography>

          <Input
            size="lg"
            placeholder="82828282828"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Flat, House, Building, Apartment
          </Typography>
          <Input
            // type="password"
            type="text"
            size="lg"
            // placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            City
          </Typography>
          <Input
            // type="password"
            type="text"
            size="lg"
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
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button className="mt-6 ">Deliver Here</Button>
      </form>
    </Card>
  );
}

export function SubTotal() {
  return (
    <div className="border rounded-md border-gray-300 p-8 ">
      <div>
        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
          <h2 className="font-bold text-lg">Subtotal</h2>
          <p>$200</p>
        </div>
        <div className="py-3">
          <div className="flex flex-row justify-between py-2 border-b border-gray-300">
            <p className="text-sm">Delivery Charge</p>
            <span className="text-sm">$5.00</span>
          </div>
          <div className="pt-4 flex flex-row justify-between items-center">
            <p className="text-base font-bold">Grand Total </p>
            <span>${205}</span>
          </div>
        </div>
      </div>
      {/* <Button className="w-full mt-5">Proceed to Checkout</Button> */}
    </div>
  );
}
