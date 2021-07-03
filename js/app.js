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
//      GLOBAL VARIABLES
//-------------------------------------------------------------------

//  If "Christmas" selected
const ifXmas = document.getElementById('ifXmas');

//  Title in header
const h1 = document.getElementById('h1');
const header = document.getElementById('header');
const title = document.getElementById('title');
const largeScreenTitle = document.getElementById('lg-title');

//  Accordian option 1: Select a season
const selection = document.getElementById('seasonSelect');

//  Accordian option 2: Form to change title
const titleForm = document.getElementById('addTitle');
const titleInput = titleForm.querySelector('input');

//  Accordian option 3: Form to add an activity
const activityForm = document.getElementById('addActivity');
const activityInput = activityForm.querySelector('input');

//  Accordian option 4: API with random activity
const randomActivity = document.getElementById('randomActivity');
const randomButton = document.getElementById('randomButton');
const randomAddToListButton = document.getElementById('randomAddToListButton');

//  Bucket list header, default "My Bucket List"
const listHeader = document.getElementById('listHeader');

//  Bucket list area
const userList = document.getElementById('userList');

//  "Activity Suggestions" section 
const hint = document.getElementById('hint');


//-------------------------------------------------------------------
//      CHANGE THE H1 WITH SELECTION INPUT
//-------------------------------------------------------------------

//  If Christmas, add countdown clock
function xmasCountdown() {
    const today = new Date();
    const daysUntilXMas = new Date(2021, 11, 25, 0, 0, 0, 0); // Set day and month
    daysUntilXMas.setFullYear(today.getFullYear()); // Set year to this year
    const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
    let daysLeft = (daysUntilXMas.getTime() - today.getTime()) / msPerDay;
    daysLeft = Math.round(daysLeft); //returns days left in the year
    return daysLeft + " Days Until Christmas!";
}

//  If screen is large, change header display
function bigTitle(text) {
    if (screen.width > 1200) {
        title.style.display = 'none';
        largeScreenTitle.innerHTML = text;
    }
}

function changeHeaderDisplay(season, imgSource) {
    h1.innerHTML = season;
    header.style.backgroundImage = "url('../images/" + imgSource + ".png')";
    bigTitle(season + " Bucket List");
}

//  Change Header Function
function changeHeader() {
    if (selection.value === 'xmas') {
        changeHeaderDisplay("Christmas", "xmas");
        ifXmas.innerHTML = xmasCountdown();
    } else if (selection.value === 'winter') {
        changeHeaderDisplay("Winter", "winter");
    } else if (selection.value === 'spring') {
        changeHeaderDisplay("Spring", "spring");
    } else if (selection.value === 'summer') {
        changeHeaderDisplay("Summer", "summer");
    } else if (selection.value === 'fall') {
        changeHeaderDisplay("Fall", "fall");
    } else {
        return; 
    }
}

//-------------------------------------------------------------------
//      CHANGE LIST TITLE BY USER INPUT
//-------------------------------------------------------------------

titleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    listHeader.innerHTML = titleInput.value;
    titleInput.value = '';
});

//-------------------------------------------------------------------
//      CHANGE BUCKET LIST STYLES
//-------------------------------------------------------------------

function addClass(season) {
    document.querySelectorAll('.bucketList').forEach(elem => {
        elem.classList.add(season);
    }) 
}

function removeClass(season1, season2, season3, season4) {
    document.querySelectorAll('.bucketList').forEach(elem => {
        elem.classList.remove(season1);
        elem.classList.remove(season2);
        elem.classList.remove(season3);
        elem.classList.remove(season4);
    }) 
}

function applyClassToBucketList() {
    if (selection.value === 'xmas') {
        addClass('xmas');
        removeClass('winter', 'spring', 'summer', 'fall');
    } else if (selection.value === 'winter') {
        addClass('winter');
        removeClass('xmas', 'spring', 'summer', 'fall');
    } else if (selection.value === 'spring') {
        addClass('spring');
        removeClass('xmas', 'winter', 'summer', 'fall');
    } else if (selection.value === 'summer') {
        addClass('summer');
        removeClass('xmas', 'winter', 'spring', 'fall');
    } else if (selection.value === 'fall') {
        addClass('fall');
        addClass('summer');
        removeClass('xmas', 'winter', 'spring', 'summer');
    } else {
        return; 
    }
}

//-------------------------------------------------------------------
//      ADD A BUCKET LIST ITEM
//-------------------------------------------------------------------

function createListItem(textSource) {
    const listDiv = document.createElement('div');
    listDiv.classList = "bucketList";

    const span = document.createElement('span');
    span.innerText = textSource;
    listDiv.appendChild(span);

    const checkDiv = document.createElement('div');
    checkDiv.classList = "completedCheckboxDiv";

    const completedLabel = document.createElement('label');
    completedLabel.innerText = "Completed";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    const buttonDiv = document.createElement('div');
    buttonDiv.classList = "listButtons";

    const editButton = document.createElement('button');
    editButton.classList = "editButton";
    editButton.innerText = "Edit";

    const removeButton = document.createElement('button');
    removeButton.classList = "removeButton"
    removeButton.innerText = "Remove";

    document.getElementById('userList').appendChild(listDiv);
    
    listDiv.appendChild(checkDiv);
        checkDiv.appendChild(completedLabel);
        checkDiv.appendChild(checkbox);
    
    listDiv.appendChild(buttonDiv);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(removeButton);
    applyClassToBucketList();
}

activityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createListItem(activityInput.value);   
    activityInput.value = '';
});


//-------------------------------------------------------------------
//      SELECT A SEASON DROPDOWN
//-------------------------------------------------------------------

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
    if (document.getElementById('seasonSelect').value === 'xmas') {
        ifXmas.display = 'block';
        ifXmas.style.backgroundColor = '#ffffffe8';
    } else {
        ifXmas.display = 'none';
        ifXmas.innerHTML = '';
        ifXmas.style.backgroundColor = 'transparent';
    }
    const listItem = document.getElementsByClassName('listItems');
    // Allows user to click and add to list
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener('click', ()=> {
            createListItem(listItem[i].innerHTML);
        });
    }
    applyClassToBucketList();
    hint.innerHTML = '';
});

//-------------------------------------------------------------------
//      EDIT AND REMOVE BUTTONS
//-------------------------------------------------------------------

userList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode.parentNode;
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
            button.textContent = 'Save';
        } else if (button.textContent === 'Save') {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'Edit';
        }
    }
});


//-------------------------------------------------------------------
//      API: RANDOM BUTTON
//-------------------------------------------------------------------

function requestListener() {
    const data = JSON.parse(this.responseText);
    console.log(data);
}

function requestError(error) {
    console.log('Fetch Error :-S', error);
}

const activityRequest = new XMLHttpRequest();
activityRequest.onload = requestListener;
activityRequest.onerror = requestError;
activityRequest.open('GET', 'https://www.boredapi.com/api/activity?type=recreational', true);
activityRequest.send();

randomButton.addEventListener('click', ()=> {
    fetch('https://www.boredapi.com/api/activity?type=recreational')
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            console.log(data.file);
            randomActivity.innerHTML = data.activity;
        });
        }
    )
    .catch(function(error) {
        console.log('Fetch Error :-S', error);
    });
});

randomAddToListButton.addEventListener('click', () => {
    createListItem(randomActivity.textContent); 
});