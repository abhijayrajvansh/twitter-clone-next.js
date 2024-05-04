import Feed from "@/components/Feed";
import NavigationBar from "@/components/NavigationBar";
import TrendingSection from "@/components/TrendingSection";

const page = () => {
  return (
    <div className="layoutContainer">
      <NavigationBar />

      <Feed />

      <TrendingSection />
    </div>
  )
}

export default page;