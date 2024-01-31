import { useQueryClient, useMutation } from "@tanstack/react-query";

import { addModelTypeVersionGroup } from "../Services/ModelManagementApi";

export const useCreateModelTypeGroup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addModelTypeVersionGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["modelgrouptypescreate"] });
    },
  });
};
