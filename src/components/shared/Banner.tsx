import React from "react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <div className="px-4 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* image */}
        <div>Image</div>
        <div className="space-y-4 flex flex-col">
          <h4 className="text-sm font-medium text-gray-500">Technology</h4>
          <h2 className="text-3xl font-bold">
            Synergistically underwhelm intermandated users rather.
          </h2>
          <p>
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
          <Button variant="default">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
