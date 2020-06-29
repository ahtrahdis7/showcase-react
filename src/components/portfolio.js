import React, { Component } from 'react';
import { Card, CardMedia, Typography, CardContent, CardActionArea, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Credentials from "../credentials";

const useStyles = makeStyles({
    img: props => ({
        height: props.height/10,
        width: props.width/10
    })
  });

function RenderImage(image){
    const props = { height: image.image.height, };
    const classes = useStyles(props);
    return (
            <Card key={image.id}>
                    <CardActionArea>
                    <CardMedia 
                    className={`${classes.img}`}
                    image={image.image.urls.full}
                    title={image.id} />
                    </CardActionArea>
                    <Divider/>
                </Card>
    )
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


