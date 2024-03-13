"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function SingleProduct({ src }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative p-4 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl mx-auto flex flex-col justify-between h-full w-full">
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-bl-lg">
        -20%
      </span>

      <div className="overflow-hidden rounded-lg flex-grow">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="relative cursor-pointer w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-112 2xl:h-128"
        >
          {/* Overlay images and control visibility with opacity */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{ opacity: hover ? 0 : 1 }}
          >
            <Image
              src={src}
              alt="Front"
              className="transition-opacity duration-300"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{ opacity: hover ? 1 : 0 }}
          >
            <Image
              src="/1-b.png"
              alt="Back"
              className="transition-opacity duration-300"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="pt-4 pb-2 px-2">
        <div className="text-sm font-semibold text-gray-500 mb-1">
          Smart Watch
        </div>
        <a
          href="#"
          className="text-lg font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300"
        >
          Title
        </a>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-900">$1200</span>
          <a
            href="#"
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
