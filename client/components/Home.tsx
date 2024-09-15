import Feed from "./Feed";
import NavigationBar from "./NavigationBar";
import TrendingSection from "./TrendingSection";

const Home = () => {
  return (
    <>
      <div className="flex items-center h-screen xl:hidden text-center">
        hey, this doesn't support smaller screens,<br />please open it on a desktop.
      </div>
      <div className="layoutContainer onlyDesktop">
        <NavigationBar />
        <Feed />
        <TrendingSection />
      </div>
    </>
  );
};

export default Home;
