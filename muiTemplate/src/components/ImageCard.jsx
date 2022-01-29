import React from 'react';

import iguana from '../assets/img/contemplative-reptile.jpg'

import { 
          Card, 
          CardMedia, 
          CardContent, 
          Typography, 
          CardActions, 
          Button
} from '@mui/material'


const ImageCard = () => {


          return (
                    
                    <Card sx={{ maxWidth: 345 }}>

                              <CardMedia
                                        component="img"
                                        height="140"
                                        image={iguana}
                                        alt="green iguana"
                              />

                              <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                                  Lizard
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                                  Lizards are a widespread group of squamate reptiles, with over 6,000
                                                  species, ranging across all continents except Antarctica
                                        </Typography>
                              </CardContent>

                              <CardActions>
                                        <Button size="small">Share</Button>

                                        <Button size="small">Learn More</Button>
                              </CardActions>
                    </Card>
          );
};

export default ImageCard;
