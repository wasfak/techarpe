import Image from "next/image";
import React from "react";
import styles from "./prosStyle.module.css";
export default function ProsSection() {
  return (
    <section className={styles.pros}>
      <div className={styles.prosContainer}>
        <div className={styles.prosItems}>
          <div className={styles.prosIcon}>
            <Image
              src="./images/free-delivery-6964.svg"
              alt="Free Delivery Truck icon"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.prosText}>
            <h6>Free Shipping</h6>
          </div>
        </div>
        <div className={styles.prosItems}>
          <div className={styles.prosIcon}>
            <Image
              src="./images/delivery-fast-4440.svg"
              alt="Fast Delivery Truck icon"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.prosText}>
            <h6>Fast Delivery</h6>
          </div>
        </div>
        <div className={styles.prosItems}>
          <div className={styles.prosIcon}>
            <Image
              src="./images/safety-3599.svg"
              alt="product warranty icon"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.prosText}>
            <h6>Trusted Products</h6>
          </div>
        </div>
        <div className={styles.prosItems}>
          <div className={styles.prosIcon}>
            <Image
              src="./images/24-7-support-10894.svg"
              alt="24/7 Support icon"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.prosText}>
            <h6>Support Service</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
