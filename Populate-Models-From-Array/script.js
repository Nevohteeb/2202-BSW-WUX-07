console.log('working');

var movies = [{
        title: 'Top Gun',
        year: '1986',
        image: 'img/TopGun.jpeg',
        genre: 'Action',
        blurb: 'The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills. When hotshot fighter pilot Maverick (Tom Cruise) is sent to the school, his reckless attitude and cocky demeanor put him at odds with the other pilots, especially the cool and collected Iceman (Val Kilmer). But Maverick is not only competing to be the top fighter pilot, he is also fighting for the attention of his beautiful flight instructor, Charlotte Blackwood (Kelly McGillis).',
        starring: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis'],
        rating: 'PG',
        reviews: [{
                postedBy: 'CruiseLover87',
                review: 'Absolutely GOATED!!!!'
            },
            {
                postedBy: 'NoTasteInMovies',
                review: 'Ugh.... so cringe!'
            }
        ],
        trailerUrl: 'https://youtu.be/ArOMXELHiLw'
    },
    {
        title: 'Alien',
        year: '1979',
        image: 'img/Alien.jpeg',
        genre: 'Horror',
        blurb: 'In the distant future, the crew of the commercial spaceship Nostromo are on their way home when they pick up a distress call from a distant moon. The crew are under obligation to investigate and the spaceship descends on the moon afterwards. After a rough landing, three crew members leave the spaceship to explore the area on the moon. At the same time as they discover a hive colony of some unknown creature, the ships computer deciphers the message to be a warning, not a distress call. When one of the eggs is disturbed, the crew realizes that they are not alone on the spaceship and they must deal with the consequences.',
        starring: ['Sigourney Weaver', 'Tom Skerritt', 'John Hurt'],
        rating: 'R16',
        reviews: [{
                postedBy: 'Pluto-3',
                review: 'The beginning of one of the greatest series of all time. This film will always remain a classic. It is scary, influential and insanely entertaining. Not just that but Ridley Scott actually has a great sense of style and mood and he plays with that a lot, to make us shiver. There is also an interesting mystery surrounding the Alien which we know practically nothing about. Sigourney Weaver is just as powerful as usual and really brings strength to the film; they make one. Last but not least, the musical score. Wow! It is fantastic. I think the Alien series is known for that aspect as well. Lets hope they will continue the series and dang we need it all on DVD !'
            },
            {
                postedBy: 'BroadSwordDannyBoi2',
                review: 'This is one of the finest science fiction films ever made. Everything is so carefully and expertly constructed to the point that repeated viewings are just as good as the first. Also, the atmosphere, along with the amazing sets, is real shocker and few movies have managed to create the same kind eerie feeling.'
            }
        ],
        trailerUrl: 'https://youtu.be/ArOMXELHiLw'
    },
    {
        title: 'Event Horizon',
        year: '1997',
        image: 'img/EventHorizon.jpg',
        genre: 'Sci-fi',
        blurb: 'In the year 2047 a group of astronauts are sent to investigate and salvage the long lost starship "Event Horizon". The ship disappeared mysteriously 7 years before on its maiden voyage and with its return comes even more mystery as the crew of the "Lewis and Clark" discover the real truth behind its disappearance and something even more terrifying...',
        starring: ['Laurence Fishburne', 'Sam Neil', 'Kathleen Quinlan'],
        rating: 'R',
        reviews: [{
                postedBy: 'Leofwine-draca',
                review: 'Originally conceived as THE SHINING in space, by the end I think EVENT HORIZON has become more like HELLRAISER in space, although of course one of the later HELLRAISER movies was just that. This is an intriguing and interesting sci-fi/horror movie that initially feels like an ALIEN clone before becoming something else quite different.'
            },
            {
                postedBy: 'Agent10',
                review: 'This film was a lot better than what most people gave it credit for. The cinematography was excellent, and the lighting gave the film a very eerie feel to it. Certainly better than the average sci-fi film. Not only did the film mix two mediums almost perfectly (sci-fi and horror), it completed the union almost flawlessly. Not a perfect movie, but then again, Sam Neill was amazing in this film. Virtually all of the technical aspects in the film were top-notch. While it did not advance the film industry overall, it did make an impact in the sci-fi genre.'
            }
        ],
        trailerUrl: 'https://youtu.be/ArOMXELHiLw'
    },
    {
        title: 'Top Gun',
        year: '1986',
        image: 'img/TopGun.jpeg',
        genre: 'Action',
        blurb: 'The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills. When hotshot fighter pilot Maverick (Tom Cruise) is sent to the school, his reckless attitude and cocky demeanor put him at odds with the other pilots, especially the cool and collected Iceman (Val Kilmer). But Maverick is not only competing to be the top fighter pilot, he is also fighting for the attention of his beautiful flight instructor, Charlotte Blackwood (Kelly McGillis).',
        starring: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis'],
        rating: 'PG',
        reviews: [{
                postedBy: 'CruiseLover87',
                review: 'Absolutely GOATED!!!!'
            },
            {
                postedBy: 'NoTasteInMovies',
                review: 'Ugh.... so cringe!'
            }
        ],
        trailerUrl: 'https://youtu.be/ArOMXELHiLw'
    },
    {
        title: 'Top Gun',
        year: '1986',
        image: 'img/TopGun.jpeg',
        genre: 'Action',
        blurb: 'The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills. When hotshot fighter pilot Maverick (Tom Cruise) is sent to the school, his reckless attitude and cocky demeanor put him at odds with the other pilots, especially the cool and collected Iceman (Val Kilmer). But Maverick is not only competing to be the top fighter pilot, he is also fighting for the attention of his beautiful flight instructor, Charlotte Blackwood (Kelly McGillis).',
        starring: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis'],
        rating: 'PG',
        reviews: [{
                postedBy: 'CruiseLover87',
                review: 'Absolutely GOATED!!!!'
            },
            {
                postedBy: 'NoTasteInMovies',
                review: 'Ugh.... so cringe!'
            }
        ],
        trailerUrl: 'https://youtu.be/ArOMXELHiLw'
    },
    {
        title: 'Top Gun',
        year: '1986',
        image: 'img/TopGun.jpeg',
        genre: 'Action',
        blurb: 'The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills. When hotshot fighter pilot Maverick (Tom Cruise) is sent to the school, his reckless attitude and cocky demeanor put him at odds with the other pilots, especially the cool and collected Iceman (Val Kilmer). But Maverick is not only competing to be the top fighter pilot, he is also fighting for the attention of his beautiful flight instructor, Charlotte Blackwood (Kelly McGillis).',
        starring: ['Tom Cruise', 'Val Kilmer', 'Kelly McGillis'],
        rating: 'PG',
        reviews: [{
                postedBy: 'CruiseLover87',
                review: 'Absolutely GOATED!!!!'
            },
            {
                postedBy: 'NoTasteInMovies',
                review: 'Ugh.... so cringe!'
            }
        ],
        trailerUrl: 'https://youtu.be/ArOMXELHiLw'
    },
]

// Get all filter inputs
var genre = document.getElementById('genreSelect');
var rating = document.getElementById('ratingSelect');
var starring = document.getElementById('starringSelect');
var search = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');

// Event Listeners
genre.addEventListener('change', filterGenre);
rating.addEventListener('change', filterRating);
starring.addEventListener('change', starringFilter);
// Straight Compare Search - Click Event
search.addEventListener('click', searchMovies);

// On KeyUp - Search - refreshes on every key entry
searchInput.addEventListener('keyup', function (event) {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    // console.log(event.target.value);
    var input = event.target.value;
    for (var i = 0; i < movies.length; i++) {
        if ((movies[i].title.toLowerCase().includes(input.toLowerCase())) === true) {
            console.log("success");
            var movie = movies[i];
            moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#movieModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
});


function filterGenre() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        if (genre.value === movie.genre) {
            moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#movieModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
}

function filterRating() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        if (rating.value === movie.rating) {
            moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#movieModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
}

function starringFilter() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    for (var i = 0; i < movies.length; i++) {
        for (var j = 0; j < movies[i].starring.length; j++) {
            var movie = movies[i];
            var stars = movies[i].starring[j];
            if (starring.value === stars) {
                moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#movieModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
            }
        }
    }
    populateModals();
}

function getAllMovies() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#movieModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
    }
    populateModals();
}

getAllMovies();

function searchMovies() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    var searchValue = searchInput.value;
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        if (searchValue.toLowerCase() == movie.title.toLowerCase()) {
            moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title} Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn readmore" id="${i}" data-bs-toggle="modal" data-bs-target="#movieModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
    populateModals();
}

// Apply Event listeners to all Read More buttons

function populateModals() {
    var readmoreButtons = document.querySelectorAll('.readmore');
    Array.from(readmoreButtons).forEach(function (btn) {
        btn.addEventListener('click', function () {
            console.log(this.id);
            var movieModal = document.getElementById('modalResult');
            movieModal.innerHTML = `
        <div class="modal-header">
          <h2 id="exampleModalLabel">${movies[this.id].title}  - ${movies[this.id].year}</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-center">
            <img class="modal-image" src="${movies[this.id].image}" alt="">
          </div>
          <h5 class="mt-3">Starring: ${movies[this.id].starring}</h5>
            <p class="mt-3">${movies[this.id].blurb}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        `
        })
    })
}