let foodImage = ['./foodImages/butter-chicken.jpg', './foodImages/shoyu-ramen-broth.jpg', './foodImages/chicken-katsu.jpg', './foodImages/chicken-shawarma.jpg', './foodImages/coconut-lime-chicken.jpg', './foodImages/creamy-garlic-pork-chops.jpg', './foodImages/creamy-parmesan-chicken.jpg', './foodImages/flat-iron-steak-with-gochujang-marinade.jpg', './foodImages/garlic-baked-chicken.jpg', './foodImages/garlic-butter-pork-chops.jpg', './foodImages/garlic-butter-shrimp.jpg', './foodImages/ginger-chicken-soup.jpg', './foodImages/jalapeno-chicken.jpg', './foodImages/korean-garlic-bread.jpg', './foodImages/korean-short-ribs.jpg', './foodImages/lemon-chicken.jpg', './foodImages/mexican-hot-carrots.jpg', './foodImages/mongolian-beef.jpg', './foodImages/orange-chicken.jpg', './foodImages/parmesan-meatballs.jpg', './foodImages/pork-lumpia.jpg', './foodImages/smoked-beef-short-ribs.jpg', './foodImages/tortilla-soup.jpg', './foodImages/vegetable-tempura.jpg', './foodImages/wonton-soup.jpg'];
let foodName = ['Butter Chicken', 'Shoyu Ramen Broth', 'Chicken Katsu', 'Chicken Shawarma', 'Coconut Lime Chicken', 'Creamy Garlic Pork Chops', 'Creamy Parmesan Chicken', 'Flat Iron Steak with Gochujang', 'Garlic Butter Baked Chicken Breast', 'Garlic Butter Pork Chops', 'Garlic Butter Shrimp', 'Ginger Chicken Soup', 'Jalapeno Chicken', 'Korean Garlic Bread', 'Korean Short Ribs', 'Lemon Chicken', 'Mexican Hot Carrots', 'Mongolian Beef', 'Orange Chicken', 'Parmesan Meatballs', 'Pork Lumpia', 'Smoked Beef Short Ribs', 'Tortilla Soup', 'Vegetable Tempura', 'Wonton Soup'];
let foodLink = ['./recipes/butter-chicken.html', './recipes/shoyu-ramen-broth.html', './recipes/chicken-katsu.html', './recipes/chicken-shawarma.html', './recipes/coconut-lime-chicken.html', './recipes/creamy-garlic-pork-chops.html', './recipes/creamy-parmesan-chicken.html', './recipes/flat-iron-steak-with-gochujang-marinade.html', './recipes/garlic-baked-chicken.html', './recipes/garlic-butter-pork-chops.html', './recipes/garlic-butter-shrimp.html', './recipes/ginger-chicken-soup.html', './recipes/jalapeno-chicken.html', './recipes/korean-garlic-bread.html', './recipes/korean-short-ribs.html', './recipes/lemon-chicken.html', './recipes/mexican-hot-carrots.html', './recipes/mongolian-beef.html', './recipes/orange-chicken.html', './recipes/parmesan-meatballs.html', './recipes/pork-lumpia.html', './recipes/smoked-beef-short-ribs.html', './recipes/tortilla-soup.html', './recipes/vegetable-tempura.html', './recipes/wonton-soup.html'];
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

let quotes = [`Let's get cookin!`, `Classic Heather`, `Is the juice worth the squeeze?`, `Scrumdiddlyumptious!`, `Mmm Mmm Good`, `More than good, it's gggreat!`, `Love you Heather :)`, `Food is love`, `We Feast!`];

function randomQuote() {
    var quoteNumber = Math.floor(randomNumber * quotes.length);
    document.querySelector('.randomQuotes').textContent = quotes[quoteNumber];
}

for (i = 0; i < 4; i++) {
    randomFood();
}

randomQuote();
