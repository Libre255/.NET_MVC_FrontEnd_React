import { useEffect, useState } from "react"
import { IPeople } from "../Ipeople"
import { getPeople } from "../Services/getPeople"

interface IUsePeople {
    listOfPeople:IPeople[];
    error:Error | unknown;
};

export const usePeople = ():IUsePeople => {
    const [listOfPeople, setListOfPeople] = useState<IPeople[]>([]);
    const [error, setError] = useState<Error | unknown>()
    useEffect(()=>{
        const fetchPeople = async()=>{
            try{
                const getPeopleResult = await getPeople();
                if(!getPeopleResult) throw new Error("getPeopleResult is undefined");
                setListOfPeople(getPeopleResult)
            }catch(err:unknown){
                setError(err);
            }
        }
        fetchPeople();
    }, []);

    return {listOfPeople, error};
};