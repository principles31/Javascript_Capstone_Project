import './style.css';
import getData from './modules/getdata.js';


document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
};
displayItem();