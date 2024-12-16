import styles from "./LatestProducts.module.css";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className={styles._main_containar}>
      <div className={styles._containar}>
        <div className={styles._main_heading_div}>
          <h1 className={styles._main_heading1}>Latest Products</h1>
        </div>

        <div className={styles._grid}>
          <div className={styles._card}>
            <div className={styles._card_img_box}>
            <Image
  src="/images/file-two/ComfortHandlyCraft.png"
  alt="Comfort Handly Craft"
  width={180}
  height={100}
/>

            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/Component 8.png"
                alt="Comfort Handly Craft"
                width={180}
                height={100}
              />
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/Component 9.png"
                alt="Comfort Handly Craft"
                width={180}
                height={100}
              />
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/Component 10.png"
                alt="Comfort Handly Craft"
                width={180}
                height={100}
              />
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/Component 11.png"
                alt="Comfort Handly Craft"
                width={220}
                height={100}
              />
            </div>
          </div>

          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-two/Component 8.png"
                alt="Comfort Handly Craft"
                width={230}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
