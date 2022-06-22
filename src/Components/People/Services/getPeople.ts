import axios from "axios";
import { IPeople } from "../Ipeople";

export const getPeople = async ():Promise<IPeople[]> => {
    const {data} = await axios.get("https://localhost:7293/ReactMVCPeopleList");
    const PeopleList = data;
    return PeopleList;
}

