var restaurants = [
    {name: 'Casa Reveles',
    dineIn: 'yes',
    genre: 'mexican',
    image: './restaurantImages/casaReveles.jpg',
    },
    {name: `Denny's`,
    dineIn: 'yes',
    genre: 'burgers',
    image: './restaurantImages/dennys.jpg',
    },
    {name: 'Dominoes',
    dineIn: 'no',
    genre: 'fastFood',
    image: './restaurantImages/dominoes.jpg',
    },
    {name: 'Jersey Mikes',
    dineIn: 'no',
    genre: 'other',
    image: './restaurantImages/jerseyMikes.jpg',
    },
    {name: 'La Cocina',
    dineIn: 'yes',
    genre: 'mexican',
    image: './restaurantImages/laCocina.jpg',
    },
    {name: 'Los Rancheros',
    dineIn: 'no',
    genre: 'mexican',
    image: './restaurantImages/losRancheros.jpg',
    },
    {name: 'L&L Hawaiian BBQ',
    dineIn: 'yes',
    genre: 'other',
    image: './restaurantImages/l&l.jpg',
    },
    {name: 'Mananas',
    dineIn: 'yes',
    genre: 'mexican',
    image: './restaurantImages/mananas.jpg',
    },
    {name: 'Panda Express',
    dineIn: 'no',
    genre: 'fastFood',
    image: './restaurantImages/pandaExpress.jpg',
    },
    {name: `Pete's BBQ`,
    dineIn: 'yes',
    genre: 'other',
    image: './restaurantImages/petesBBQ.jpg',
    },
    {name: 'Pinto Thai',
    dineIn: 'yes',
    genre: 'asian',
    image: './restaurantImages/pintoThai.jpg',
    },
    {name: 'Popeyes',
    dineIn: 'no',
    genre: 'fastFood',
    image: './restaurantImages/popeyes.jpg',
    },
    {name: 'Ramona Noodle House',
    dineIn: 'yes',
    genre: 'asian',
    image: './restaurantImages/noodleHouse.jpg',
    },
    {name: `Sofie's Pita`,
    dineIn: 'yes',
    genre: 'other',
    image: './restaurantImages/sofiesPita.jpg',
    },
    {name: 'The Barn',
    dineIn: 'yes',
    genre: 'burgers',
    image: './restaurantImages/theBarn.jpg',
    },
    {name: 'Vibes Sushi Bar and Grill',
    dineIn: 'yes',
    genre: 'asian',
    image: './restaurantImages/vibesSushiBar.jpg',
    },
    {name: `Wendy's`,
    dineIn: 'no',
    genre: 'fastFood',
    image: './restaurantImages/wendys.jpg',
    },
]

var dineIn = document.querySelectorAll("input[name='dineIn']");
var genre = document.querySelectorAll("input[name='genre']");
var generateBtn = document.querySelector('#generateBtn');
var dineInChoice = '';
var genreChoice = '';
var filteredrestaurants = [];

generateBtn.addEventListener('click', () => {
    for (i = 0; i < dineIn.length; i++) {
        if (dineIn[i].checked) {
            dineInChoice = dineIn[i].value;
        }
    }
    for (i = 0; i < genre.length; i++) {
        if (genre[i].checked) {
            genreChoice = genre[i].value;
        }
    }
    if (dineInChoice == 'noPreference' && genreChoice == 'noPreference') {
        filteredrestaurants = restaurants;
    } else if (dineInChoice == 'noPreference' && genreChoice != 'noPreference') {
        for (restaurant of restaurants) {
            if (genreChoice == restaurant.genre) {
                filteredrestaurants.push(restaurant);
            }
        }
    } else if (dineInChoice != 'noPreference' && genreChoice == 'noPreference') {
        for (restaurant of restaurants) {
            if (dineInChoice == restaurant.dineIn) {
                filteredrestaurants.push(restaurant);
            }
        }
    } else {
        for (restaurant of restaurants) {
            if (dineInChoice == restaurant.dineIn && genreChoice == restaurant.genre) {
                filteredrestaurants.push(restaurant);
            }
        }
    }

    var randomNumber = Math.floor(Math.random() * filteredrestaurants.length);
    var outcome = document.querySelector('.outcome');
    var restaurantName = document.querySelector('.outcome h2');
    var totalrestaurants = document.querySelector('.outcome h4');

    if (filteredrestaurants.length == 0) {
        restaurantName.textContent = 'No matches were found, please broaden parameters.';
        outcome.removeChild(document.querySelector('img'));
        totalrestaurants.textContent = '';
    } else {
        restaurantName.textContent = filteredrestaurants[randomNumber].name;
        totalrestaurants.textContent = `(1 of ${filteredrestaurants.length})`
    }

    if (document.querySelector('.outcome img')) {
        document.querySelector('.outcome img').src = filteredrestaurants[randomNumber].image;
    } else {
        var img = document.createElement('img');
        img.src = filteredrestaurants[randomNumber].image;
        outcome.appendChild(img);
    }

    filteredrestaurants = [];
})