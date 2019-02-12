import axios from 'axios';
import database from '../firebase/firebase';

export const searchVideos = search => ({
  type: 'FETCH_VIDEOS',
  payload: axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
      search.keyword
    }&key=AIzaSyBVhMYwvD0RCQ0jf7GwtO7u_x2FTrgeoV0&maxResults=${search.maxResults}&pageToken=${
      search.pageToken
    }&type=video`
  )
});

export const addFavorite = videoId => ({
  type: 'ADD_FAVORITE',
  videoId
});

export const startAddFavorite = (videoId = '') => {
  return (dispatch, getState) => {
    const { uid } = getState().auth;

    return database
      .ref(`users/${uid}/favorites`)
      .push(videoId)
      .then(() => {
        dispatch(addFavorite(videoId));
      });
  };
};
