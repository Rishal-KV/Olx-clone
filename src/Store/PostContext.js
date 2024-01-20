import {createContext, useState} from 'react'

export const PostContext = createContext(null)

export default function PostDetails({children}){
    const [product, setProduct] = useState(null)
    return(

        <PostContext.Provider value={{product, setProduct}}>
            
        {children}
        
        </PostContext.Provider>

    )
  
}