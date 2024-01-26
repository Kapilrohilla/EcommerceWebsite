import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

const Checkout = () => {
  return (
    <>
      <div className="m-4 lg:m-16 ">
        <h1 className="font text-3xl" style={{ fontWeight: "500" }}>
          Checkout
        </h1>
        <div className="flex flex-col lg:flex-row my-5 lg:my-10 ">
          <div className="w-full lg:w-2/3">
            <TableWithStripedColumns />
          </div>
          <div className="w-1/3">
            <SubTotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

import { Button, Typography } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";

const TABLE_HEAD = ["Product", "Price", "Qualit", "SubTotal", "Action"];

const TABLE_ROWS = [1, 2, 3, 4, 5];

export function TableWithStripedColumns() {
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
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 ";

            return (
              <tr key={name}>
                <td className={classes}>
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src="https://th.bing.com/th?id=OPA.ti3GipJINrpVMA474C474&w=220&h=210&c=17&o=5&pid=21.1"
                      alt="dress"
                      className="h-10  w-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        Girls Pink Moona
                      </h4>
                      <p className="text-sm opacity-70">Size: {"S"}</p>
                    </div>
                  </div>
                </td>
                <td className={`${classes}`}>
                  <p className="font-light">${80.0}</p>
                </td>
                <td className="w-fit">
                  <div className="flex items-center gap-4 border border-black p-2 rounded-lg w-fit">
                    <button
                      type="button"
                      class="flex items-center justify-center  ransition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none p-2 rounded-md"
                    >
                      <MinusIcon color="#000" className="h-6 w-6" />
                    </button>
                    {5}
                    <button
                      type="button"
                      class="flex items-center justify-center  ransition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none p-2 rounded-md"
                    >
                      <PlusIcon color="#000" className="h-6 w-6" />
                    </button>
                  </div>
                </td>
                <td className={`${classes}`}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    ${80.0}
                  </Typography>
                </td>
                <td className={`${classes}`}>
                  <button
                    class="flex  h-6 max-h-[40px] w-6 max-w-[40px] items-center justify-center  select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <TrashIcon className="h-4 w-4" color="#f00" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
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
      <Button className="w-full mt-5">Proceed to Checkout</Button>
    </div>
  );
}
