import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-12">
      <Banner />

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
