import React from 'react'
import Card from '@material-ui/core/Card';
import { CardActionArea,CardMedia, CardContent, Typography } from '@material-ui/core';

const Cards = (props) => {
    return (
        <Card className="main_Card">
            <CardActionArea>
                <CardMedia className="card_media"
                 image={props.image}
                 title={props.imagetitle}
                />
                <CardContent>
                    <Typography>
                        {props.title}
                    </Typography>
                    <Typography>
                       {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
        </Card>
    )
}

export default Cards 