import React from 'react';
import { Card, CardMedia, CardActionArea,  Grid, Container, GridList, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    img: props => ({
        height: props.height/(props.height/props.width*10),
    }),
    grid: {
        padding: '10px'
    },
    card: {
        padding: '3px',
        flex: '1 0 auto',
    },
    root:{
        paddingTop: 80,
        paddingRight: 6,
    },
    gridList: {
        paddingTop: 10,
        color: '#b3e5fc'
      },
      button: {
        backgroundColor: "#b3e5fc"
      }
  });


function RenderImage(image){
    const props = { height: image.image.height, width: image.image.width };
    const classes = useStyles(props);
    return (
        <div>
        <Grid item xs={12} className={classes.grid} >
            <Card raised="true" key={image.id} className={classes.card} >
            <CardActionArea href={image.image.urls.full}>
                <CardMedia 
                        width="auto"
                        className={`${classes.img}`}
                        image={image.image.urls.regular}
                        title={image.id} />
            </CardActionArea>
            </Card>
        </Grid>
        </div>
    );
}

function PortfolioGrid(props){
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
                <Button href="/list" variant="contained" className={classes.button}>List view</Button>
                <br></br>
                    <div className={classes.gridList}>
                        <GridList cellHeight="800" md={12}  >
                            <Grid container spacing={4} md={12} sm={12} xs={12}>
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
                        </GridList>
                    </div>
                </Container>
            </div>
        );
    }
}



export default PortfolioGrid;


