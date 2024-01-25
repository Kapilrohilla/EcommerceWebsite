import { Button } from "@material-tailwind/react";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col justify-center px-10 lg:px-48 bg-cover bg-[url(https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
      style={{ height: "600px" }}
    >
      <div className="flex gap-4  flex-col max-w-96">
        <h2 className="text-2xl text-white ">Classic Exclusive</h2>
        <h1 className="text-4xl text-white ">Women's Collection</h1>
        <h2 className="text-2xl text-white ">Upto 40% OFF</h2>
        <Button className="w-fit">Shop Now</Button>
      </div>
    </div>
  );
};

export default HeroSection;
