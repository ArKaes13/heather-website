let foodImage = ['./images/butter-chicken.jpg', './images/shoyu-ramen-broth.jpg', './images/chicken-katsu.jpg', './images/chicken-shawarma.jpg', './images/creamy-garlic-pork-chops.jpg', './images/creamy-parmesan-chicken.jpg', './images/flat-iron-steak-with-gochujang-marinade.jpg', './images/garlic-butter-pork-chops.jpg', './images/garlic-butter-shrimp.jpg', './images/jalapeno-chicken.jpg', './images/korean-short-ribs.jpg', './images/lemon-chicken.jpg', './images/mongolian-beef.jpg', './images/orange-chicken.jpg', './images/parmesan-meatballs.jpg', './images/pork-lumpia.jpg', './images/smoked-beef-short-ribs.jpg', './images/tortilla-soup.jpg', './images/vegetable-tempura.jpg', './images/wonton-soup.jpg'];
let foodName = ['Butter Chicken', 'Shoyu Ramen Broth', 'Chicken Katsu', 'Chicken Shawarma', 'Creamy Garlic Pork Chops', 'Creamy Parmesan Chicken', 'Flat Iron Steak with Gochujang Marinade', 'Garlic Butter Pork Chops', 'Garlic Butter Shrimp', 'Jalapeno Chicken', 'Korean Short Ribs', 'Lemon Chicken', 'Mongolian Beef', 'Orange Chicken', 'Parmesan Meatballs', 'Pork Lumpia', 'Smoked Beef Short Ribs', 'Tortilla Soup', 'Vegetable Tempura', 'Wonton Soup'];
let foodLink = ['./recipes/butter-chicken.html', './recipes/shoyu-ramen-broth.html', './recipes/chicken-katsu.html', './recipes/chicken-shawarma.html', './recipes/creamy-garlic-pork-chops.html', './recipes/creamy-parmesan-chicken.html', './recipes/flat-iron-steak-with-gochujang-marinade.html', './recipes/garlic-butter-pork-chops.html', './recipes/garlic-butter-shrimp.html', './recipes/jalapeno-chicken.html', './recipes/korean-short-ribs.html', './recipes/lemon-chicken.html', './recipes/mongolian-beef.html', './recipes/orange-chicken.html', './recipes/parmesan-meatballs.html', './recipes/pork-lumpia.html', './recipes/smoked-beef-short-ribs.html', './recipes/tortilla-soup.html', './recipes/vegetable-tempura.html', './recipes/wonton-soup.html'];
let series = 1;
let randomNumber = Math.random();

function randomFood() {
    var foodNumber = Math.floor(randomNumber * foodImage.length);
    document.getElementById(`image` + `${series}`).src = foodImage[foodNumber];
    document.getElementById(`text` + `${series}`).textContent = foodName[foodNumber];
    document.getElementById(`link` + `${series}`).href = foodLink[foodNumber];
    foodImage.splice(foodNumber, 1);
    foodName.splice(foodNumber, 1);
    foodLink.splice(foodNumber, 1);
    series++;
}

let quotes = [`Let's get cookin!`, `Classic Heather`, `Is the juice worth the squeeze?`, `Scrumdiddlyumptious!`, `Stickiest of the Icky`, `Mmm Mmm Good`, `More than good, it's gggreat!`, `Love you Heather :)`, `We Feast!`, `Food is love`]

function randomQuote() {
    var quoteNumber = Math.floor(randomNumber * quotes.length);
    document.querySelector('.randomQuotes').textContent = quotes[quoteNumber];
}

for (i = 0; i < 4; i++) {
    randomFood();
}

randomQuote();
