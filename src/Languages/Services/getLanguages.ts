import axios from "axios"

export const getLanguages = async():Promise<string[]> => {
    const {data} = await axios.get('https://localhost:7293/ReactMVCPeopleList/Languages');
    const LanguagesList = data;
    return LanguagesList;
}