import HappeningComponent from "./HappeningComponent";
import Suggestions from "./Suggestions";
import SearchComponent from "./SearchComponent";
import SubscriptionCard from "./SubscriptionCard";
import Copyright from "./Copyright";

const TrendingSection = () => {

  return (
    <>
    <SearchComponent />
    <section className="flex flex-col mt-12 w-[380px] h-full px-4 sticky -top-[300px]">
      <SubscriptionCard />

      <div className="mt-4 bg-[#16181C] pt-3 rounded-2xl">
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

      <div className="mt-4 bg-[#16181C] pt-3 rounded-2xl">
        <h2 className="px-4">Who to follow</h2>
        <Suggestions userpfp={'elonpfp.png'} profileName="Elon Musk" userName="elonmusk"/>
        <Suggestions userpfp={'elonpfp.png'} profileName="Elon Musk" userName="elonmusk"/>
        <Suggestions userpfp={'elonpfp.png'} profileName="Elon Musk" userName="elonmusk"/>
        <p className="px-4 py-3 text-primary cursor-pointer hover:bg-white/5 transition duration-200 rounded-b-2xl">see more</p>
      </div>

      <Copyright /> 

    </section>
    </>
  )
}

export default TrendingSection;