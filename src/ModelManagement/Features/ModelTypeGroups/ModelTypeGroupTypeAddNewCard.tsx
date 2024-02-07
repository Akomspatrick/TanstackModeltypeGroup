import React from 'react';
import { useCreateModelTypeGroup } from '../../Hooks/useCreateModelTypeHooks';
import { Guid } from 'guid-typescript';

const ModelTypeGroupTypeAddNewCard = () => {
  const [description, setDescription] = React.useState<string>('');
  const [modelTypeGroupName, setModelTypeGroupName] = React.useState<string>('');
  const [testingMode, setTestingMode] = React.useState<string>('');
  const { mutateAsync: addModelTypeGroupDataMutation } = useCreateModelTypeGroup();

  function AddDataFn(_event: React.MouseEvent<HTMLElement>): void {
    const x = async () => {
      try {
        console.log(modelTypeGroupName);
        await addModelTypeGroupDataMutation({
          description,
          testingModeGroupName: modelTypeGroupName,
          testingMode,
          guidId: Guid.create().toString(),
        });
        setDescription('');
        setModelTypeGroupName('');
        setTestingMode('');
      } catch (error) {
        console.log(error);
      }
    };
    x();
  }
  return (
    <div>
      <h1>Model Group Page</h1>

      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Model Type Group Name</label>
        <input type="text" value={modelTypeGroupName} onChange={(e) => setModelTypeGroupName(e.target.value)} />
      </div>

      <div>
        <label>Testing Mode</label>
        <input type="text" value={testingMode} onChange={(e) => setTestingMode(e.target.value)} />
      </div>
      <button onClick={AddDataFn}>Add Model Group</button>
    </div>
  );
};

export default ModelTypeGroupTypeAddNewCard;
