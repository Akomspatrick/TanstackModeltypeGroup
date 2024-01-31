import { ModelTypeGroupResponseDTO } from "../Interfaces/AllInterfaces";

import {
  useModelTypeGroupDetails,
  useModelTypeGroupDetails1,
  useModelTypeGroupNames,
} from "../Hooks/useGetModelTypeGroupHooks";

const ModelGroupPage = () => {
  const result = useModelTypeGroupNames();
  const result2 = useModelTypeGroupDetails1(result.data);

  if (result.isError) {
    return <div>Error..... {result.error.message}</div>;
  }
  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {result.data?.map((modelGroupName, index) => (
        <div>
          {index + 1} == {modelGroupName}
        </div>
      ))}

      <div>
        {result2?.map((modelGroup, index) => (
          <div>
            {index + 1} =={" "}
            {modelGroup.data?.map((val) => (
              <div>
                {val.modelTypeGroupName} :{val.testingMode} :{val.description}{" "}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ModelGroupPage;
