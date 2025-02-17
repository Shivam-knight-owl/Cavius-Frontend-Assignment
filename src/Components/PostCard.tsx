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
      <h1 className="text-xl font-bold text-slate-900 mb-2">Post {post.id}</h1> 
      <h2 className="text-lg font-semibold text-slate-700 mb-2 line-clamp-2">{post.title}</h2>
      <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.body}</p>
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
