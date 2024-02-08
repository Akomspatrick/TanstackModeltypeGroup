import axios from 'axios';
import { BaseURLs,EndPoints } from '../../Constants/APIEndPoints';
import { addData, deleteData, getAllData, getData, updateData } from '../../Services/BaseCRUDApi';
import { TestingModeGroupCreateRequestDTO, TestingModeGroupResponseDTO } from '../Types/ModelManagementInterfaces';

export default {
  TestingModeCRUDApi(url = BaseURLs.ModelManagementURL +EndPoints.MODEL_MANAGEMENT.TESTINGMODEGROUP) {
    const axiosInstance = axios.create({ baseURL: url });

    return {
      addData: (data: TestingModeGroupCreateRequestDTO) => {  return addData(axiosInstance, data); },
      getAllData:  () => { return  getAllData<TestingModeGroupResponseDTO>(axiosInstance);},
      getData: (query: string) => {return  getData<TestingModeGroupResponseDTO>(axiosInstance, query);},
      updateData: (data: TestingModeGroupCreateRequestDTO) => {return   updateData(axiosInstance, data);},
      deleteData: (query: string) => {return  deleteData(axiosInstance, query);  },
    };
  },
};
