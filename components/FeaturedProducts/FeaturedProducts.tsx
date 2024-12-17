import styles from "./FeaturedProducts.module.css";
import Image from "next/image";

const FeaturedProducts = () => {
  return (
    <div className={styles._main_containar}>
      <div className={styles._containar}>
        {/* Heading Section */}
        <div className={styles._main_heading_div}>
          <h1 className={styles._main_heading1}>Featured Products</h1>
        </div>

        {/* Grid Section */}
        <div className={styles._grid}>
          {/* Product 1 */}
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-five/component-3.png"
                alt="Comfort Handly Craft"
                width={180}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Product 2 */}
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-five/component-4.png"
                alt="Comfort Handly Craft"
                width={180}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Product 3 */}
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-five/featured-product-1.png"
                alt="Comfort Handly Craft"
                width={180}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Product 4 */}
          <div className={styles._card}>
            <div className={styles._card_img_box}>
              <Image
                src="/images/file-five/featured-product.png"
                alt="Comfort Handly Craft"
                width={180}
                height={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
git