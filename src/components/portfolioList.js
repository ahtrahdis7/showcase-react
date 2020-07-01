import React from 'react';
import { Card, CardMedia, CardActionArea,  Grid, Container, GridList, Button, CardContent, Typography, List, ListItem, Divider, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    img: props => ({
        height: 200,
        width: 200
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
        border: '3px',
      },
    button: {
        backgroundColor: "#b3e5fc",
    }
  });


function RenderImage(image){
    const props = { height: image.image.height, width: image.image.width };
    const classes = useStyles(props);
    return (
        <ListItem xs={12} md={12} divider="true" className={classes.card}>
            <ListItemText xs={12} >
                <Typography>{image.image.alt_description}</Typography>
                <Typography>{new Intl.DateTimeFormat('en-US', 
                                        { year: 'numeric', month: 'short', day: '2-digit'})
                                        .format(new Date(Date.parse(image.image.created_at)))}</Typography>
            </ListItemText>
            <Card raised="true" key={image.id} xs={12} >
                <CardActionArea href={image.image.urls.full}>
                    <CardMedia
                            className={`${classes.img}`}
                            image={image.image.urls.regular}
                            title={image.id} />
                </CardActionArea>
            </Card>
            <Divider variant="inset" component="li" />
        </ListItem>

    );
}

function PortfolioList(props){
    const classes = useStyles();

    if(props.photos.results == null){
        return(
            <div>
            </div>
        )
    } else {
        var array = props.photos.results;

        const pics = array.map((image) => {
            return (
                    <RenderImage image={image} />
            );
        });

        return(
            <div >
                <Container fluid className={classes.root}>
                    <Button href="/grid" variant="contained" className={classes.button}>Grid view</Button>
                        <List>
                            {pics}
                        </List>
                </Container>
            </div>
        );
    }
}

export default PortfolioList;
