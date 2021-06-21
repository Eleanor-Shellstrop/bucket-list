//-------------------------------------------------------------------
//      IMPORTS
//-------------------------------------------------------------------

import { xmasList } from "./xmas.js";
import { winterList } from "./winter.js";
import { springList } from "./spring.js";
import { summerList } from "./summer.js"
import { fallList } from "./fall.js";
import { activityAnySeason } from "./anytime.js";

//-------------------------------------------------------------------
//      CHANGE THE H1 WITH SELECTION INPUT
//-------------------------------------------------------------------
function changeHeader () {
    const header = document.getElementById('header');
    if (selection.value === 'xmas') {
        header.innerHTML = "Christmas Bucket List"
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

//-------------------------------------------------------------------
//      CHANGE LIST TITLE BY USER INPUT
//-------------------------------------------------------------------

const titleForm = document.getElementById('addTitle');
const titleInput = titleForm.querySelector('input');
const listHeader = document.getElementById('listHeader');


titleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    listHeader.innerHTML = titleInput.value;
    titleInput.value = '';
});

//-------------------------------------------------------------------
//      ADD A BUCKET LIST ITEM
//-------------------------------------------------------------------

const activityForm = document.getElementById('addActivity');
const activityInput = activityForm.querySelector('input');

activityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const listDiv = document.createElement('div');
    listDiv.classList = "bucketList";
    listDiv.innerText = activityInput.value;
    document.getElementById('userList').appendChild(listDiv);
    activityInput.value = '';
})

//-------------------------------------------------------------------
//      SELECT A SEASON DROPDOWN
//-------------------------------------------------------------------

const selection = document.getElementById('seasonSelect');

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

function addAnySeason () {
    activityAnySeason.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = item;
        div.classList = "listItems " +  "allSeasons";
        document.getElementById('newItems').appendChild(div);  
    });
}
        
selection.addEventListener('change', (event) => {
    document.getElementById('newItems').innerHTML = '';
    changeHeader();
    addListItems('xmas', xmasList, 'xmasClass');
    addListItems('winter', winterList, 'winterClass');
    addListItems('spring', springList, 'springClass');
    addListItems('summer', summerList, 'summerClass');
    addListItems('fall', fallList, 'fallClass'); 
    addAnySeason();
});