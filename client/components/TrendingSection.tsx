import HappeningComponent from "./HappeningComponent";
import Suggestions from "./Suggestions";
import SignUpCard from "./SignUpCard";
import Copyright from "./Copyright";
import SearchComponent from "./SearchComponent";

const TrendingSection = () => {

  return (
    <section className="hidden lg:flex flex-col w-[385px] h-full px-4 -top-[300px] border-l border-gray-700">
      <SearchComponent />
      <SignUpCard />

      <div className="mt-4 bg-black border border-gray-700 pt-3 rounded-2xl">
        <h2 className="px-4">What's happening</h2>
        <div className="hover:bg-white/10 transition duration-200 px-4 flex w-full items-start justify-between py-5">
          <div>
            <p className="font-bold text-md">Best software company, SF</p>
            <p className="text-sm text-faded">Technology · LIVE</p>
          </div>
          <img className="h-16 rounded-xl" src="./images/rajvansh.png" alt="rajvansh" />
        </div>
        <HappeningComponent genre="Technology" headline="#abhijayrajvansh" posts="21M"/>
        <HappeningComponent genre="Entertainment" headline="#spiderman" posts="255k"/>
        <HappeningComponent genre="Technology" headline="OpenAI" posts="21.1k"/>
        <p className="px-4 py-3 text-primary cursor-pointer hover:bg-white/5 transition duration-200 rounded-b-2xl">see more</p>
      </div>

      <Suggestions />

      <Copyright /> 

    </section>
  )
}

export default TrendingSection;