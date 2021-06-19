const selection = document.getElementById('seasonSelect');

const xmasList = [
    "Make a Gingerbread House",
    "U-Pick Christmas Tree",
    "Donate Presents to a Sponsored Family",
    "Go Caroling"
];

const winterList = [
    "Make Paper Snowflakes",
    "Make a Snowman",
    "Sip Hot Chocolate",
    "Go See a Movie"
];

const springList = [
    "Plant Flowers/Veg",
    "Play in the Rain",
    "Birding Day",
    "Kayaking"
];

const summerList = [
    "Swimming in Lake",
    "Go Fishing",
    "Pick Summer Produce",
    "Make Homemade Lemonade"
];

const fallList = [
    "Hay Ride",
    "Make Apple Cider",
    "Watch a Scary Movie",
    "U-Pick Pumpkins"
];

function addListItems(season, list, seasonClass) {
    if (selection.value === season) {
        list.forEach((item)=> {
            let div = document.createElement('div');
            div.innerHTML = item;
            div.classList = seasonClass;
            document.getElementById('newItems').appendChild(div);
        });
    }
}

selection.addEventListener('change', (event) => {
    document.getElementById('newItems').innerHTML = '';
    addListItems('xmas', xmasList, 'xmasClass');
    addListItems('winter', winterList, 'winterClass');
    addListItems('spring', springList, 'springClass');
    addListItems('summer', summerList, 'summerClass');
    addListItems('fall', fallList, 'winterClass');
});

