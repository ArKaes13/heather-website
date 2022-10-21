var restuarants = [
    {name: 'Casa Reveles',
    dineIn: 'yes',
    genre: 'mexican',
    image: './restuarantImages/casaReveles.jpg',
    },
    {name: `Denny's`,
    dineIn: 'yes',
    genre: 'burgers',
    image: './restuarantImages/dennys.jpg',
    },
    {name: 'Dominoes',
    dineIn: 'no',
    genre: 'fastFood',
    image: './restuarantImages/dominoes.jpg',
    },
    {name: 'Jersey Mikes',
    dineIn: 'no',
    genre: 'other',
    image: './restuarantImages/jerseyMikes.jpg',
    },
    {name: 'La Cocina',
    dineIn: 'yes',
    genre: 'mexican',
    image: './restuarantImages/laCocina.jpg',
    },
    {name: 'Los Rancheros',
    dineIn: 'no',
    genre: 'mexican',
    image: './restuarantImages/losRancheros.jpg',
    },
    {name: 'L&L Hawaiian BBQ',
    dineIn: 'yes',
    genre: 'other',
    image: './restuarantImages/l&l.jpg',
    },
    {name: 'Mananas',
    dineIn: 'yes',
    genre: 'mexican',
    image: './restuarantImages/mananas.jpg',
    },
    {name: 'Panda Express',
    dineIn: 'no',
    genre: 'fastFood',
    image: './restuarantImages/pandaExpress.jpg',
    },
    {name: `Pete's BBQ`,
    dineIn: 'yes',
    genre: 'other',
    image: './restuarantImages/petesBBQ.jpg',
    },
    {name: 'Pinto Thai',
    dineIn: 'yes',
    genre: 'asian',
    image: './restuarantImages/pintoThai.jpg',
    },
    {name: 'Popeyes',
    dineIn: 'no',
    genre: 'fastFood',
    image: './restuarantImages/popeyes.jpg',
    },
    {name: 'Ramona Noodle House',
    dineIn: 'yes',
    genre: 'asian',
    image: './restuarantImages/noodleHouse.jpg',
    },
    {name: `Sofie's Pita`,
    dineIn: 'yes',
    genre: 'other',
    image: './restuarantImages/sofiesPita.jpg',
    },
    {name: 'The Barn',
    dineIn: 'yes',
    genre: 'burgers',
    image: './restuarantImages/theBarn.jpg',
    },
    {name: 'Vibes Sushi Bar and Grill',
    dineIn: 'yes',
    genre: 'asian',
    image: './restuarantImages/vibesSushiBar.jpg',
    },
    {name: `Wendy's`,
    dineIn: 'no',
    genre: 'fastFood',
    image: './restuarantImages/wendys.jpg',
    },
]

var dineIn = document.querySelectorAll("input[name='dineIn']");
var genre = document.querySelectorAll("input[name='genre']");
var generateBtn = document.querySelector('#generateBtn');
var dineInChoice = '';
var genreChoice = '';
var filteredRestuarants = [];

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
        filteredRestuarants = restuarants;
    } else if (dineInChoice == 'noPreference' && genreChoice != 'noPreference') {
        for (restuarant of restuarants) {
            if (genreChoice == restuarant.genre) {
                filteredRestuarants.push(restuarant);
            }
        }
    } else if (dineInChoice != 'noPreference' && genreChoice == 'noPreference') {
        for (restuarant of restuarants) {
            if (dineInChoice == restuarant.dineIn) {
                filteredRestuarants.push(restuarant);
            }
        }
    } else {
        for (restuarant of restuarants) {
            if (dineInChoice == restuarant.dineIn && genreChoice == restuarant.genre) {
                filteredRestuarants.push(restuarant);
            }
        }
    }

    var randomNumber = Math.floor(Math.random() * filteredRestuarants.length);
    var outcome = document.querySelector('.outcome');
    var restuarantName = document.querySelector('.outcome h2');
    var totalRestuarants = document.querySelector('.outcome h4');

    if (filteredRestuarants.length == 0) {
        console.log(filteredRestuarants)
        restuarantName.textContent = 'No matches were found, please broaden parameters.'
        outcome.removeChild(document.querySelector('img'));
    } else {
        console.log(filteredRestuarants)
        restuarantName.textContent = filteredRestuarants[randomNumber].name;
        totalRestuarants.textContent = `(1 of ${filteredRestuarants.length})`
    }

    if (document.querySelector('.outcome img')) {
        document.querySelector('.outcome img').src = filteredRestuarants[randomNumber].image;
    } else {
        var img = document.createElement('img');
        img.src = filteredRestuarants[randomNumber].image;
        outcome.appendChild(img);
    }

    filteredRestuarants = [];
})