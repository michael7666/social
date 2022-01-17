import { createContext, useReducer } from "react";
import UploadReduce from "./UploadReduce";


const INITIAL_STATE = {
    file: null,
    isfetching: false,
    error: false
}


export const UploadContext =  createContext(INITIAL_STATE);

export const UploadContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UploadReduce, INITIAL_STATE);

    return (
        <UploadContext.Provider value={{
            file: state.file,
            isfetching: state.isfetching,
            error: state.error,
            dispatch,
        }}
        
        >
        {children}

        </UploadContext.Provider>
    );
}