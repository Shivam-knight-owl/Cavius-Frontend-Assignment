import { useParams } from "react-router-dom";

export const PostDetails=()=>{
    const { id } = useParams<{ id: string }>()
    console.log(id);
    return(
        <div>
            
        </div>
    )
}