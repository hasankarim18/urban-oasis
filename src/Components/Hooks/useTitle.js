import { useEffect } from "react"


const useTitle = (title)=> {

    useEffect(() => {
       document.title = `${title} - Urban Oasis`
    
    }, [title])
    

}


export default useTitle;