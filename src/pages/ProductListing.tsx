import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const ProductListing = () => {
  return (
    <div>
      <div className="m-5 md:m-20 ">
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-2xl text-center font-semibold">Products</h2>
        </div>
        <div className="my-10 flex flex-row flex-wrap gap-10 ">
          <ProductCard
            title="Shopping bag"
            shortDescription="Women Textured Handheld bag"
            price={80.8}
            discountedPrice={60.6}
            image="https://th.bing.com/th/id/OIP.eNGbDNNEA5PEVXvh4eON_QHaHa?rs=1&pid=ImgDetMain"
          />
          <ProductCard
            title="Shopping bag"
            shortDescription="Women Textured Handheld bag"
            price={80.8}
            discountedPrice={60.6}
            image="https://th.bing.com/th/id/OIP.eNGbDNNEA5PEVXvh4eON_QHaHa?rs=1&pid=ImgDetMain"
          />
          <ProductCard
            title="Shopping bag"
            shortDescription="Women Textured Handheld bag"
            price={80.8}
            discountedPrice={60.6}
            image="https://th.bing.com/th/id/OIP.eNGbDNNEA5PEVXvh4eON_QHaHa?rs=1&pid=ImgDetMain"
          />
          <ProductCard
            title="Shopping bag"
            shortDescription="Women Textured Handheld bag"
            price={80.8}
            discountedPrice={60.6}
            image="https://th.bing.com/th/id/OIP.eNGbDNNEA5PEVXvh4eON_QHaHa?rs=1&pid=ImgDetMain"
          />
          <ProductCard
            title="Shopping bag"
            shortDescription="Women Textured Handheld bag"
            price={80.8}
            discountedPrice={60.6}
            image="https://th.bing.com/th/id/OIP.eNGbDNNEA5PEVXvh4eON_QHaHa?rs=1&pid=ImgDetMain"
          />
          <ProductCard
            title="Shopping bag"
            shortDescription="Women Textured Handheld bag"
            price={80.8}
            discountedPrice={60.6}
            image="https://th.bing.com/th/id/OIP.eNGbDNNEA5PEVXvh4eON_QHaHa?rs=1&pid=ImgDetMain"
          />
          <ProductCard
            title="Shopping bag"
            shortDescription="Women Textured Handheld bag"
            price={80.8}
            discountedPrice={60.6}
            image="https://th.bing.com/th/id/OIP.eNGbDNNEA5PEVXvh4eON_QHaHa?rs=1&pid=ImgDetMain"
          />
        </div>
        <div className="flex justify-center">
          <DefaultPagination />
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
