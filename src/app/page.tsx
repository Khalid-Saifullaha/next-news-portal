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

      {/* Categories */}
      <div className="my-20 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "Politics",
            "Technology",
            "Sports",
            "Entertainment",
            "Health",
            "Business",
          ].map((category) => (
            <span
              key={category}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium hover:bg-purple-200 transition"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div className="my-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-8">🗞 Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>

      {/* Newsletter */}
      <div className="my-20 bg-indigo-50 px-4 md:px-8 py-12 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest news, updates, and articles directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Testimonials */}
      <div className="my-20 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">
          💬 What Readers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Ayesha Rahman",
              feedback:
                "This news portal keeps me informed every day. Love the clean UI and informative content!",
            },
            {
              name: "Rahim Uddin",
              feedback:
                "I find all trending news here first before anywhere else. Highly recommended!",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-xl">
              <p className="text-gray-700 mb-2">“{item.feedback}”</p>
              <span className="text-sm text-gray-500">- {item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="my-20 px-4 md:px-8">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-10 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
          <p className="mb-6">
            Join our community of writers and news enthusiasts. Share your voice
            today!
          </p>
          <button className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Become a Contributor
          </button>
        </div>
      </div>
    </div>
  );
}
