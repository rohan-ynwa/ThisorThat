import React, { useState } from 'react';
import { TextField, Autocomplete, Box, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import ForestIcon from '@mui/icons-material/Forest';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Co2Icon from '@mui/icons-material/Co2';
import Divider from '@mui/material/Divider';

const options = [
    'Apple',
    'Banana',
    'Carrot',
    'Doughnut',
    'Eggplant',
    'Fig',
    'Grape',
];

export default function SearchBar({ setData, setValue, value }) {
    const [co2, setCo2] = useState(null);
    const [water, setWater] = useState(null);
    const [land, setLand] = useState(null);
    const [fetrilizer, setFertilizer] = useState(null);

    const handleSearch = () => {
        // Implement your search logic here
        // For demonstration, we'll just set some dummy data
        setData([
            { name: value, co2:  10, water: 20, land: 30, fertilizer: 40 },
            { name: value + ' Alternative 1', co2: 15, water: 25, land: 35, fertilizer: 45 },
            { name: value + ' Alternative 2', co2: 12, water: 22, land: 32, fertilizer: 42 }
        ]);
    }


    return (
        <Card id="search-card">
            <Typography variant='subtitle2' gutterBottom color='textSecondary'>
                Select the environmental impacts you want to minimize:
            </Typography>
            <div style={{display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap', justifyContent: 'center'}}>
                <Chip label="Carbon Impact" onClick={() => setCo2(!co2)} color={co2 ? 'primary' : 'default'} icon={<Co2Icon />}  />
                <Chip label="Water Use" onClick={() => setWater(!water)} color={water ? 'primary' : 'default'} icon={<WaterDropIcon />}  />
                <Chip label="Land Use" onClick={() => setLand(!land)} color={land ? 'primary' : 'default'} icon={<ForestIcon />}  />
                <Chip label="Fertilizer Use" onClick={() => setFertilizer(!fetrilizer)} color={fetrilizer ? 'primary' : 'default'}  icon={<AgricultureIcon />} />
            </div>
            <Divider variant="middle" flexItem />
            <Autocomplete
                options={options}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <SearchIcon sx={{ mr: 1, color: 'gray' }} />
                        <TextField
                            {...params}
                            label="Ask for a food substitute for..."
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                )}
                sx={{ width: '100%', marginTop: '20px' }}
            />
            <Button 
                variant="contained" 
                color="primary" 
                style={{ marginTop: '30px' }} 
                disabled={!value} 
                onClick={handleSearch}
            >
                Search
            </Button>
        </Card>
    );
}