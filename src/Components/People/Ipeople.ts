export interface IPeople{
    id:number | undefined;
    name:string;
    phoneNumber:string;
    city:string;
    languages:string[];
}

export const CleanPersonFormInputs:IPeople = {
    id:undefined,
    name:"",
    phoneNumber:"",
    city:"",
    languages:[]
}