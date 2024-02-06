import { configureStore } from '@reduxjs/toolkit';
import modelVersionReducer from '../ModelManagement/Reducers/SomethingReducer';
//import { ModelVersionGroupCreateRequestDTO } from '../ModelManagement/Types/ModelManagementTypes';

// interface ModelVersionGroupSliceSate {
// modelversiongroups: ModelVersionGroupCreateRequestDTO[];
// }

// const initialState : ModelVersionGroupSliceSate={
//     modelversiongroups: []};

const Store = configureStore({
  reducer: {
    modelVersionReducer,
  },
});
export default Store;

type RootState = ReturnType<typeof Store.getState>;
export const selectModelVersionGroup = (state: RootState) => state.modelVersionReducer.modelversiongroups;
//type AppDispatch = typeof Store.dispatch;
