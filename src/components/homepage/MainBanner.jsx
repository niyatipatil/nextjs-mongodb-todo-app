import React from "react";
import Image from "next/image";
import bannerImage from "../../assets/banner.png"; // Replace with your actual image path
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-around py-5">
        <div className="mr-4">
          <Image
            src={bannerImage}
            alt="Banner"
            className=""
            width={500}
            height={500}
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Welcome to <span className="font-bold text-yellow-400">Task Tracker</span>
          </h1>
          <p className="text-xl mb-8">
          Stay productive, stay organized with our advanced Task Tracker!
          </p>
          <Link href="/create-task" className="bg-yellow-400 text-black font-black px-4 py-2 mt-4 rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow-400 hover:text-white">
            Create To-Do
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
