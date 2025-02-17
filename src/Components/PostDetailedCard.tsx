interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export const PostDetailedCard = ({ post }: { post: Post }) => {
    return (
      <div className="p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-300 m-6 flex flex-col h-full max-w-lg mx-auto">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-3 text-center">
          Post No. {post.id}
        </h1>
        
        <h2 className="text-lg font-semibold text-gray-700 text-center mb-4">
          By User ID: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 font-bold"> {post.userId} </span>
        </h2>
  
        <div className="p-6 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-inner border border-gray-200">
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Title:</span> {post.title}
          </h3>
  
          
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Description:</span> {post.body}
          </p>
        </div>
 
        <div className="mt-auto flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mt-6 animate-pulse"></div>
        </div>
  
      </div>
    );
  };
  