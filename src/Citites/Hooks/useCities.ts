import { useState, useEffect } from "react";
import { getCities } from "../Services/getCities";

export const useCities = ()=>{
    const [CitiesList, setCitiesList] = useState<string[]>([]);

    useEffect(() => {
        const fetchCities = async ()=>{
            try{
                const CitiesData = await getCities();
                if(!CitiesData) throw new Error("Couln't fetch from getCities at useCities hook");
                setCitiesList(CitiesData);          
            }catch(err){
                console.log(err);
            }
        }
        fetchCities();
    }, [])
    
    return {CitiesList};
}