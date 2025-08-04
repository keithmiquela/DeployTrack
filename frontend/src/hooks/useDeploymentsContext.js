import { DeploymentsContext } from "../context/DeploymentContext.jsx";
import { useContext } from "react";

export const useDeploymentsContext = () => {
    const context = useContext(DeploymentsContext)

    if (!context) {
        throw Error("useDeploymentsContext must be used in a DeploymentsContextProvider")
    }

    return context
}