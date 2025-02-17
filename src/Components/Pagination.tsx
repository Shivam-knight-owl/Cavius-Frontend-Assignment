
interface PaginationProps{
    currentPage:number;
    setCurrentPage:(page:number)=>void;
}

export const Pagination=({currentPage,setCurrentPage}:PaginationProps)=>{
    return(
        <div className="flex justify-center space-x-4 mt-0 mb-1">
            {/* prev btn */}
            <button onClick={()=>{
                setCurrentPage(currentPage - 1);
                }}
                disabled={currentPage===1}
                className="px-2 py-1 bg-gray-500 hover:enabled:bg-gray-700 text-white rounded-lg disabled:opacity-50 cursor-pointer transition-colors duration-300"
            >
                Previous
            </button>

            <span className="px-2 py-2 text-lg font-semibold text-gray-700">
                Page {currentPage}
            </span>

            {/* next btn */}
            <button onClick={()=>{
                setCurrentPage(currentPage + 1);
                }}
                className="px-4 py-1 bg-gradient-to-r from-[#814bff] to-blue-500 hover:from-[#6a3ed4] hover:to-blue-600 text-white rounded-lg  font-semibold transition-all duration-300 border border-blue-800 cursor-pointer text-white rounded-lg hover:bg-blue-600 cursor-pointer"
            >
                Next
            </button>
        </div>
    )
}