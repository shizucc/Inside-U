import * as React from 'react';
import { styled } from '@mui/system';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import Tab, { tabClasses } from '@mui/base/Tab';

export default function Sidebar() {
  return (
    <>
    <Tabs defaultValue={0}>
        <div className='flex flex-row'>
            <div>
            <StyledTabsList>
            <div className='flex flex-col'>
                <h1 className='text-center font-bold text-black text-xl mb-10'>Username</h1>
              <StyledTab value={0}>Dashboard</StyledTab>
              <StyledTab value={1}>Manajemen Pakar</StyledTab>
              <StyledTab value={2}>Manajemen User</StyledTab>
              <StyledTab value={3}>Histori Diagnosa</StyledTab>
              <br />
              <span class="h-0.5 w-full bg-black lg:w-1/1" ></span>
              <StyledTab value={4}>Logout</StyledTab>
            </div>
          </StyledTabsList>
            </div>
        <div className='justify-center right-0 m-10'>
        <StyledTabPanel value={0}>Dashboard</StyledTabPanel>
          <StyledTabPanel value={1}>manajemen pakar</StyledTabPanel>
          <StyledTabPanel value={2}>manajemen user</StyledTabPanel>
        </div>
          
        </div>
    </Tabs>
    </>
    
    
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTab = styled(Tab)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${grey[900]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 200px;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: inline;
  text-align: left;

  &:hover {
    background-color: #BCCEF8;
  }

  &:focus {
    color: #BCCEF8;
  }

  &.${tabClasses.selected} {
    background-color: #BCCEF8;
    color: ${grey[900]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.6;
  justify-content:center;
  margin:0px auto;
  `,
);

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  width: 100%;
  height: 660px;
  background-color: ${grey[100]};
  border-radius: 0px;
  margin-bottom: 0px;
  display: flex;
  padding:70px;
  position:fix;
  align-items: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);