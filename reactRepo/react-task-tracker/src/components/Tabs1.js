import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import RenderBookCards from './RenderBookCards';

export default function Tabs1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 const TabPanel =(props)=>{
   if(props.value===props.index){
     return <RenderBookCards state={props.state} />
   }
   
 }
  return (
    <Box sx={{ width: '100%' ,"marginTop":2}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={0} label="Current Reading" />
        <Tab value={1} label="Finished" />
      </Tabs>
    </Box>
  );
}