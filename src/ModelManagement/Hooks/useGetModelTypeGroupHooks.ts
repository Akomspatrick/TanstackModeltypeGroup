import { useQueries, useQuery } from "@tanstack/react-query";
import {
  getModelTypeGroup,
  getModelTypeGroupNames,
  getModelVersionGroups,
} from "../Services/ModelManagementApi";


export const useModelTypeGroupNames = () => {
  return useQuery({
    queryKey: ["modelgrouptypenames"],
    queryFn: getModelTypeGroupNames,
  });
};

export const useModelTypeGroupDetails1 = (
  ids: (string | undefined)[] | undefined
) => {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      console.log("id===>", id);
      return {
        queryKey: ["modelgrouptype", id],
        queryFn: () => getModelTypeGroup(id!),
      };
    }),
  });
};

export const useModelTypeGroupDetails = (
  ids: (string | undefined)[] | undefined
) => {
  const res = useQueries({
    queries: (ids ?? []).map((id) => {
      console.log("id===>", id);
      return {
        queryKey: ["modelgrouptype", id],
        queryFn: () => getModelTypeGroup(id!),
      };
    }),
    combine: (result) => {
      data: result.map((x) => x.data);
    },
  });
  console.log("res===>", res);

  return res;
};

export const useGetModelVersionGroups = () => {
  return useQuery({
    queryKey: ["modelversiongrouptype"],
    queryFn: getModelVersionGroups,
  });
};


getModelVersionGroups