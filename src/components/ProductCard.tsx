import { HeartIcon } from "@heroicons/react/24/outline";

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
}: // discountedPrice,
ProductCardType) => {
  return (
    <div className=" min-w-96 w-full max-w-lg rounded-t-md rounded-tr-md overflow-hidden my-3 cursor-pointer shadow-md p-2">
      <div className="relative">
        <img src={image} className=" h-80 w-full object-contain" />
        <div className="absolute top-5 right-5 bg-white h-8 w-8 flex rounded-full items-center justify-center">
          <HeartIcon color="#000" className="h-6 w-6" />
        </div>
        <button className="absolute bottom-4 bg-white w-80 left-1/2 -translate-x-1/2 text-black p-2 rounded-md">
          Add to Cart
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
