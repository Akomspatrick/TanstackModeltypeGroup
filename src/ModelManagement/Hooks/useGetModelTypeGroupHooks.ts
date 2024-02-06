import { useQueries, useQuery } from '@tanstack/react-query';
import { getModelTypeGroup, getModelTypeGroupNames, getModelVersionGroups } from '../Services/ModelManagementApi';
import { ModelVersionGroupQueryKeys } from '../../Constants/TanstackQueryConstant';

export const useModelTypeGroupNames = () => {
  return useQuery({
    queryKey: ['modelgrouptypenames'],
    queryFn: getModelTypeGroupNames,
  });
};

export const useModelTypeGroupDetails1 = (ids: (string | undefined)[] | undefined) => {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      console.log('id===>', id);
      return {
        queryKey: ['modelgrouptype', id],
        queryFn: () => getModelTypeGroup(id!),
      };
    }),
  });
};

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

//https://www.youtube.com/watch?v=8K1N3fE-cDs
export const useGetModelVersionGroups = () => {
  return useQuery({
    queryKey: [ModelVersionGroupQueryKeys],
    queryFn: getModelVersionGroups,
  });
};

getModelVersionGroups;
