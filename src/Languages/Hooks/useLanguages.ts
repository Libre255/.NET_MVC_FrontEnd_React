import { useState, useEffect } from "react"
import { getLanguages } from "../Services/getLanguages"

export const useLanguages = ()=>{
    const [LanguagesList, setLanguagesList] = useState<string[]>([])

    useEffect(() => {
      const fetchLanguages = async()=>{
        try{
            const LanguagesData = await getLanguages();
            if(!LanguagesData) throw new Error("Couldn't fetch from getLanguages at useLanguages hook");
            setLanguagesList(LanguagesData);
        }catch(err){
            console.log(err);
        }
      }
      fetchLanguages();
    }, [])
    
    return {LanguagesList};
}