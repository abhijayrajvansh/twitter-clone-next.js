import Post from './Post';
import Tweet from './Tweet';

const Feed = () => {
  return (
    <main className="ml-[100px] lg:ml-[275px] flex flex-col w-[621px] h-full min-h-screen">
      <div className="backdrop-blur-xl bg-black bg-opacity-70 text-center font-bold border-b pt-2 pb-2 fixed w-[621px] z-10 border-r border-gray-700">
        Following
        <div className="border-primary border-2 w-[14%] ml-[43%] rounded-full mt-2"></div>
      </div>

      <Post />

      <Tweet />

    </main>
  )
}

export default Feed;