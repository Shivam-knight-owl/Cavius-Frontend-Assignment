
export const SkeletonLoader = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-600 m-4 flex flex-col h-full animate-pulse">
      <div className="h-6 w-24 bg-gray-300 rounded-md mb-2"></div> 
      <div className="h-5 w-3/4 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-5 w-2/3 bg-gray-200 rounded-md mb-4"></div>
      <div className="h-4 w-full bg-gray-200 rounded-md mb-1"></div>
      <div className="h-4 w-5/6 bg-gray-200 rounded-md mb-1"></div>
      <div className="h-4 w-4/6 bg-gray-200 rounded-md mb-3"></div>
      <div className="mt-auto">
        <div className="h-10 w-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg"></div>
      </div>
    </div>
  );
};
