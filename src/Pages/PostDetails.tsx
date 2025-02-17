import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostDetailedCard } from "../Components/PostDetailedCard";

interface Post{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export const PostDetails=()=>{
    const { id } = useParams<{ id: string }>()
    // console.log(id);

    const [post,setPost]=useState<Post | null>(null);
    const [loading,setLoading]=useState<Boolean>(true);

    useEffect(()=>{
        try{
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>res.json()).then((data)=>{
                setPost(data);
                setLoading(false);
            })
        }catch(err){
            console.log(err);
            setLoading(false);
        }
    })

    if(loading){
        return <div className="container mx-auto p-4">Loading...</div>
    }

    return(
        <div className="container mx-auto p-4">
            {post && (
                <div className="min-h-screen flex flex-col justify-center items-center p-6">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-3 text-center">
                        Post Details
                    </h1>
                    <PostDetailedCard post={post}/>
                </div>
            )}
        </div>
    )
}