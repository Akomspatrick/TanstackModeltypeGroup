import { BaseURLs } from "../Constants";

const useFetchModelTypeGroup = async () => { 
    const response = await fetch(BaseURLs.ModelManagementURL + "api/ModelTypeGroups");
    const data = await response.json();
    return data;
}

export default useFetchModelTypeGroup;