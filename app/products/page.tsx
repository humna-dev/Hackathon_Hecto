import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import styles from './products.module.css';

const products = [
  {
    id: 1,
    name: 'Elegant Chair',
    price: '$120',
    image: '/images/file-seven/image2.png',
  },
  {
    id: 2,
    name: 'Modern Sofa',
    price: '$350',
    image: '/images/file-header/img-one.png',
  },
  {
    id: 3,
    name: 'Cantiliver Chair',
    price: '$250',
    image: '/images/file-five/CantileverChair1.png',
  },
  {
    id: 4,
    name: 'Comfort Sofa',
    price: '$80',
    image: '/images/file-four/left-img.png',
  },
];

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.product}>
        {/* Hero Section */}
        <div className={styles.page}>
          <div className="text-center py-12 bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-gray-600">
              <span className="font-medium">Home</span> . <span className="text-rose-600 font-bold">Products</span>
            </p>
          </div>
        </div>

        {/* Featured Section */}
        <div className="bg-rose-50 py-12 px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Product</h2>
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-8">
            <img
              src="/images/file-two/ComfortHandlyCraft6.png"
              alt="Featured Product"
              className="w-96 h-auto rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Exclusive Designer Chair</h3>
              <p className="text-gray-600 mb-4">
                Discover the perfect blend of comfort and style. Crafted with premium materials for modern spaces.
              </p>
              <span className="text-rose-600 font-bold text-xl">$299.00</span>
              <div className="mt-4">
                <button className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="py-12 px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500">{product.price}</p>
                  <button className="mt-4 w-full bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
