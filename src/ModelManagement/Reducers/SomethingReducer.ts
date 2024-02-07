import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModelVersionGroupCreateRequestDTO } from '../Types/ModelManagementTypes';
interface ModelVersionGroupSliceState {
  modelversiongroups: ModelVersionGroupCreateRequestDTO[];
}

const initialState: ModelVersionGroupSliceState = {
  modelversiongroups: [
    {
      description: 'csac',
      testingModeGroupName: 'asc',
      testingMode: 'MANUAL',
      guidId: 'a6e4ad89-4931-fdb0-1887-989d67025fbb',
    },
    {
      description: 'Second',
      testingModeGroupName: 'second2',
      testingMode: 'MANUAL',
      guidId: 'a6e4ad89-4931-fdb0-1887-989d67025fbb',
    },
  ],
};

const modelVersionGroupSlice = createSlice({
  name: 'modelVersionGroup',
  initialState: initialState,
  reducers: {
    setModelVersionGroup: (state, action: PayloadAction<ModelVersionGroupCreateRequestDTO>) => {
      console.log('action.payload is called as reducers');
      // state.modelversiongroups= [...state.modelversiongroups, action.payload];
      // state.modelversiongroups= [...state.modelversiongroups, {testingModeGroupName: action.payload.testingModeGroupName, testingMode: action.payload.testingMode, description: action.payload.description, guidId: action.payload.guidId}];

      state.modelversiongroups.push(action.payload);
    },
  },
});

export const { setModelVersionGroup } = modelVersionGroupSlice.actions;
export default modelVersionGroupSlice.reducer;
