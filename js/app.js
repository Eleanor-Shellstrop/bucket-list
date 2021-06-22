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

//  If Christmas, add countdown clock
function xmasCountdown() {
    const today = new Date();
    const daysUntilXMas = new Date(2021, 11, 25, 23, 0, 0, 0); // Set day and month
    daysUntilXMas.setFullYear(today.getFullYear()); // Set year to this year
    const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
    let daysLeft = (daysUntilXMas.getTime() - today.getTime()) / msPerDay;
    daysLeft = Math.round(daysLeft); //returns days left in the year
    return daysLeft + " Days Until Christmas!";
}

function changeHeader() {
    const h1 = document.getElementById('h1');
    const header = document.getElementById('header');
    if (selection.value === 'xmas') {
        h1.innerHTML = "Christmas Bucket List";
        const ifXmas = document.getElementById('ifXmas');
        ifXmas.innerHTML = xmasCountdown();
        header.style.backgroundImage = "url('../images/xmas.png')";
    } else if (selection.value === 'winter') {
        h1.innerHTML = "Winter Bucket List";
        header.style.backgroundImage = "url('../images/winter.png')";
        ifXmas.innerHTML = '';
    } else if (selection.value === 'spring') {
        h1.innerHTML = "Spring Bucket List";
        header.style.backgroundImage = "url('../images/spring.png')";
        ifXmas.innerHTML = '';
    } else if (selection.value === 'summer') {
        h1.innerHTML = "Summer Bucket List";
        header.style.backgroundImage = "url('../images/summer.png')";
        ifXmas.innerHTML = '';
    } else if (selection.value === 'fall') {
        h1.innerHTML = "Fall Bucket List";
        header.style.backgroundImage = "url('../images/fall.png')";
        ifXmas.innerHTML = '';
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

function createListItem(textSource) {
    const listDiv = document.createElement('div');
    listDiv.classList = "bucketList";

    const span = document.createElement('span');
    span.innerText = textSource;
    listDiv.appendChild(span);

    const label = document.createElement('label');
    label.innerText = "Completed";

    const check = document.createElement('input');
    check.type = "checkbox";

    const editButton = document.createElement('button');
    editButton.innerText = "Edit";

    const removeButton = document.createElement('button');
    removeButton.innerText = "Remove";

    document.getElementById('userList').appendChild(listDiv);
    listDiv.appendChild(label);
    label.appendChild(check);
    listDiv.appendChild(editButton);
    listDiv.appendChild(removeButton);
}

    activityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createListItem(activityInput.value);   
        activityInput.value = '';
});



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

function addAnySeason() {
    activityAnySeason.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = item;
        div.classList = "listItems " +  "allSeasons";
        document.getElementById('newItems').appendChild(div);  
    });
}
        
selection.addEventListener('change', (e) => {
    document.getElementById('newItems').innerHTML = '';
    changeHeader();
    addListItems('xmas', xmasList, 'xmasClass');
    addListItems('winter', winterList, 'winterClass');
    addListItems('spring', springList, 'springClass');
    addListItems('summer', summerList, 'summerClass');
    addListItems('fall', fallList, 'fallClass'); 
    addAnySeason();
    
    const listItem = document.getElementsByClassName('listItems');

    // Allows user to click and add to list
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener('click', ()=> {
            createListItem(listItem[i].innerHTML);
        });
    }
});

//-------------------------------------------------------------------
//      EDIT AND REMOVE BUTTONS
//-------------------------------------------------------------------
const userList = document.getElementById('userList');

userList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const userList = li.parentNode;
        
        if (button.textContent === 'Remove') {
            userList.removeChild(li);  
        } else if (button.textContent === 'Edit') {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'save';
        } else if (button.textContent === 'save') {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'Edit';
        }
    }
});