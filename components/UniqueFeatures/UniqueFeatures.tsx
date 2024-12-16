import styles from "./UniqueFeatures.module.css";
import Image from "next/image";

const UniqueFeatures = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.div_left}>
          <Image
            src="/images/file-four/left-img.png"
            alt="Modern Design"
            height={200}
            width={500}
            className={styles.image}
          />
        </div>

        {/* Right Section */}
        <div className={styles.div_right}>
          <div className={styles.details_container}>
            <h1 className={styles.title_heading}>
              Explore the Unique Features of <br /> Trending Products
            </h1>

            <div className={styles.info_div}>
              <span className={styles.info_item}>
                <span className={styles.icon}>🟡</span>
                Frames built with durable hardwood solids and laminates.
              </span>
              <span className={styles.info_item}>
                <span className={styles.icon}>🔵</span>
                Reinforced with screws, nails, and corner blocks.
              </span>
              <span className={styles.info_item}>
                <span className={styles.icon}>🟢</span>
                Seats and arms structurally reinforced for durability.
              </span>
            </div>

            {/* Call-to-Action Section */}
            <div className={styles.btn_div}>
              <button className={styles.btn1} type="button">
                Add to Cart
              </button>
              <span className={styles.product_details}>
                Italian Sofa <br /> $32.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
