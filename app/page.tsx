import Categories from "@/components/Categories";
import ImageSlider from "@/components/ImageSlider";
import Newsletter from "@/components/Newsletter";
import ProductCategories from "@/components/ProductCategories";
import ProductShowcase from "@/components/ProductShowcase";
import ProductShowcase2 from "@/components/ProductShowcase2";
import RollingTextBanner from "@/components/RollingText";

export default function Home() {
  return (
    <main>
      <ImageSlider />
      <Categories />
      <RollingTextBanner />
      <ProductShowcase />
      <ProductShowcase2 />
      <Newsletter />
      <ProductCategories />
    </main>
  );
}
