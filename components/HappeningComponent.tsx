interface HappeningTabProps {
  genre: string,
  headline: string,
  posts: string,
}

const HappeningTab:React.FC<HappeningTabProps> = ({genre, headline, posts}) => {
  return (
    <div className="py-3 px-4 cursor-pointer hover:bg-white/5 transition duration-200">
      <p className="text-sm text-faded">{genre} · Trending</p>
      <p className="font-bold text-md">{headline}</p>
      <p className="text-sm text-faded">{posts} posts</p> 
    </div>
  )
}

export default HappeningTab;