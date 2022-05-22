import { useQuery } from "react-query";
import axiosApi from "./axiosApi";

export default function ApiQuery(){
    const {isLoading, data, error } = useQuery('massage', () =>
     axiosApi.get("/api/breeds/image/random"))

     if (isLoading){
         return "Loading..."
     }
     if(error) return "Have error"

     return(
        <div><img src={data?.massage} style={{width: "800px", height:"800px"}}/></div>
     )
}

// .then ((res)=> res.data )