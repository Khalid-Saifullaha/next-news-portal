import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import Image from "next/image";
import newsImage from "@/assests/banner.jpg";

export default function Home() {
  return (
    <div className="py-12">
      <Banner />

      {/* Featured Section */}
      <div className="my-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">
          🌟 Featured
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Discover Something New
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Stay informed with our top story of the day. We bring you the
              latest insights, trending topics, and key updates that matter the
              most. Dive into stories that inspire and inform.
            </p>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition duration-300">
              Read More
            </button>
          </div>

          <div className="flex-1">
            <Image
              src={newsImage}
              alt="Featured news"
              className="rounded-xl w-full h-auto object-cover shadow-md hover:scale-105 transition-transform duration-300"
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
