// get html elements
const $movieName = document.querySelector("#movie-name-input");
const $movieNameBtn = document.querySelector("#movie-search-btn");
const $searchMoviesContainer = document.querySelector("#full-item-details-container");

//get input in search box
$movieNameBtn.addEventListener("click", () => {
  var movieName = $movieName.value;
  findmovies(movieName);
});

//fatch data from omdb
const findmovies = async (moviename) => {
  const movieUrl = `https://www.omdbapi.com/?t=${moviename}&apikey=e0ef8a8c`;
  const response = await fetch(movieUrl);
  const data = await response.json();
  showItems(data);
};

//create item
const showItems = (data) => {
    console.log(data.Response);
    data.Response == 'True' ? createItem(data) : $searchMoviesContainer.innerHTML =`  <div class="full-item-details"><h3> Can't Find </h3></div>  `;
    
};
function createItem(data) {
  const items = `
    <div class="full-item-details">
    <img src="${data.Poster}" alt="">
    <div class="items-details">
        <h3><span>Title:</span>${data.Title}</h3>
    <p> <span>Years:</span>${data.Year}</p>
    <p><span>Director:</span>${data.Director}</p>
    <p><span>Production:</span> ${data.Production}</p>
    <p><span>Actors:</span> ${data.Actors}</p>
    <p><span>Genre:</span> ${data.Genre}</p>
    </div>  
</div>`;
  $searchMoviesContainer.innerHTML = items;
}
