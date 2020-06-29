import React from 'react';
import { Card, CardMedia, CardActionArea, Divider, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    img: props => ({
        height: props.height/10,
        width: props.width/10
    }),
    card: {
        padding: '5px 10px'
    }
  });

function RenderImage(image){
    const props = { height: image.image.height };
    const classes = useStyles(props);
    return (
        <Card key={image.id} className={classes.card}>
            <CardActionArea>
            <CardMedia 
            className={`${classes.img}`}
            image={image.image.urls.regular}
            title={image.id} />
            </CardActionArea>
            <Paper elevation={3} />
            <Divider/>
        </Card>
    );
}

function Portfolio(props){
    if(props.photos.results == null){
        return(
            <div>
            </div>
        )
    } else {
        const pics = props.photos.results.map((image) => {
            return (
                <RenderImage image={image} />
            );
        });
        return(
            <div>
                {pics}
            </div>
        );
    }
}

export default Portfolio;


