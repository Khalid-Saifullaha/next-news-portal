import Image from "next/image";
import Link from "next/link";
import React from "react";

import newsImage from "@/assests/banner.jpg";
import carImage from "@/assests/patrik-storm-alstra-pictures-eDyallVm_8A-unsplash.jpg";
import jsImage from "@/assests/JavaScript-logo.png";
import { Button } from "../ui/button";

const NewsCard = () => {
  return (
    <div className="">
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
      <div className="border p-4 rounded-md shadow-md">
        <Link href="/">
          <Image
            src={carImage}
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
      <div className="border p-4 rounded-md shadow-md">
        <Link href="/news-details">
          <Image
            src={jsImage}
            alt="JavaScript News Image"
            className="mb-4 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
          />
        </Link>
        <div>
          <h2 className="text-xl font-semibold my-3">
            JavaScript's Latest Update Brings Performance Boost and New Features
          </h2>
          <p className="mb-4">
            The latest update to JavaScript introduces improved performance and
            several new built-in functions that make development more efficient.
            Developers worldwide are excited about these enhancements.
          </p>
          <Link href="/news-details">
            <Button variant="default">Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
