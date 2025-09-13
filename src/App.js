import React from 'react';
import './App.css';
import EggIcon from '@mui/icons-material/Egg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';
import SearchBar from './Search';
import Results from './Results';
import NatureAnimation from './NatureAnimation';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[200],
      },
      secondary: {
        main: red[500],
      },
      mode: 'dark', 
    },
  });

  const [data, setData] = React.useState(null);
  const [value, setValue] = React.useState(null);
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ height: '100vh'}}>
        <div id="start">
          <Card id="header">
              <EggIcon style={{ fontSize: 60 }} />
              <>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                  This
                </Typography>
                  for
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                  That
                </Typography>
              </>
          </Card>
          <div className="body">
            {data ? <Results data={data} value={value}/> : <SearchBar setData={setData} setValue={setValue} value={value}/>}
          </div>
          {!data && <NatureAnimation opacity={0.5} height="150px"/>}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
