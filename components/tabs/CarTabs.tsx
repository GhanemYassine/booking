import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import dayjs, { Dayjs } from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Button, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAtom } from 'jotai';
import { whichCarTabAtom ,activePageAtom,fromDateFilterAtom,toDateFilterAtom } from '../../atoms';
import axios from 'axios';



function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const CarTabs = () => {
  
  const [currTab,setCurrTab] = useAtom(whichCarTabAtom)
  const [_ss,setActivePage] = useAtom(activePageAtom)
  const [fromDateValue,setFromDateValue] = useAtom(fromDateFilterAtom)
  const [toDateValue,setToDateValue] = useAtom(toDateFilterAtom)

  const handleFromDateChange = (newValue: Dayjs | null) => {
    if(newValue! > toDateValue!){
        setFromDateValue(dayjs(''))
    }
    else{
        setFromDateValue(newValue);
    }
  };

  const handleToDateChange = (newValue: Dayjs | null) => {
    if(newValue! < fromDateValue!){
        setToDateValue(dayjs(''))
    }
    else{
        setToDateValue(newValue);
    }
    
  };

  const handleChangeTabIndex = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrTab(newValue);
    setActivePage(0)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currTab}  onChange={handleChangeTabIndex} aria-label="basic tabs example">
          <Tab label="Cars to book" {...a11yProps(0)} />
          <Tab label="Past Booking" {...a11yProps(1)} />
          <Tab label="Upcoming Booking" {...a11yProps(2)} />
        </Tabs>
        
      </Box>
      <br/>
      {
        (currTab != 0) && 
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="From"
                    inputFormat="MM/DD/YYYY"
                    value={fromDateValue}
                    onChange={handleFromDateChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                    label="To"
                    inputFormat="MM/DD/YYYY"
                    value={toDateValue}
                    onChange={handleToDateChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            
            </>
      }
      
    </Box>
  );
}