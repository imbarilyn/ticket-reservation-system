import { API_BASE_URL} from "../config/config.ts";


export const apiRequest = async (endpoint: string, options={}) =>{

     const response = await fetch(`${API_BASE_URL}/${endpoint}`, options)

     if(!response.ok){
         const errorData = await response.json().catch(()=> null)
         throw  new Error(
             errorData.message || "Something went wrong please try again"
         )
     }
     return  response.json()
}