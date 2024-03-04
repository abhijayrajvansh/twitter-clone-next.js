interface HappeningTabProps {
  genre: string,
  headline: string,
  posts: string,
}

const HappeningTab:React.FC<HappeningTabProps> = ({genre, headline, posts}) => {
  return (
    <div className="mt-4 bg-[#16181C] px-4 py-3 rounded-2xl">

      <h2>What's happening</h2>
      <div className="flex w-full items-start justify-between py-5">
        <div>
          <p className="font-bold text-md">Best software company, SF</p>
          <p className="text-sm text-faded">Technology · LIVE</p>
        </div>
        <img className="h-16 rounded-xl" src="./images/rajvansh.png" alt="rajvansh" />
      </div>
        
        <p className="mt-3 text-sm text-faded">{genre} · Trending</p>
        <p className="font-bold text-md">{headline}</p>
        <p className="text-sm text-faded">{posts} posts</p>
      
    </div>
  )
}

export default HappeningTab;