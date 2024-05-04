import Post from './Post';
import Tweet from './Tweet';

const Feed = () => {
  return (
    <main className="ml-[275px] flex flex-col w-[621px] h-full min-h-screen border-gray-700 border-l border-r">
      <div className="backdrop-blur-xl bg-black bg-opacity-70 text-center font-bold border-gray-700 border-b border-l border-r pt-2 pb-2 fixed w-[620px] z-10">Following
        <div className="border-primary border-2 w-[14%] ml-[43%] rounded-full mt-2"></div>
      </div>
        <Post />

        <Tweet />
        <Tweet />
        <Tweet />

    </main>
  )
}

export default Feed;