import * as ActionTypes from './actionTypes';
import * as Credentials from '../credentials';

export const fetchPhotos = () => (dispatch) => { 
    console.log(dispatch);
    dispatch(photosLoading(true));
    return fetch("https://api.unsplash.com//search/collections?client_id="+Credentials.ACCESS_KEY+"&query=sunset")
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(photos => dispatch(addPhotos(photos)))
    .catch(error => dispatch(photosFailed(error.message)));
}

export const photosLoading = () => ({
    type: ActionTypes.PHOTOS_LOADING
});

export const addPhotos = (photos) => ({
        type: ActionTypes.ADD_PHOTOS,
        payload: photos
    });

export const photosFailed = (errmess) => ({
    type: ActionTypes.PHOTOS_FAILED,
    payload: errmess
});