import React, { createContext, useState } from 'react'

export const GlobalContextWrap = createContext<IContext>({
    show:false,
    setShow:()=>{}
});

const GlobalContext :React.FC<Props> = ({children}) => {
    const [show, setShow] = useState<boolean>(false);
    const value = {show, setShow};
    return(
        <GlobalContextWrap.Provider value={value}>
        {children}
        </GlobalContextWrap.Provider>
    )
};

interface Props{
    children:React.ReactNode;
}

interface IContext{
    show:boolean;
    setShow:React.Dispatch<React.SetStateAction<boolean>> | (()=>void);
}

export default GlobalContext 