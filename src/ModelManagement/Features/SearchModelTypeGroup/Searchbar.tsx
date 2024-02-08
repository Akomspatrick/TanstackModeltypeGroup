import { Paper, Box, Typography,  TextField, IconButton, InputAdornment, ListSubheader, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { defaultButtonRadius } from '../../../Constants/componenetsConstants';
import { useEffect, useState } from 'react';
import { useGetTestingModeGroups } from '../../Hooks/useGetModelTypeGroupHooks';
import { TestingModeGroupResponseDTO } from '../../Types/ModelManagementInterfaces';
const paperStyle = {
  padding: 2,
  height: '70vh',
  width: 600,
  margin: '20px auto',
};

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const result = useGetTestingModeGroups();
  const[data, setData] = useState<TestingModeGroupResponseDTO[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    let x:TestingModeGroupResponseDTO[]=[];
    if (result.isSuccess && result.data) {

        // x = result.data.filter((item) => {
        //     return { 
        //         testingModeGroupName:item.testingModeGroupName,
        //         testingMode: item.testingMode,
        //         description: item.description,
        //         guidId: item.guidId
        //      };
         x= result.data.filter((item) =>
          { 
            return(
             item.testingModeGroupName?.toLowerCase().includes(search.toLowerCase())
             || item.testingMode?.toLowerCase().includes(search.toLowerCase())
             || item.description?.toLowerCase().includes(search.toLowerCase())   
             );
            }
          
          );        
        }
      setData(x);
    
  }, [search]);

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      sx={{
        borderRadius: 10,
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Box component="form" noValidate sx={{ mt: 3, margin: 5, padding: 0, width: '95%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 0,
            padding: 0,
            width: '100%',
          }}>
          <Typography component="span" variant="h6">
            Model Version Groups Search
          </Typography>


        </Box>
        <Box>

          <TextField
                      id="outlined-search"
                      sx={{ borderRadius: defaultButtonRadius, marginBottom: 4 }}
                      label="Search field"
                      type="search"
                      fullWidth
                      onChange={handleSearch}
         
          variant="outlined"

          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),

          }}
        />
        </Box>
        <Box component="div" sx={{ overflow: 'auto' }}>
             {data && result.data && data.length > 0 && (
               
                <ul>
                    {/* {data.map((item) => (
                        <li key={item.guidId}>{item.testingModeGroupName}</li>
                    ))}  */}

            <ListSubheader>"Search Result"</ListSubheader>
            {data.map((item) => (
              <ListItem key={`item-${item.guidId}-${item}`}
              onClick={_ => alert(item.testingModeGroupName)}>
                <ListItemText primary={` ${item.testingModeGroupName}- ${item.testingMode}`}  secondary={item.description} />
              </ListItem>
            ))}
                </ul>
                
                
            
            )}    
        </Box>
      </Box>
    </Paper>
  );
};

export default Searchbar;
