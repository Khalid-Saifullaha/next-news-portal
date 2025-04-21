import Image from "next/image";
import Link from "next/link";
import React from "react";

import newsImage from "@/assests/banner.jpg";
import carImage from "@/assests/patrik-storm-alstra-pictures-eDyallVm_8A-unsplash.jpg";

import { Button } from "../ui/button";

const NewsCard = () => {
  return (
    <div className="bg-gray-50">
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
        <div>
          <h2 className="text-xl font-semibold my-3">
            Progressively recaptiualize goal-oriented action items via.
          </h2>
          <p className="mb-4">
            Interactively simplify functionalized supply chains through
            stand-alone benefits. Enthusiastically whiteboard exceptional
            potentialities rather than cross-platform customer service.
            Completely matrix unique methodologies and economically sound
            portals. Compellingly fabricate team building resources vis-a-vis
            global human capital. Continually procrastinate unique communities
            and excellent portals. Progressively e-enable enterprise-wide
            outsourcing through interoperable users. Conveniently leverage
            other's end-to-end opportunities through unique portals. Seamlessly
            aggregate 24/365 catalysts for change for wireless web services.
            Authoritatively leverage other's global web-readiness with
            resource-leveling benefits. Uniquely whiteboard ubiquitous scenarios
            and low-risk high-yield products. Rapidiously maximize prospective
            meta-services rather than holistic functionalities. Appropriately
            cultivate orthogonal platforms for market positioning synergy.
            Appropriately streamline premium information rather than prospective
            leadership skills. Competently benchmark tactical experiences via
            high-payoff e-business. Dynamically embrace unique value and
            functional users. Enthusiastically maintain leveraged growth
            strategies and market-driven "outside the box" thinking.
            Monotonectally architect diverse technologies with cross-media
            interfaces. Distinctively transform bricks-and-clicks content before
            integrated supply chains. Appropriately implement performance based
            resources rather than real-time systems. Synergistically optimize
            out-of-the-box strategic theme areas before multifunctional portals.
            Efficiently whiteboard multifunctional leadership skills and
            clicks-and-mortar bandwidth. Distinctively streamline just in time
            methodologies and magnetic users. Authoritatively innovate resource
            maximizing web services vis-a-vis frictionless materials.
            Authoritatively grow scalable initiatives rather than B2C methods of
            empowerment. Competently initiate high-quality channels through
            leveraged technology. Intrinsicly aggregate end-to-end intellectual
            capital rather than user-centric data. Enthusiastically leverage
            existing ubiquitous methodologies for e-business solutions.
            Competently reconceptualize frictionless functionalities with
            proactive solutions. Dynamically exploit best-of-breed methodologies
            through functionalized customer service. Proactively facilitate team
            driven action items rather than clicks-and-mortar sources.
            Authoritatively pursue team building manufactured products via
            diverse interfaces.
          </p>
          <Link href="/">
            <Button variant="default">Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
