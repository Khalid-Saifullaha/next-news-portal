import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import bannerImg from "@/assests/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-indigo-100">
      <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* image */}
        <div>
          <Image src={bannerImg} alt="bannerImg" />
        </div>
        <div className="space-y-4 flex flex-col">
          <h4 className="text-sm font-medium text-purple-800">Technology</h4>
          <h2 className="text-3xl font-bold text-gray-900">
            Synergistically underwhelm intermandated users rather.
          </h2>
          <p className="text-gray-800">
            Authoritatively redefine pandemic opportunities without front-end
            systems. Synergistically visualize inexpensive innovation after
            global leadership skills. Globally harness superior imperatives
            with.
            <br /> <br />
            Progressively productize fully tested "outside the box" thinking
            through revolutionary action items. Quickly maintain functionalized
            ROI after reliable e-business. Globally predominate technically
            sound models.
          </p>
          <Button
            variant="default"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
