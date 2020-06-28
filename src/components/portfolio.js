import React, { Component } from 'react';
import { Card, CardMedia, Typography, CardContent, CardActionArea, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Credentials from "../credentials";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 500,
      width: 500,
    },
  });

export default function Portfolio(props){
    const classes = useStyles();
    if(props.photos.results == null){
        return(
            <div>
            </div>
        )
    } else {
        const pics = props.photos.results.map((image) => {
            return (
                <Card key={image.id}>
                    <CardActionArea>
                    <CardMedia 
                    className={classes.media}
                    image={image.urls.regular}
                    title={image.id} />
                    </CardActionArea>
                    <Divider/>
                </Card>
            );
        });
        return(
            <div>
                {pics}
            </div>
        );
    }
}


