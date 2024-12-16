import styles from "./TopCategories.module.css";
import Image from "next/image";

const TopCategories = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Top Categories</h2>
        <div className={styles.box}>
          <div className={styles.card}>
            <div className={styles.img_div}>
              <Image
                className={styles.image}
                src={"/images/file-seven/image1.png"}
                alt="item"
                height={100}
                width={100}
              />
            </div>

            <h3 className={styles.card_title}>Mini LCW Chair</h3>
            <p className={styles.card_price}>$56.00</p>
          </div>
          <div className={styles.card}>
            <div className={styles.img_div}>
              <Image
                className={styles.image}
                src={"/images/file-seven/image2.png"}
                alt="item"
                height={100}
                width={100}
              />
            </div>

            <h3 className={styles.card_title}>Mini LCW Chair</h3>
            <p className={styles.card_price}>$56.00</p>
          </div>
          <div className={styles.card}>
            <div className={styles.img_div}>
              <Image
                className={styles.image}
                src={"/images/file-seven/image3.png"}
                alt="item"
                height={100}
                width={100}
              />
            </div>

            <h3 className={styles.card_title}>Mini LCW Chair</h3>
            <p className={styles.card_price}>$56.00</p>
          </div>

          <div className={styles.card}>
            <div className={styles.img_div}>
              <Image
                className={styles.image}
                src={"/images/file-seven/image4.png"}
                alt="item"
                height={100}
                width={100}
              />
            </div>

            <h3 className={styles.card_title}>Mini LCW Chair</h3>
            <p className={styles.card_price}>$56.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
