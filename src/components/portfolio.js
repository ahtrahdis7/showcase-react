import React from 'react';
import { Card, CardMedia, CardActionArea,  Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    img: props => ({
        height: props.height/12,
    }),
    grid: {
        padding: '2px'
    },
    card: {
        padding: '6px'
    }
  });

function RenderImage(image){
    const props = { height: image.image.height };
    const classes = useStyles(props);
    return (
        <Grid item xs={12} className={classes.grid} >
            <Card raised="true" key={image.id} className={classes.card} >
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
        var len = props.photos.results.length;
        const arr1 = props.photos.results.slice(0, len/3);
        const arr2 = props.photos.results.slice(len/3, 2*len/3);
        const arr3 = props.photos.results.slice(2*len/3, len);

        const picsg1 = arr1.map((image) => {
            if(image.height/10 > 200)
                return (
                    <RenderImage image={image} />
                );
            else 
                return(
                    <div></div>
                );
        });
        const picsg2 = arr2.map((image) => {
            if(image.height/10 > 200)
                return (
                    <RenderImage image={image} />
                );
            else 
                return(
                    <div></div>
                );
        });
        const picsg3 = arr3.map((image) => {
            if(image.height/10 > 250)
                return (
                    <RenderImage image={image} />
                );
            else 
                return(
                    <div></div>
                );
        });
        return(
            <div>
                <Grid container spacing={4} md={12} >
                    <Grid  xs={12} spacing={4} md={4} sm={6} width="auto">
                        {picsg1}
                    </Grid>
                    <Grid  xs={12} spacing={4} md={4} sm={6} width="auto">
                        {picsg2}
                    </Grid>
                    <Grid  xs={12} spacing={4} md={4} sm={6} width="auto">
                        {picsg3}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Portfolio;


