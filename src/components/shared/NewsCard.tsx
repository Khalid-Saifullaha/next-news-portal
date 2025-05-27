// components/NewsCard.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import newsImage from "@/assests/banner.jpg";
import carImage from "@/assests/patrik-storm-alstra-pictures-eDyallVm_8A-unsplash.jpg";

const newsData = [
  {
    id: 1,
    image: newsImage,
    title: "Progressively recaptiualize goal-oriented action items via.",
    description:
      "Synergistically brand granular e-tailers for prospective metrics. Professionally formulate wireless methods of.",
    link: "/",
  },
  {
    id: 2,
    image: carImage,
    title: "Progressively recaptiualize goal-oriented action items via.",
    description:
      "Interactively simplify functionalized supply chains through stand-alone benefits. Enthusiastically whiteboard exceptional potentialities rather than cross-platform customer service. Completely matrix unique methodologies and economically sound portals. Compellingly fabricate team building resources vis-a-vis global human capital...",
    link: "/",
  },
];

const NewsCard = () => {
  return (
    <div className="bg-gray-50 py-6 px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {newsData.map((news) => (
        <div
          key={news.id}
          className="border p-4 rounded-md shadow-md bg-white hover:shadow-lg transition-all duration-300"
        >
          <Link href={news.link}>
            <Image
              src={news.image}
              alt="News Image"
              className="mb-4 w-full h-56 object-cover rounded hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </Link>
          <h2 className="text-xl font-semibold mb-3">{news.title}</h2>
          <p className="text-gray-700 mb-4 line-clamp-6">{news.description}</p>
          <Link href={news.link}>
            <Button variant="default">Read More</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
