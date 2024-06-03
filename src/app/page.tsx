import Banner from "@/components/HomePage/Banner/Banner";
import HomeProducts from "@/components/HomePage/HomeProducts/HomeProducts";
import Trending from "@/components/HomePage/Trending/Trending";
import Subscription from "@/components/HomePage/subscription/Subscription";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* <main className="flex min-h-screen flex-col items-center justify-between"> */}
        <Banner />
        <HomeProducts />
      </main>
      <Trending />
      <Subscription />
    </>
  );
}
