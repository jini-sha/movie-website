const search = document.getElementById("search")
const submit = document.getElementById("submit-btn")
const movieList = document.querySelector(".movie-list")
const apiKey = "f61d03ac";


async function getMovieData(movieName) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`);
        const data = await response.json();
        console.log(data);
        movieList.innerHTML = '';
        data.Search.filter(movie => {
            console.log(movie.Title);
            const card = document.createElement("div");
            card.className = "card";

            const title = document.createElement("h1");
            title.textContent = movie.Title;

            const moviePoster = document.createElement("img");
            moviePoster.src = movie.Poster;

            const movieYear = document.createElement("p");
            movieYear.textContent = movie.Year;

            const imdb = document.createElement("p");
            imdb.textContent = movie.imdbID;

            card.appendChild(title);
            card.appendChild(moviePoster);
            card.appendChild(movieYear);
            card.appendChild(imdb);
            movieList.appendChild(card);
        })
    } catch (err) {
        console.log(err)
    }
}


function handleSearch() {
    if (search.value === '') {
        alert("Movie name????");
    } else {
        getMovieData(search.value);
    }
}

submit.addEventListener("click", handleSearch);

search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleSearch();
    }
});
