import { Typography } from "@material-tailwind/react";
import React from "react";

const Card = ({ title, imageSrc }: { title: string; imageSrc: string }) => {
  return (
    <figure className="relative my-2 h-96 w-full mx-1 sm:w-[400px] cursor-pointer">
      <img
        className="h-full w-full  rounded-xl object-strech object-center"
        src={imageSrc}
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex-row flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <Typography
          variant="h5"
          className="text-center w-full"
          color="blue-gray"
        >
          {title}
        </Typography>
      </figcaption>
    </figure>
  );
};

export default Card;
