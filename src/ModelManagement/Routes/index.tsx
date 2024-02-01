import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import ModelGroupPage from '../Pages/ModelGroupPage'
import App from '../../App'

const routes = () => {
  return (

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/groups" element={<ModelGroupPage />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default routes