# heather-website

## Introduction
This is a project I made to help my girlfriend store and navigate her cooking recipes. Recipe websites are often flooded with ads and fluff, this is a no nonsense website that she can use to quickyly find her favorite recipes. Additionally, it has a 'lunch-decider' that will help determine what to have for lunch in our local area. 

She will be viewing exclusively on a small iPhone so that was the primary concern when thinking about design.

---

## Breakdown

### Homepage
The homepage features randomly generated quotes from an array to ideally get a smile out of the user. It also generates 4 randomly selected recipes and displays their images/names and provides a link to the relevant recipe card.

### Recipe Index
The index is a full collection of all the recipe images/names in alphabetical order. It can be easily scrolled through to find the desired recipe and when clicked on they will take you to the relevant recipe card.

### Recipe Cards
Each recipe card features a picture of the item and structured instructions/ingredients for making each item.

### Lunch Decider
The 'lunch-decider' takes parameters for whether you want to *Dine In* or not and what *Genre* you would prefer. It creates a new list based on preferences and returns a randomly selected image/name for the chosen restuarant. 

---

## What I Learned or Expanded on
- Iterate through arrays and objects.
- Create a random number based on array lengths.
- Add content to HTML elements using JS.
- Create/delete HTML elements using JS.
- CSS psuedo-classes.
- How to create a nice README :)

## Mistakes I made or problems I encountered
When I first created the site my knowledge of javascript was very limited. I included some internal JS to add the randomly selected recipes to the homepage. As a result of my ignorance I created 3 separate lists that I could iterate through but could have done the same by creating objects instead. I will leave the convoluted 'objects' in the code as a showcase of my learning process.

One of the randomly generated quotes was messing up the format of the webpage. I used the Chrome dev tools to inspect each element and compare to the pages that had the correct format. Everything was the same, except the width of the quote. I didn't realize that due to using `display: flex` with `flex wrap: wrap` that the smaller word wasn't large enough to push the other elements down to the correct format. I solved this by setting a width to the text.

On the homepage, I had an issue with some of the recipe names being too long and creating a second line. This second caused the column to shift down and created uneven columns. I solved this by setting the height to always accommodate for a second line.

When creating the form with the radio buttons, I simply wanted to change the color of the checked button. I used `accent-color` but this caused the browser to change the background color to black which was very off-putting. I went down a long rabbit hole for what I thought was a simple solution and learned all about browsers overriding settings and how it determined my color to be too high contrast to display on a white-ish background. I solved this by essentially removing the radio buttons and creating new ones with CSS.

The 'submit' button on the form was refreshing the webpage each time and this was not the functionality that I wanted. I discovered that I could replace it with a generic button but instead opted to add `onsubmit='return false'` to the form because I wanted to expand my knowledge on how to better work with forms.

---

## Thank you for your time :)