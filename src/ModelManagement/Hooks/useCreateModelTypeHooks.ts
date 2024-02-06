import { useQueryClient, useMutation } from '@tanstack/react-query';

import { addModelTypeVersionGroup } from '../Services/ModelManagementApi';
import { ModelVersionGroupQueryKeys } from '../../Constants/TanstackQueryConstant';

export const useCreateModelTypeGroup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addModelTypeVersionGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ModelVersionGroupQueryKeys] });
    },
  });
};
