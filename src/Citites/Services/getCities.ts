import axios from "axios"

export const getCities = async ():Promise<string[]>=>{
    const {data} = await axios.get('https://localhost:7293/ReactMVCPeopleList/Cities');
    const CitiesList = data
    return CitiesList;
}