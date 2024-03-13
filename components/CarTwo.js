"use client";
import * as React from "react";
import img from "../public/1-a.png";
import img2 from "../public/1-b.png";
import img3 from "../public/1.png";
import img4 from "../public/2.png";
import img5 from "../public/3.png";
import img6 from "../public/4.png";
import img7 from "../public/5.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SingleProduct from "./SingleProduct";
import styles from "./collection.module.css";

const imagePaths = [
  img, // Example path, adjust according to your actual image paths
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  // Add more image paths as needed
];

export default function CarTwo() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <h2 className={`${styles.productSliderHeading} ${styles.h2}`}>
        Our Collections
      </h2>
      <h3 className={`${styles.productSliderHeading} ${styles.h3}`}>
        Explore Our Watches
      </h3>
      <div className="flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="p-2 w-full" // Ensure the Carousel takes up full width within its max-width
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {imagePaths.map((src, index) => (
              <CarouselItem
                key={index}
                // Adjusted basis classes for more width on larger screens
                className="basis-full sm:basis-3/4 md:basis-2/3 lg:basis-1/2 xl:basis-1/5"
              >
                <div className="p-4 flex items-center justify-center w-full">
                  <SingleProduct src={src} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/*    <CarouselPrevious className="h-16 w-16 bg-[#e1caae]" />
          <CarouselNext className="h-16 w-16 bg-[#e1caae]" /> */}
        </Carousel>
      </div>
      <button className={`${styles.showAllProducts} mb-2 p-2`}>
        Show All Products
      </button>
    </div>
  );
}
