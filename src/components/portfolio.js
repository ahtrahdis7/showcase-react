import React from 'react';
import { Card, CardMedia, CardActionArea,  Grid, Container, Modal, Fade, Backdrop, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    img: props => ({
        height: props.height/(props.height/props.width*10),
    }),
    grid: {
        padding: '10px'
    },
    card: {
        padding: '3px'
    },
    root:{
        paddingTop: 100,
        paddingRight: 4,
    },
  });


function RenderImage(image){
    const props = { height: image.image.height, width: image.image.width };
    const classes = useStyles(props);
    return (
        <div>
        <Grid item xs={12} className={classes.grid} >
            <Card raised="true" key={image.id} className={classes.card} >
            <CardMedia 
                    width="auto"
                    className={`${classes.img}`}
                    image={image.image.urls.regular}
                    title={image.id} />
            </Card>
        </Grid>
        </div>
    );
}

function Portfolio(props){
    const classes = useStyles();

    if(props.photos.results == null){
        return(
            <div>
            </div>
        )
    } else {
        var len = props.photos.results.length;
        var array = props.photos.results;
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        array.sort(function(a,b){
            return b.height - a.height;
        });
        for(var i=0; i < len; i++){
            if(i%3 === 0){
                arr1.push(array[i]);
            }else if(i%3 === 1){
                arr2.push(array[i]);
            }else{
                arr3.push(array[i]);
            }
        }

        const picsg1 = arr1.map((image) => {
            return (
                <RenderImage image={image} />
            );
        });
        const picsg2 = arr2.map((image) => {
            return (
                <RenderImage image={image} />
            );
        });
        const picsg3 = arr3.map((image) => {
            return (
                <RenderImage image={image} />
            );
        });
        return(
            <div >
                <Container fluid className={classes.root}>
                    <Grid container spacing={4} md={12} >
                        <Grid  xs={12} md={4} sm={6} >
                            {picsg1}
                        </Grid>
                        <Grid  xs={12} md={4} sm={6} >
                            {picsg2}
                        </Grid>
                        <Grid  xs={12} md={4} sm={6} >
                            {picsg3}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Portfolio;


