import { xmasList } from "./xmas.js";
import { winterList } from "./winter.js";
import { springList } from "./spring.js";
import { summerList } from "./summer.js"
import { fallList } from "./fall.js";

const selection = document.getElementById('seasonSelect');

function changeHeader () {
    const header = document.getElementById('header');
    if (selection.value === 'xmas') {
        header.innerHTML = "Winter Bucket List (with Christmas)"
    } else if (selection.value === 'winter') {
        header.innerHTML = "Winter Bucket List"
    } else if (selection.value === 'spring') {
        header.innerHTML = "Spring Bucket List"
    } else if (selection.value === 'summer') {
        header.innerHTML = "Summer Bucket List"
    } else if (selection.value === 'fall') {
        header.innerHTML = "Fall Bucket List"
    } else {
        return; 
    }
}

function addListItems(season, list, seasonClass) {
    if (selection.value === season) {
        list.forEach((item)=> {
            let div = document.createElement('div');
            div.innerHTML = item;
            div.classList = "listItems " + seasonClass;
            document.getElementById('newItems').appendChild(div);
        });
    }
}

selection.addEventListener('change', (event) => {
    document.getElementById('newItems').innerHTML = '';
    changeHeader();
    addListItems('xmas', xmasList, 'xmasClass');
    addListItems('winter', winterList, 'winterClass');
    addListItems('spring', springList, 'springClass');
    addListItems('summer', summerList, 'summerClass');
    addListItems('fall', fallList, 'fallClass');
});

