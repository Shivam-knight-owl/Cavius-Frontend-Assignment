import { useEffect, useState } from "react"
import { PostCard } from "../Components/PostCard";
import { SkeletonLoader } from "../Components/SkeletonLoader";
import { Pagination } from "../Components/Pagination";

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

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#814bff] to-blue-500 text-center mb-8">
                All Posts
            </h1>
            
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <SkeletonLoader key={index} />
                ))}
              </div>
            ) : (
                <div>
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-9">
                        {posts.map((post, index) => (
                            <PostCard key={index} post={post} />
                        ))}
                    </div>

                </div>
            )}
        </div>
    )
}