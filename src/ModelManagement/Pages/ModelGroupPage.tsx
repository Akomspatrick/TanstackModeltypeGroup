import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ModelTypeGroupList from "../Features/ModelTypeGroups/ModelTypeGroupList";
import {ModelTypeGroupResponseDTO} from "../Interfaces/AllInterfaces";
import { Guid } from "guid-typescript";
import { addModelTypeGroup, fetchModelGroups } from "../Services/Api";



const ModelGroupPage = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>(""); //["modelGroups"
  const queryClient = useQueryClient();
  const [description, setDescription] = React.useState<string>("");
  const [modelTypeGroupName, setModelTypeGroupName] =React.useState<string>(""); 
  const [testingMode, setTestingMode] = React.useState<string>("");

  const result = useQuery({
    // queryKey: ["modelGroups",{searchQuery}],
    // queryFn:() => fetchModelGroups(searchQuery),
    queryKey: ["modelGroups"],
    queryFn: fetchModelGroups,
  });

  const { mutateAsync: addModelTypeGroupDataMutation } = useMutation({
    mutationFn: addModelTypeGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["modelGroups"]});
    },
  });
  
  if (result.isError) {
    return <div>Error..... {result.error.message}</div>;
  }
  if (result.isLoading) {
    return <div>Loading...</div>;
  }
  function AddDataFn(_event: React.MouseEvent<HTMLElement>): void {
   const x= async () => {
      try {
        console.log(modelTypeGroupName);
        await addModelTypeGroupDataMutation({
          description,
          modelTypeGroupName,
          testingMode,
          guidId: Guid.create().toString(),
        });
        setDescription("");
        setModelTypeGroupName("");
        setTestingMode("");
      } catch (error) {
        console.log(error);
      }
    };
    x();

  }

  return (
    <>
      <h1>Model Group Page</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Model Type Group Name</label>
        <input
          type="text"
          value={modelTypeGroupName}
          onChange={(e) => setModelTypeGroupName(e.target.value)}
        />
      </div>

      <div>
        <label>Testing Mode</label>
        <input
          type="text"
          value={testingMode}
          onChange={(e) => setTestingMode(e.target.value)}
        />
      </div>
      <button onClick={AddDataFn}>Add Model Group</button>

      {result.data?.map((modelGroup: ModelTypeGroupResponseDTO) =>
        // (<ModelTypeGroupList key={modelGroup.guidId} {...modelGroup} />)
        //OR THIS FORMAT
        {
          return <ModelTypeGroupList key={modelGroup.guidId} {...modelGroup} />;
        }
      )}
    </>
  );
};

export default ModelGroupPage;
