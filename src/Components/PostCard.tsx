import { Link } from "react-router-dom";

interface Post {
  userId: number;  
  id: number;
  title: string;
  body: string;
}

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-slate-600 m-4 flex flex-col h-full">

      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#814bff] to-blue-500 mb-2">Post {post.id}</h1> 

      <h2 className=" font-semibold text-gray-700 mb-4">
          By User ID: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 font-bold"> {post.userId} </span>
      </h2>

      <h3 className="font-bold text-gray-900 mb-3">
            <span className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Title:</span> {post.title}
      </h3>

      <p className="text-slate-800 mb-4 text-sm line-clamp-3">{post.body}</p>
      <div className="mt-auto">
      <Link
            to={`/post/${post.id}`}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#814bff] to-blue-500 hover:from-[#6a3ed4] hover:to-blue-600 text-white rounded-lg text-sm font-semibold transition-all duration-300 border border-blue-800 cursor-pointer"
            >
            Read More
      </Link>
      </div>
    </div>
  );
};
