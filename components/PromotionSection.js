import Image from "next/image";
import React from "react";
import styles from "../components/promotion.module.css";

export default function PromotionSection() {
  return (
    <section className={styles.promotionSection}>
      <div className={styles.promotionContainer}>
        <div className={styles.promotionImage}>
          <Image
            src="/new-smartwatch-balancing-with-hand.webp"
            alt="a hand holding smart watch on one finger"
            width={400}
            height={200}
            priority
          />
        </div>
        <div className={styles.promotionText}>
          <h2 className={styles.h2}>Promotions</h2>
          <h3 className={styles.h3}>
            Your Watch is <br /> One Step Closer
          </h3>
          <p>
            Step into a world where luxury becomes accessible with our exclusive
            offers section. Here, elegance and affordability converge to bring
            you a meticulously curated collection of luxurious watches at
            exceptional prices.{" "}
          </p>
          <button> Discover More</button>
        </div>
      </div>
    </section>
  );
}
