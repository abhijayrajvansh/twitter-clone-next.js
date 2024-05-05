import Feed from "./Feed";
import NavigationBar from "./NavigationBar";
import TrendingSection from "./TrendingSection";

const Home = () => {
  return (
    <div className="layoutContainer">
      <NavigationBar />
      <Feed />
      <TrendingSection />
    </div>
  )
}

export default Home;