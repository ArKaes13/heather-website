// Stores all food items and their relative properties.
const food = [
    {
        name: 'Burrito Bowl',
        image: './foodImages/burrito-bowl.jpg',
        link: './recipes/burrito-bowl.html'
    },
    {
        name: 'Butter Chicken',
        image: './foodImages/butter-chicken.jpg',
        link: './recipes/butter-chicken.html'
    },
    {
        name: 'Cheesecake',
        image: './foodImages/cheesecake.jpg',
        link: './recipes/cheesecake.html'
    },
    {
        name: 'Chicken Katsu',
        image: './foodImages/chicken-katsu.jpg',
        link: './recipes/chicken-katsu.html'
    },
    {
        name: 'Chicken Shawarma',
        image: './foodImages/chicken-shawarma.jpg',
        link: './recipes/chicken-shawarma.html'
    },
    {
        name: 'Coconut Lime Chicken',
        image: './foodImages/coconut-lime-chicken.jpg',
        link: './recipes/coconut-lime-chicken.html'
    },
    {
        name: 'Creamy Garlic Pork Chops',
        image: './foodImages/creamy-garlic-pork-chops.jpg',
        link: './recipes/creamy-garlic-pork-chops.html'
    },
    {
        name: 'Creamy Parmesan Chicken',
        image: './foodImages/creamy-parmesan-chicken.jpg',
        link: './recipes/creamy-parmesan-chicken.html'
    },
    {
        name: 'Flat Iron Steak with Gochujang',
        image: './foodImages/flat-iron-steak-with-gochujang-marinade.jpg',
        link: './recipes/flat-iron-steak-with-gochujang-marinade'
    },
    {
        name: 'Garlic Baked Chicken',
        image: './foodImages/garlic-baked-chicken.jpg',
        link: './recipes/garlic-baked-chicken.html'
    },
    {
        name: 'Garlic Butter Pork Chops',
        image: './foodImages/garlic-butter-pork-chops.jpg',
        link: './recipes/garlic-butter-pork-chops.html'
    },
    {
        name: 'Garlic Butter Shrimp',
        image: './foodImages/garlic-butter-shrimp.jpg',
        link: './recipes/garlic-butter-shrimp.html'
    },
    {
        name: 'Ginger Chicken Soup',
        image: './foodImages/ginger-chicken-soup.jpg',
        link: './recipes/ginger-chicken-soup.html'
    },
    {
        name: 'Jalapeno Chicken',
        image: './foodImages/jalapeno-chicken.jpg',
        link: './recipes/jalapeno-chicken.html'
    },
    {
        name: 'Korean Garlic Bread',
        image: './foodImages/korean-garlic-bread.jpg',
        link: './recipes/korean-garlic-bread.html'
    },
    {
        name: 'Korean Short Ribs',
        image: './foodImages/korean-short-ribs.jpg',
        link: './recipes/korean-short-ribs.html'
    },
    {
        name: 'Lemon Chicken',
        image: './foodImages/lemon-chicken.jpg',
        link: './recipes/lemon-chicken.html'
    },
    {
        name: 'Lemon Garlic Chicken with Green Beans',
        image: './foodImages/lemon-garlic-chicken-with-green-beans.jpg',
        link: './recipes/lemon-garlic-chicken-with-green-beans.html'
    },
    {
        name: 'Mongolian Beef',
        image: './foodImages/mongolian-beef.jpg',
        link: './recipes/mongolian-beef.html'
    },
    {
        name: 'Orange Chicken',
        image: './foodImages/orange-chicken.jpg',
        link: './recipes/orange-chicken.html'
    },
    {
        name: 'Parmesan Meatballs',
        image: './foodImages/parmesan-meatballs.jpg',
        link: './recipes/parmesan-meatballs.html'
    },
    {
        name: 'Pork Lumpia',
        image: './foodImages/pork-lumpia.jpg',
        link: './recipes/pork-lumpia.html'
    },
    {
        name: 'Shoyu Ramen Broth',
        image: './foodImages/shoyu-ramen-broth.jpg',
        link: './recipes/shoyu-ramen-broth.html'
    },
    {
        name: 'Smoked Beef Short Ribs',
        image: './foodImages/smoked-beef-short-ribs.jpg',
        link: './recipes/smoked-beef-short-ribs.html'
    },
    {
        name: 'Tortilla Soup',
        image: './foodImages/tortilla-soup.jpg',
        link: './recipes/tortilla-soup.html'
    },
    {
        name: 'Vegetable Tempura',
        image: './foodImages/vegetable-tempura.jpg',
        link: './recipes/vegetable-tempura.html'
    },
    {
        name: 'Wonton Soup',
        image: './foodImages/wonton-soup.jpg',
        link: './recipes/wonton-soup.html'
    },
];
let series = 1;
let randomNumber = Math.random();

// Grabs a random food item and diplays it on the homepage.
function randomFood() {
    let foodIndex = Math.floor(randomNumber * food.length);
    document.getElementById(`text` + `${series}`).textContent = food[foodIndex].name;
    document.getElementById(`image` + `${series}`).src = food[foodIndex].image;
    document.getElementById(`link` + `${series}`).href = food[foodIndex].link;
    food.splice(foodIndex, 1);
    series++;
}

// Ideally brightens up my girlfriends day with a random quote.
function randomQuote() {
    let quotes = [`Let's get cookin!`, `Classic Heather`, `Do you have a lazy eye?`, `I don't give two wet farts!`, `Baby tree!`, `Scrumdiddlyumptious!`, `Mmm Mmm Good`, `More than good, it's gggreat!`, `Love you Heather :)`, `Food is love`, `We Feast!`];
    let quoteIndex = Math.floor(randomNumber * quotes.length);
    document.querySelector('.randomQuotes').textContent = quotes[quoteIndex];
}

for (i = 0; i < 4; i++) {
    randomFood();
}

randomQuote();
