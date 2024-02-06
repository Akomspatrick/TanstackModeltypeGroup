import { ModelTypeGroupResponseDTO } from '../../Interfaces/AllInterfaces';

const ModelTypeGroupList = (props: ModelTypeGroupResponseDTO) => {
  return (
    <div>
      <div>{props.description}</div>
      <div>{props.guidId}</div>
      <div>{props.modelTypeGroupName}</div>
      <div>{props.testingMode}</div>
      <br />
    </div>
  );
};

export default ModelTypeGroupList;
