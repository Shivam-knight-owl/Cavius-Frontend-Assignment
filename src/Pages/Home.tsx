import { useEffect, useState } from "react"
import { PostCard } from "../Components/PostCard";
import { SkeletonLoader } from "../Components/SkeletonLoader";
import { Pagination } from "../Components/Pagination";
import { SearchBar } from "../Components/SearchBar";

export const Home=()=>{
    
    interface Post {
        userId: number;
        id: number;
        title: string;
        body: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading,setLoading]=useState<Boolean>(true);

    const [currentPage,setCurrentPage]=useState<number>(1);
    const postsPerPage=12;

    const [search,setSearch]=useState<string>("");

    useEffect(()=>{
        try{
            setLoading(true);
            fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>res.json()).then((data)=>{
                setPosts(data);
                setLoading(false);
            })
        }catch(err){
            console.log(err); 
            setLoading(false);
        }
    },[currentPage]);

    const filteredPosts= search ? posts.filter((post)=>{
        return post.title.toLowerCase().includes(search.toLowerCase());
    }):posts;

    return(
        <div className="container mx-auto p-2">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center mb-8">
                All Posts
            </h1>

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <SearchBar search={search} setSearch={setSearch} />
            
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <SkeletonLoader key={index} />
                ))}
              </div>
            ) : (
                <div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-9">
                        {filteredPosts.length>0 ? (
                            filteredPosts.map((post)=>(
                                <PostCard key={post.id} post={post}/>
                            ))
                        ):(
                            <p className="text-2xl font-bold text-gray-800 text-center">No Posts Found</p>
                        )}
                    </div>

                </div>
            )}
        </div>
    )
}