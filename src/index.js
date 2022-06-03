import './style.css';
import './css/app.css';
import './css/comment.css';
import showMovies from './modules/showMovies.js';
import getData from './modules/getdata.js';
import commentsListner from './modules/commentsPopUp.js';

 
document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
  commentsListner();
};
displayItem();