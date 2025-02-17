import { useEffect, useState } from "react"

export const Home=()=>{
    
    interface Post {
        userId: number;
        id: number;
        title: string;
        body: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading,setLoading]=useState<Boolean>(true);

    useEffect(()=>{
        try{
            fetch("https://jsonplaceholder.typicode.com/posts",{
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
        }
    },[]);

    return(
        <div>
            <h1>All Posts</h1>
            {loading&&<h1>Loading...</h1>}
            {posts.map((post)=>{
                return(
                    <div key={post.id} className="border p-2 my-2">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}