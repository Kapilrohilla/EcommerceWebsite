import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const ProductListing = () => {
  const [products, setProducts] = useState<object[]>([]);
  const [category, setCategory] = useState<String>("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(import.meta.env.VITE_BASEURL + "/product", {
      method: "GET",
      signal,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data?.valid) {
          setProducts(data?.products);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <div className="sm:m-5 m-1 md:m-20 ">
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-2xl text-center font-semibold">Products</h2>
        </div>
        <div className="flex gap-5">
          <div className="hidden md:flex ">
            <div>
              <AccordionCustomIcon />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-3 justify-center">
              {products.map((product: any) => (
                <ProductCard
                  key={product?.id}
                  title={product?.name}
                  shortDescription={product?.description}
                  price={product?.price}
                  discountedPrice={product?.price}
                  image={product?.image}
                />
                // <ProductCard
                //   title="Shopping bag"
                //   shortDescription="Women Textured Handheld bag"
                //   price={80.8}
                //   discountedPrice={60.6}
                //   image="https://th.bing.com/th/id/OIP.eNGbDNNEA5PEVXvh4eON_QHaHa?rs=1&pid=ImgDetMain"
                // />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

export function DefaultPagination() {
  const [active, setActive] = useState(1);

  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { populateCategory } from "../redux/category";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = useState(0);
  const [brands, setBrands] = useState<Array<String>>([]);
  const [category, setCategory] = useState<String[]>([]);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  const dispatch = useDispatch();

  // effect for category
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const apiUrl = import.meta.env.VITE_BASEURL + "/product/category";

    fetch(apiUrl, {
      method: "GET",
      signal,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data?.valid) {
          // dispatch(populateCategory(data?.categories));
          setCategory(data?.categories);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  // fetching brands name
  useEffect(() => {
    const contoller = new AbortController();
    const signal = contoller.signal;
    const apiUrl = `${import.meta.env.VITE_BASEURL}/product/brand`;

    fetch(apiUrl, {
      method: "GET",
      signal,
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if (data?.valid) {
          setBrands(data?.brands);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Brand</AccordionHeader>
        <AccordionBody>
          {/* <form> */}
          {brands.map((category) => {
            return (
              <div>
                <input type="checkbox" name={category} id={category} />
                &nbsp; <label htmlFor={category}>{category}</label>
              </div>
            );
          })}
          {/* </form> */}
        </AccordionBody>
      </Accordion>
      {/* <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>Price</AccordionHeader>
        <AccordionBody>
          {["under ₹1000", "₹1000 - ₹5000", "₹5000 - ₹10,000"].map((price) => (
            <>
              <button style={{ display: "block" }}>{price}</button>
            </>
          ))}
        </AccordionBody>
      </Accordion> */}
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Category
        </AccordionHeader>
        <AccordionBody>
          {category.map((category) => {
            return (
              <div>
                <input type="checkbox" name={category} id={category} />
                &nbsp; <label htmlFor={category}>{category}</label>
              </div>
            );
          })}
        </AccordionBody>
      </Accordion>
    </>
  );
}
