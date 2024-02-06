import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModelGroupPage from '../Pages/ModelGroupPage';
import App from '../../App';
import CreateModelVersionGroup from '../Features/ModelTypeGroups/CreateModelVersionGroup';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/groups" element={<ModelGroupPage />} />
        <Route path="/newgroups" element={<CreateModelVersionGroup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
