import { useQueryClient, useMutation } from '@tanstack/react-query';
import { testingModeGroupQueryKeys } from '../../Constants/TanstackQueryConstant';
import TestingModeCRUDApi from '../Services/TestingModeCRUDApi';

export const useCreateModelTypeGroup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: TestingModeCRUDApi.TestingModeCRUDApi().addData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [testingModeGroupQueryKeys] });
    },
  });
};
