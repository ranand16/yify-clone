"use client";
import { cn } from "@/libs/utils";
import Image from "next/image";
import { FC } from "react";

interface CardProps {}

const Card: FC<CardProps> = () => {
  return (
    <div className="flex flex-col w-100">
      <div className="relative max-w-[220px] h-6 ">
        <Image
          fill
          src={
            "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
          }
          alt={""}
          referrerPolicy="no-referrer"
        />
      </div>
      <div>Kandhar</div>
      <div>2023</div>
    </div>
  );
};

export default Card;
