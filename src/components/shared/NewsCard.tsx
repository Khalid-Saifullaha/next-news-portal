import Image from "next/image";
import Link from "next/link";
import React from "react";

import newsImage from "@/assests/banner.jpg";
import { Button } from "../ui/button";

const NewsCard = () => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href="/">
        <Image
          src={newsImage}
          alt="newsImage"
          className="mb-b md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
        />
      </Link>
      <div>
        <h2 className="text-xl font-semibold my-3">
          Progressively recaptiualize goal-oriented action items via.
        </h2>
        <p className="mb-4">
          Synergistically brand granular e-tailers for prospective metrics.
          Professionally formulate wireless methods of.
        </p>
        <Link href="/">
          <Button variant="default">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
