import { xmasList } from "./xmas";
import { winterList } from "./winter";
import { springList } from "./spring";
import { summerList } from "./summer"
import { fallList } from "./fall";

const selection = document.getElementById('seasonSelect');

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

