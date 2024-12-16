import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import Shopex from "@/components/Shopex/Shopex";
import UniqueFeatures from "@/components/UniqueFeatures/UniqueFeatures";
import DisscountOffer from "@/components/DisscountOffer/DisscountOffer";
import TopCategories from "@/components/TopCategories/TopCategories";
import LatestBlog from "@/components/LatestBlog/LatestBlog";
import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer/Footer";
import TrendingProduct from "@/components/TrendingProduct/TrendingProduct";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <FeaturedProducts/>
      <LatestProducts/>
      <Shopex/>
      <UniqueFeatures/>
      <TrendingProduct/>
      <DisscountOffer/>
      <TopCategories/>
      <LatestBlog/>
      <Blog/>
      <Footer/>
    </div>
  );
}
