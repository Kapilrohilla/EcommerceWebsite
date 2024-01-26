import { Button, Typography, IconButton } from "@material-tailwind/react";
import HeroSection from "../components/HeroSection";
import { Topbar } from "../components/Topbar";
import Card from "../components/Card";
import { Footer } from "../components/Footer";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ProductCard from "../components/ProductCard";

const categoryCard = [
  {
    title: "Mens",
    image:
      "https://th.bing.com/th/id/OIP.kuVqxFdyZaAMhRcXpWQQOgHaKW?rs=1&pid=ImgDetMain",
  },
  {
    title: "Shoes",
    image:
      "https://www.specializedconceptstore.co.uk/content/products/2017-2fo-flat-mountain-bike-shoes_5766.jpg",
  },
  {
    title: "Electronics",
    image:
      "https://th.bing.com/th/id/OIP.vDVmIcGpcBhUa1doOrBl5gHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Mobiles",
    image:
      "https://www.gizchina.com/wp-content/uploads/images/2020/10/ElQkhy-VcAAcy42.jpg",
  },
];

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="m-5 md:m-20 ">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold">Shop by Categories</h2>
          <ArrowRightIcon className="text-black h-6 w-6 " />
        </div>
        <div className="my-10 flex flex-row flex-wrap justify-between">
          {categoryCard.map((category) => (
            <Card title={category.title} imageSrc={category.image} />
          ))}
        </div>
      </div>
      <div className="m-5 md:m-20 ">
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-2xl text-center font-semibold">
            Shop by Categories
          </h2>
        </div>
        <div className="my-10 flex flex-row flex-wrap justify-between">
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
      </div>
    </>
  );
};

export default Home;
