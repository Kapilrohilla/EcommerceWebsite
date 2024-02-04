import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { populateCategory } from "../redux/category";
import store from "../redux/store";
import { Link } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const category = store.getState().category;

  // effect to fetch categories
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
          dispatch(populateCategory(data?.categories));
        }
      });

    return () => {
      controller.abort();
    };
  }, []);
  // effect to fetch products
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
          setProduct(data?.products);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      controller.abort();
    };
  }, []);
  console.log(product[0], "<-product");
  return (
    <>
      <HeroSection />
      <div>
        <div className="m-5 md:m-20 ">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">Shop by Categories</h2>
            {/* <ArrowRightIcon className="text-black h-6 w-6 " /> */}
          </div>
          <div className="my-10 flex flex-row flex-wrap justify-between">
            {category.slice(0, 4).map((category) => (
              <Card
                key={category}
                title={category}
                imageSrc="https://th.bing.com/th/id/OIP.WTQQpHmIyG2vPl5KUr5sfAHaHa?rs=1&pid=ImgDetMain"
              />
            ))}
          </div>
        </div>
        <div className="m-5 md:m-20 ">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl text-center font-semibold">
              Shop by Products
            </h2>
            <Link to="/products">
              <ArrowRightIcon className="text-black h-6 w-6 " />
            </Link>
          </div>
          <div className="my-10 flex flex-row flex-wrap justify-between">
            {product.map((product: any) => {
              return (
                <ProductCard
                  key={product?.id}
                  title={product?.name}
                  shortDescription={product?.description}
                  price={product?.price}
                  discountedPrice={product?.price}
                  image={product?.image}
                  productObject={product}
                />
              );
            })}
            {/* <ProductCard
              title="Shopping bag"
              shortDescription="Women Textured Handheld bag"
              price={80.8}
              discountedPrice={60.6}
              image="https://th.bing.com/th/id/OIP.eNGbDNNEA5PEVXvh4eON_QHaHa?rs=1&pid=ImgDetMain"
            />*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
