import React, { useState } from "react";

import { IResourceContext } from "./IResourceContext";

export {
    IResourceItem,
    IResourceComponents,
    IResourceComponentsProps,
} from "./IResourceContext";

export const ResourceContext = React.createContext<IResourceContext>({
    resources: [],
});

export const ResourceContextProvider: React.FC<IResourceContext> = ({
    resources,
    children,
}) => {
    const [resourcesD, setResourcesD] = useState(resources);
    return (
        <ResourceContext.Provider value={{ resourcesD, setResourcesD }}>
            {children}
        </ResourceContext.Provider>
    );
};
