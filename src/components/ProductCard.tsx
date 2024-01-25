import { HeartIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";

type ProductCardType = {
  image: string;
  title: string;
  shortDescription: string;
  price: number;
  discountedPrice: number;
};

const ProductCard = ({
  image,
  title,
  shortDescription,
  price,
  discountedPrice,
}: ProductCardType) => {
  return (
    <div className="max-w-96 w-full rounded-t-md rounded-tr-md overflow-hidden my-3 cursor-pointer">
      <div className="relative">
        <img src={image} className=" h-80 w-full object-cover" />
        <div className="absolute top-5 right-5 bg-white h-8 w-8 flex rounded-full items-center justify-center">
          <HeartIcon color="#000" className="h-6 w-6" />
        </div>
        <button className="absolute bottom-4 bg-white w-80 left-1/2 -translate-x-1/2 text-black p-2 rounded-md">
          Add to Cart
        </button>
      </div>
      <div className="pt-3 flex flex-col gap-2">
        <h3 className="font-bold">{title}</h3>
        <p>{shortDescription}</p>
        <p className="flex gap-3">
          <span className="font-semibold">$60.80</span>
          <span className="line-through text-cgrey font-semibold">$80.80</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
