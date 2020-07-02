import React from 'react';
import { Card, CardMedia, CardActionArea, Container, Typography, List,Link, ListItem, Divider, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    img:{
        height: 200,
        width: 200
    },
    grid: {
        padding: '10px'
    },
    card: {
        padding: '3px',
        paddingRight: 0,
        position: 'relative'
    },
    root:{
        paddingTop: 60,
        paddingRight: 10,
    },
    list: {
        position: 'relative'
      },
    button: {
        color: "#1a237e",
        height: 40,
        width: 50
    }
  });


function RenderImage(image){
    const props = { height: image.image.height, width: image.image.width };
    const classes = useStyles(props);
    return (
        <ListItem xs={12} md={12} divider="true" >
            <ListItemText xs={12} className={classes.list}>
                <Typography>{image.image.alt_description}</Typography>
                <Typography>{new Intl.DateTimeFormat('en-US', 
                                        { year: 'numeric', month: 'short', day: '2-digit'})
                                        .format(new Date(Date.parse(image.image.created_at)))}</Typography>
            </ListItemText>
            <div className={classes.card}>
                <Card raised="true" key={image.id} xs={12}  >
                    <CardActionArea href={image.image.urls.full}>
                        <CardMedia
                                className={`${classes.img}`}
                                image={image.image.urls.regular}
                                title={image.id} />
                    </CardActionArea>
                </Card>
            </div>
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
                <Container maxWidth="false" fluid className={classes.root}>
                    <Link href="/"  className={classes.button}>GRID VIEW</Link>
                        <List>
                            {pics}
                        </List>
                </Container>
            </div>
        );
    }
}

export default PortfolioList;
