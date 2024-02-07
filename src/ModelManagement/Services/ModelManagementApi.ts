// import axios from 'axios';
// import { BaseURLs } from '../Constants';
// import { ModelTypeGroupResponseDTO } from '../Interfaces/AllInterfaces';
// //import { TestingModeGroupResponseDTO } from '../Types/ModelManagementInterfaces';

// const axiosInstance = axios.create({
//   baseURL: BaseURLs.ModelManagementURL + 'api/TestingModeGroups',
// });

// export const getModelTypeGroup = async (id: string) => {
//   try {
//     //const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>(query,  { withCredentials: true });
//     const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>(id);
//     console.log('====>');
//     console.log(response);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getModelTypeGroupNames = async () => {
//   try {
//     //const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>(query,  { withCredentials: true });
//     const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>('');
//     console.log('====>');
//     console.log(response);
//     console.log(response.data);
//     return response.data.map((x) => x.modelTypeGroupName);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchModelGroups2 = async (query="") => {
//     const response = await fetch(
//       BaseURLs.ModelManagementURL + "api/ModelTypeGroups"
//     );
//     return await response.json();
//   };

//   export const fetchModelGroups3 = async (query="") => {
//     try {
//       //const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>(query,  { withCredentials: true });
//       const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>(query);
//       console.log("====>")
//       console.log(response)
//       console.log(response.data )
//       return response.data;
//       } catch (error) {
//         console.log(error);
//         }
//   };

// export const fetchModelGroups = async () => {
//   try {
//     //const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>(query,  { withCredentials: true });
//     const response = await axiosInstance.get<ModelTypeGroupResponseDTO[]>('LOADCELLS_GROUP');
//     console.log('====>');
//     console.log(response);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);

//     console.log('.......');
//     //console.log(error).then((res)=>{console.log(res)});
//   }
// };

// export const addModelTypeGroupOld = async (newModelGroup: ModelTypeGroupCreateRequestDTO) => {
//   const response = await fetch(
//     BaseURLs.ModelManagementURL + 'api/TestingModeGroups',

//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newModelGroup),
//     },
//   );
//   //if (response?.data?) {
//   const data = await response.json();
//   console.log('data===>', data);
//   return data;
// };

//  export const addTestingModeGroup = async <T, R>(newModelGroup: T): Promise<R | unknown> => {
//    const response = await axiosInstance.post<R>(
//     '',
//     newModelGroup, //{ withCredentials: true }
//    );
//    try {
//      const data = await response.data;

//      return data;
//    } catch (error) {
//     console.log(error);
//    } };

// export const getTestingModeGroups = async <T>() => {
//   try {
//     const response = await axiosInstance.get<T[]>('');

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
