import styles from './TrendingProduct.module.css';
import Image from 'next/image';

const TrendingProduct = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-20 mt-10">Hot Picks for This Season</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-lg p-3 text-center">
            <Image
              src="/images/file-five/CantileverChair1.png"
              alt="Modern Cantilever Chair"
              width={150}
              height={100}
              className="mx-auto mb-4"
            />
            <h2 className="font-semibold">Modern Cantilever Chair</h2>
            <p className="text-gray-500 line-through">$120.00</p>
            <p className="text-blue-800 font-bold">$95.00</p>
            <a href="#" className="text-red-600 underline font-medium hover:text-teal-500">Shop Now</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 text-center">
            <Image
              src="/images/file-five/CantileverChair2.png"
              alt="Classic Cantilever Chair"
              width={150}
              height={100}
              className="mx-auto mb-4"
            />
            <h2 className="font-semibold">Classic Cantilever Chair</h2>
            <p className="text-gray-500 line-through">$120.00</p>
            <p className="text-blue-800 font-bold">$95.00</p>
            <a href="#" className="text-red-600 underline font-medium hover:text-teal-500">Shop Now</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 text-center">
            <Image
              src="/images/file-five/CantileverChair3.png"
              alt="Ergonomic Cantilever Chair"
              width={150}
              height={100}
              className="mx-auto mb-4"
            />
            <h2 className="font-semibold">Ergonomic Cantilever Chair</h2>
            <p className="text-gray-500 line-through">$120.00</p>
            <p className="text-blue-800 font-bold">$95.00</p>
            <a href="#" className="text-red-600 underline font-medium hover:text-teal-500">Shop Now</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 text-center">
            <Image
              src="/images/file-five/CantileverChair4.png"
              alt="Contemporary Cantilever Chair"
              width={150}
              height={100}
              className="mx-auto mb-4"
            />
            <h2 className="font-semibold">Contemporary Cantilever Chair</h2>
            <p className="text-gray-500 line-through">$120.00</p>
            <p className="text-blue-800 font-bold">$95.00</p>
            <a href="#" className="text-red-600 underline font-medium hover:text-teal-500">Shop Now</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-pink-50 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-blue-800 mb-2">Get 25% off on all products</p>
            <a href="#" className="text-red-600 underline font-medium hover:text-blue-800">Shop Now</a>
            <Image
              src="/images/file-five/promo1.png"
              alt="Special Offer"
              width={200}
              height={100}
              className="mx-auto mt-4"
            />
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-red-600 mb-2">Exclusive 25% off on select items</p>
            <a href="#" className="text-blue-800 underline font-medium hover:text-red-600">View Collection</a>
            <Image
              src="/images/file-five/promo2.png"
              alt="Promo Collection"
              width={200}
              height={100}
              className="mx-auto mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct
;
