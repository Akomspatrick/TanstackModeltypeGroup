import { AxiosInstance } from 'axios';

export const addData = async <T, R>(axiosInstance: AxiosInstance, inputData: T): Promise<R | unknown> => {
  const response = await axiosInstance.post<R>(
    '',
    inputData, //{ withCredentials: true }
  );
  try {
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllData = async <T>(axiosInstance: AxiosInstance) => {
  try {
    const response = await axiosInstance.get<T[]|[]>('');
    
    const p= response.data;
    console.log(p);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getData = async <T>(axiosInstance: AxiosInstance, query: string) => {
  try {
    const response = await axiosInstance.get<T>(query);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async <T, R>(axiosInstance: AxiosInstance, inputData: T): Promise<R | unknown> => {
  const response = await axiosInstance.put<R>(
    '',
    inputData, //{ withCredentials: true }
  );
  try {
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async <T>(axiosInstance: AxiosInstance, id: string): Promise<T | unknown> => {
  const response = await axiosInstance.delete<T>(id);
  try {
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};
