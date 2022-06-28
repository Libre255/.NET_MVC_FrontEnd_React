export interface IPersonForm{
    name:string |undefined;
    phoneNumber:string|undefined;
    city:string;
    languages:string[];
}

export const CleanPersonFormInputs = {
    id:undefined,
    name:undefined,
    phoneNumber:undefined,
    city:"",
    languages:[]
}