import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Gauge } from '@mui/x-charts/Gauge';
import ReplayIcon from '@mui/icons-material/Replay';
import { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import { gaugeClasses } from '@mui/x-charts/Gauge';

const Results = ({ data, value }) => {

    const unsplashAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    const [images, setImages] = useState({});

    useEffect(() => {
        const fetchImages = async () => {
            const newImages = {};
            for (const item of data) {
                const query = item.name;
                const res = await fetch(
                    `https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashAccessKey}`
                );
                const json = await res.json();
                newImages[item.name] = json.results?.[0]?.urls?.regular || '';
            }
            setImages(newImages);
        };
        if (data && data.length > 0) fetchImages();
    }, [data, unsplashAccessKey]);
    
    return (
        <div className='results-container'>
            <Card className='custom-card' style={{ padding: '5px' }}>
                <Typography variant='h6' color='textSecondary' style={{ padding: '10px' }}>
                    Here are some sustainable alternatives to {value}(s)!
                </Typography>
                <Tooltip title="Start a new search" arrow>
                    <ReplayIcon 
                        onClick={() => window.location.reload()} 
                        style={{ cursor: 'pointer', position: 'sticky', top: 0, right: 0, margin: '10px' }}
                        color='primary'
                    />
                </Tooltip>
            </Card>             
            {data.map((item, idx) => (
                <Card key={idx} className='custom-card'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={images[item.name] || 'https://via.placeholder.com/150'}
                        title={item.name}
                    />
                    <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Gauge 
                            width={300} 
                            height={50} 
                            value={item.nutrient_similarity || 0} 
                            startAngle={-90} 
                            endAngle={90} 
                            sx={(theme) => ({
                                [`& .${gaugeClasses.valueArc}`]: {
                                fill: '#f61a6bff',
                                },
                            })}
                        />
                        <Typography variant="subtitle2" color="textSecondary" style={{ marginBottom: '10px' }}>
                            Nutrient Similarity
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '10px' }}>
                            <Gauge width={100} height={100} value={item.co2 || 0} text={"CO2"} label="Co2" />
                            <Gauge width={100} height={100} value={item.water || 0} text={"Water"} label="Water" />
                            <Gauge width={100} height={100} value={item.land || 0} text={"Land"} label="Land" />
                            <Gauge width={100} height={100} value={item.fertilizer || 0} text={"Fertilizer"} label="Fertilizer" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Results;