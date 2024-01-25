import axios from "axios";
import { BaseURLs } from "../Constants";
import { ModelTypeGroupCreateRequestDTO, ModelTypeGroupResponseDTO } from "../Interfaces/AllInterfaces";

const axiosInstance = axios.create({ baseURL:BaseURLs.ModelManagementURL + "api/ModelTypeGroups"});

export const fetchModelGroups2 = async (query="") => {
    const response = await fetch(
      BaseURLs.ModelManagementURL + "api/ModelTypeGroups"
    );
    return await response.json();
  };
  


  export const fetchModelGroups3 = async (query="") => {
    try {
      //const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>(query,  { withCredentials: true });
      const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>(query);
      console.log("====>")
      console.log(response)
      console.log(response.data )
      return response.data;
      } catch (error) {
        console.log(error);
        }
  };
  

  export const fetchModelGroups = async (query="") => {
    try {
      //const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>(query,  { withCredentials: true });
      const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>("LOADCELLS_GROUP");
      console.log("====>")
      console.log(response)
      console.log(response.data )
      return response.data;
      } catch (error) {
        console.log(error); 
        
        console.log(".......");
        //console.log(error).then((res)=>{console.log(res)});     
        }
  };
  



  export const addModelTypeGroup = async (
    newModelGroup: ModelTypeGroupCreateRequestDTO
  ) => {
    const response = await fetch(
      BaseURLs.ModelManagementURL + "api/ModelTypeGroups",
  
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newModelGroup),
      }
    );
    const data = await response.json();
    return data;
  };