"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./collection.module.css";

export default function CollectionSection() {
  const [hover, setHover] = useState(false);
  return (
    <section className={styles.productSliderContainer}>
      <div className={styles.productSlider}>
        <h2 className={`${styles.productSliderHeading} ${styles.h2}`}>
          Our Collections
        </h2>
        <h3 className={`${styles.productSliderHeading} ${styles.h3}`}>
          Explore Our Watches
        </h3>
        <div className={styles.sliderButtons}>
          <button aria-label="Previous" className={styles.gliderPrev}>
            <span></span>
          </button>
          <button aria-label="Next" className="">
            <span></span>
          </button>
        </div>
        <div className={styles.gliderContain}>
          <div className={styles.glider}>
            <div className={styles.productBox}>
              <span className={styles.productDiscount}> -20% </span>

              <div className={styles.productImgContainer}>
                <div
                  className={`${styles.productImg} duration-300`}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <a href="#">
                    {hover ? (
                      <Image
                        src="/1-b.png"
                        alt="Back"
                        width={200}
                        height={200}
                        className="cursor-pointer"
                      />
                    ) : (
                      <Image
                        src="/1-a.png"
                        alt="Front"
                        width={200}
                        height={200}
                      />
                    )}
                  </a>
                </div>
              </div>

              <div className={styles.productBoxText}>
                <div className={styles.productCategory}>
                  <span>Smart Watch</span>
                </div>

                <a href="#" className={styles.productTitle}>
                  Title
                </a>

                <div className={styles.priceBuy}>
                  <span className={styles.productPrice}> 1200$ </span>
                  <a href="#" className={styles.productButton}>
                    Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.showAllProducts}>Show All Products</button>
    </section>
  );
}
