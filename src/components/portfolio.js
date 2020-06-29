import React from 'react';
import { Card, CardMedia, CardActionArea, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    img: props => ({
        height: props.height/10,
        width: props.width/10
    }),
    card: {
        padding: '1px'
    }
  });

function RenderImage(image){
    const props = { height: image.image.height };
    const classes = useStyles(props);
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card key={image.id} className={classes.card}>
            <CardActionArea>
                <CardMedia 
                width="auto"
                className={`${classes.img}`}
                image={image.image.urls.regular}
                title={image.id} />
            </CardActionArea>
            </Card>
        </Grid>
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
            <Grid container spacing={2} xs={12} width="auto">
                {pics}
            </Grid>
        </div>
        );
    }
}

export default Portfolio;


