//import SimpleDataTablewtBt from './Components/SimpleDataTablewtBt';
import { Grid } from '@mui/material';
import NewModelGroupPage from './ModelManagement/Pages/NewModelGroupPage';
import Searchbar from './ModelManagement/Features/SearchModelTypeGroup/Searchbar';

function App() {
  return (
    <>
      {/* <h1>Akoms App- React Query - Complete Tutorial Cosden Solutions
 https://www.youtube.com/watch?v=8K1N3fE-cDs</h1>
 <h2>https://www.youtube.com/watch?v=3e-higRXoaM</h2>      
 
 https://www.google.com/search?q=crud+with+react&rlz=1C1UEAD_enCA1075CA1075&oq=crud+with+rea&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEJNTk1NmowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:9ab4ed11,vid:DOkSU3yg4vQ,st:0
 */}
{/* npm install -D jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event */}
{/* https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib-msw/vite.config.ts 
https://www.youtube.com/watch?v=G-4zgIPsjkU&t=412s


render pdf in react
https://www.youtube.com/watch?v=8K1N3fE-cDs
https://www.youtube.com/watch?v=E0aK6CKsSNg
https://www.npmjs.com/package/@cyntler/react-doc-viewer
https://www.youtube.com/watch?v=0FRyKY_PMLE
*/}
<Grid container>
  <Grid item xs={6}>
     <NewModelGroupPage />
  </Grid>
     <Grid item xs={6}>
     
        <Searchbar />
      </Grid> 
</Grid>
      {/* <SimpleDataTablewtBt /> */}
    </>
  );
}

export default App;
