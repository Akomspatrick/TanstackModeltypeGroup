import {  useQuery } from '@tanstack/react-query';
import {  testingModeGroupQueryKeys } from '../../Constants/TanstackQueryConstant';
import TestingModeCRUDApi from '../Services/TestingModeCRUDApi';

//https://www.youtube.com/watch?v=8K1N3fE-cDs
export const useGetTestingModeGroups = () => {
  return useQuery({
    queryKey: [testingModeGroupQueryKeys],
    queryFn: TestingModeCRUDApi.TestingModeCRUDApi().getAllData,
  });
};


// export const useModelTypeGroupNames = () => {
//   return useQuery({
//     queryKey: ['modelgrouptypenames'],
//     queryFn: getModelTypeGroupNames,
//   });
// };

// export const useModelTypeGroupDetails1 = (ids: (string | undefined)[] | undefined) => {
//   return useQueries({
//     queries: (ids ?? []).map((id) => {
//       console.log('id===>', id);
//       return {
//         queryKey: ['modelgrouptype', id],
//         queryFn: () => getModelTypeGroup(id!),
//       };
//     }),
//   });
// };

// export const useModelTypeGroupDetails = (
//   ids: (string | undefined)[] | undefined
// ) => {
//   const res = useQueries({
//     queries: (ids ?? []).map((id) => {
//       console.log("id===>", id);
//       return {
//         queryKey: ["modelgrouptype", id],
//         queryFn: () => getModelTypeGroup(id!),
//       };
//     }),
//     combine: (result) => {
//       data: result.map((x) => x.data);
//     },
//   });
//   console.log("res===>", res);

//   return res;
// };



