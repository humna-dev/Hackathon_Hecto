import styles from './DisscountOffer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const DisscountOffer = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        
        <div className={styles.left_section}>
          <div className={styles.details_section}>
            <h1 className={styles.discount_heading}>Discount Offer</h1> {/* New Heading Added */}
            <h1 className={styles.title_heading}>20% Discount On All Products</h1>
            <p className={styles.title_paragraph}>Eams Sofa Compact</p>

            <div className={styles.description_div}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur atque aspernatur?</p>
            </div>
            <div className={styles.info_div}>
              <span className={styles.info_item}>✔ Material exposed like metals.</span>                        
              <span className={styles.info_item}>✔ Simple neutral colors.</span>                        
              <span className={styles.info_item}>✔ Clear lines and geometric figures.</span>
              <span className={styles.info_item}>✔ Exposed metal components.</span>
            </div>
            <Link href={"/login"}>
              <div className={styles.button_section}>
                <button className={styles.button} type="button">Shop Now</button>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.right_section}>
          <Image src={'/images/file-sex/right-img.png'} alt='Image' height={400} width={600}/>
        </div>
      </div>
    </div>
  )
}

export default DisscountOffer;
