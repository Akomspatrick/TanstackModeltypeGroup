import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModelVersionGroupCreateRequestDTO } from "../Types/ModelManagementTypes";

interface ModelVersionGroupSliceState { modelversiongroups: ModelVersionGroupCreateRequestDTO[]; }
    
const initialState : ModelVersionGroupSliceState={ modelversiongroups: []};
       
    
const modelVersionGroupSlice = createSlice({
  name: "modelVersionGroup",
  initialState,
  reducers: {
    setModelVersionGroup: (state=initialState, action:PayloadAction<ModelVersionGroupCreateRequestDTO>) => {
      state.modelversiongroups= [...state.modelversiongroups, {modelVersionGroupName: action.payload.modelVersionGroupName, testingMode: action.payload.testingMode, description: action.payload.description, guidId: action.payload.guidId}];  
      console.log("action.payload===>", action.payload);
     console.log("state.modelversiongroups===>", state.modelversiongroups);
    },
  },
});

export const { setModelVersionGroup } = modelVersionGroupSlice.actions;
export default modelVersionGroupSlice.reducer;
//export const{  modelVersionGroupSlice.actions;
