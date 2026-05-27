import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

export default function Home() {

    const [box, setBox] = useState([]);

    const open = () => {
        setBox([...box, { add: [] }]);
    }

    const deletecard = (deleteindex) => {
        const deletebox = [...box];
        deletebox.splice(deleteindex, 1);
        setBox(deletebox);
    }

    const addnew = (index) => {
        const addbox = [...box];
        addbox[index].add.push({ name: '' })
        setBox(addbox);
    }

    const deleteone = (index, i) => {
        const temp = [...box]; 
        temp[index].add.splice(i, 1);
        setBox(temp);
    }

    console.log(box);

    return (
        <>
            <button onClick={open} style={{ cursor: 'pointer' }} >Add</button>
            {
                box.map((item, index) => {
                    return (
                        <Card key={index} sx={{ minWidth: 200, marginBottom: 2 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <button onClick={() => { deletecard(index) }} style={{ cursor: 'pointer' }} >Delete</button>
                                <button onClick={() => { addnew(index) }}>Add</button>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            {
                                item.add.map((add, i) => {
                                    return (
                                        <CardContent key={i}>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Darshan Biox
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                be{bull}nev{bull}o{bull}lent
                                            </Typography>
                                            <button onClick={() => deleteone(index, i)}>Delee</button>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                adjective
                                            </Typography>
                                            <Typography variant="body2">
                                                well meaning and kindly.
                                                <br />
                                                {'"a benevolent smile"'}
                                            </Typography>
                                        </CardContent>
                                    )
                                })
                            }
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    );
                })
            }
        </>
    );
}
