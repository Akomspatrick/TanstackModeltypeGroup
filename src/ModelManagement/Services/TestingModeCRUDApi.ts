import axios from 'axios';
import { BaseURLs } from '../Constants';
import { addData, deleteData, getAllData, getData, updateData } from './BaseCRUDApi';
import { TestingModeGroupCreateRequestDTO, TestingModeGroupGetRequestDTO } from '../Types/ModelManagementInterfaces';

export default {
  TestingModeCRUDApi(url = BaseURLs.ModelManagementURL + 'TestingModeGroups') {
    const axiosInstance = axios.create({ baseURL: url });

    return {
      addData: (data: TestingModeGroupCreateRequestDTO) => {  return addData(axiosInstance, data); },
      getAllData:  () => { return  getAllData<TestingModeGroupGetRequestDTO>(axiosInstance);},
      getData: (query: string) => {return  getData<TestingModeGroupGetRequestDTO>(axiosInstance, query);},
      updateData: (data: TestingModeGroupCreateRequestDTO) => {return   updateData(axiosInstance, data);},
      deleteData: (query: string) => {return  deleteData(axiosInstance, query);  },
    };
  },
};
