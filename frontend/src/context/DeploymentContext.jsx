import { createContext, useReducer } from "react";

export const DeploymentsContext = createContext()

export const deploymentsReducer = (state, action) => {
    switch (action.type){
        case 'SET_DEPLOYMENTS':
            return {
                deployments: action.payload
            }
        // case 'CREATE_DEPLOYMENT':
        //     return {
        //         deployments: [action.payload, ...(state.deployments || [])]
        //     }
        case 'DELETE_DEPLOYMENT':
            return {
                deployments: state.deployments.filter((deployment) => (deployment._id !== action.payload._id))
            }
        default:
            return state
    }
}

export const DeploymentsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(deploymentsReducer, {
        deployments: []
    })

    return(
        <DeploymentsContext.Provider value={{...state, dispatch}}>
            {children}
        </DeploymentsContext.Provider>
    )
}