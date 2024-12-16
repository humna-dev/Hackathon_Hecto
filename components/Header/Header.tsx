import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.left_img_div}>
          <Image
            src={"/images/file-header/img-two.png"}
            alt="lamp"
            height={100}
            width={300}
          />
        </div>

        <div className={styles.center_div}>
          <h3 className="text-rose-600 font-bold mb-5">
            Best Furniture For Your Castle...
          </h3>
          <h1 className=" font-bold mb-5 text-4xl">
            New Furniture Collection <br /> Trends in 2024
          </h1>
          <p className="text-gray-400 text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
            Nobis sunt enim blanditiis possimus a voluptatibus distinctio?
          </p>
          <Link href={''}>
          <button className="py-2 px-6 bg-rose-600 text-slate-50 hover:bg-red-600" type="button">
            Shop Now
          </button>
          </Link>
        </div>

        <div className={styles.right_img_div}>
          <Image
            src={"/images/file-header/img-one.png"}
            alt="lamp"
            height={100}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
