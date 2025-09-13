import React, { useState } from 'react';
import { TextField, Autocomplete, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import ForestIcon from '@mui/icons-material/Forest';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Co2Icon from '@mui/icons-material/Co2';
import Divider from '@mui/material/Divider';
import LoadingButton from '@mui/lab/LoadingButton';

const OPTIONS = [
    "Cranberry Juice",
    "Grape Juice",
    "Grapefruit Juice",
    "Apple Juice",
    "Orange Juice",
    "Pineapple",
    "Prune Juice",
    "Pomegrenate Juice",
    "Tomato Juice",
    "Butter",
    "Buttermilk",
    "Cheddar Cheese",
    "Mozzarella",
    "Cottage Cheese",
    "Cream cheese",
    "Heavy Cream",
    "Lowfat Milk",
    "Reduced Fat Milk",
    "Nonfat Milk",
    "Cheese",
    "Sour Cream",
    "Yogurt",
    "Egg, whole",
    "Egg, white",
    "Egg, yolk",
    "Apples",
    "Apricot",
    "Avocado",
    "Grapefruit",
    "Green Grapes",
    "Red Grapes",
    "Oranges",
    "Peaches",
    "Pear",
    "Plum",
    "Greek Yoghurt",
    "Barley",
    "Sorghum Bran",
    "Bulgur",
    "Corn Flour",
    "Spinach",
    "Oat Milk",
    "Brown Rice",
    "Long Grain Brown Rice",
    "Glutinous Rice",
    "White Rice",
    "Long Grain White Rice",
    "Flour, rye",
    "Sesame Butter",
    "Marinara Sauce",
    "Enriched AP Flour",
    "Unenriched AP Flour",
    "Whole Wheat Flour",
    "Lentils",
    "Navy Beans",
    "Peanuts",
    "Green Peas",
    "Soy Flour",
    "Almond Butter",
    "Almonds",
    "Cashews",
    "Pecans",
    "Pistachios",
    "Coconut Oil",
    "Corn Oil",
    "Olive Oil",
    "Peanut Oil",
    "Soybean Oil",
    "Sunflower Oil",
    "Chicken Breast",
    "Chicken Thighs",
    "Chicken Drumstick",
    "Pork",
    "Beef, top sirloin",
    "Ham",
    "Catfish",
    "Cod",
    "Haddock",
    "Pollock",
    "Salmon",
    "Shrimp",
    "Tilapia",
    "Tuna",
    "Kidney Beans",
    "Garlic",
    "Kale",
    "Red Onions",
    "Red Bell Peppers",
    "Potatoes",
    "Tomato",
    "Tomato Paste",
    "Brussels Sprouts",
    "Zucchini",
    "Broccoli",
    "Cabbage",
    "Cauliflower",
    "Iceberg Lettuce",
    "Romaine Lettuce",
    "Green Bell Peppers",
    "Celery",
    "Butternut Squash",
    "Lion's Mane Mushroom"
];

export default function SearchBar({ setData, setValue, value }) {
    const [co2, setCo2] = useState(null);
    const [water, setWater] = useState(null);
    const [land, setLand] = useState(null);
    const [fetrilizer, setFertilizer] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const API_URL = 'https://thisorthatapi.onrender.com/items';
    const handleSearch = () => {
        setLoading(true);
        const params = new URLSearchParams();
        if (value) params.append('food_item', value);
        if (co2) params.append('co2', 'true');
        if (water) params.append('water', 'true');
        if (land) params.append('land', 'true');
        if (fetrilizer) params.append('fertilizer', 'true');
        
        fetch(`${API_URL}?${params.toString()}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
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
                options={OPTIONS}
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
            <LoadingButton 
                variant="contained" 
                color="primary" 
                style={{ marginTop: '30px' }} 
                disabled={!value} 
                onClick={handleSearch}
                loading={loading}
            >
                Search
            </LoadingButton>
        </Card>
    );
}