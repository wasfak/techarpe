import Image from "next/image";
import styles from "../app/styless.module.css";
import homeImg from "../public/2.webp";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt="car factory"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.heroHeaders}>
          <h2>Unveil Timeless</h2>
          <h1>Elegance & Prestige</h1>
          <button className={styles.glowingBtn}>
            <span className={styles.glowingTxt}>
              S<span className={styles.faultyLetter}>H</span>OP{" "}
              <span className={styles.faultyLetter}>N</span>OW
            </span>
          </button>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/1.png"
            alt="Three smart watches"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}
