import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import Image from "next/image";
import newsImage from "@/assests/banner.jpg";

export default function Home() {
  return (
    <div className="py-12">
      <Banner />

      {/* Featured Section */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-4">Featured</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-6 rounded-lg">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              Discover Something New
            </h3>
            <p className="text-gray-700">
              Stay informed with our top story of the day. We bring you the
              latest insights, trending topics, and key updates that matter the
              most.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={newsImage}
              alt="Featured news"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
