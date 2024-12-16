import styles from "./FeaturedProducts.module.css";
import Image from "next/image";

const FeaturedProducts = () => {
    return (
      <div className={styles._main_containar}>
        <div className={styles._containar}>
          <div className={styles._main_heading_div}>
            <h1 className={styles._main_heading1}>Featured Products</h1>
          </div>
  
          <div className={styles._grid}>
            <div className={styles._card}>
              <div className={styles._card_img_box}>
                <Image
                  src="/images/file-five/Component 3.png"
                  alt="Comfort Handly Craft"
                  width={180}
                  height={100}
                />
              </div>
            </div>
  
            <div className={styles._card}>
              <div className={styles._card_img_box}>
                <Image
                  src="/images/file-five/Component 4.png"
                  alt="Comfort Handly Craft"
                  width={180}
                  height={100}
                />
              </div>
            </div>
  
            <div className={styles._card}>
              <div className={styles._card_img_box}>
                <Image
                  src="/images/file-five/Featured product (1).png"
                  alt="Comfort Handly Craft"
                  width={180}
                  height={100}
                />
              </div>
            </div>
  
            <div className={styles._card}>
              <div className={styles._card_img_box}>
                <Image
                  src="/images/file-five/Featured product.png"
                  alt="Comfort Handly Craft"
                  width={180}
                  height={100}
                />
              </div>
            </div>
  
      
          </div>
        </div>
      </div>
    );
  };
  

export default FeaturedProducts;