import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const ExploreTabs = ()=> {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="primary" indicatorColor="primary">
            <Tab label="Explore by category" value="1" sx={{"width":350,"marginLeft":10}} />
            <Tab label="See recently added titles" value="2" sx={{"width":350}}/>
            <Tab label="See popular titles" value="3" sx={{"width":350,"marginRight":8}}/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{"marginLeft":10}}>One</TabPanel>
        <TabPanel value="2">Two</TabPanel>
        <TabPanel value="3">Three</TabPanel>
      </TabContext>
    </Box>
  );
}

export default ExploreTabs;