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
const table = document.getElementById('table');
const tableBody = document.getElementById('table-body');

//  "Activity Suggestions" section 
const hint = document.getElementById('hint');


//-------------------------------------------------------------------
//      REUSABLE CLASS CHANGE FUNCTIONS
//-------------------------------------------------------------------

function addClass(element, season) {
    element.classList.add(season);
}

function removeClass(element, season1, season2, season3, season4) {
        element.classList.remove(season1);
        element.classList.remove(season2);
        element.classList.remove(season3);
        element.classList.remove(season4);
}

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

if (seasonSelect.value === '' && screen.width > 1200) {
    bigTitle("Seasonal Bucket List");
}

function changeHeaderDisplay(season) {
    h1.innerHTML = season;
    bigTitle(season + " Bucket List");
}

//  Change Header Function
function changeHeader() {
    if (selection.value === 'xmas') {
        changeHeaderDisplay('Christmas');
        ifXmas.innerHTML = xmasCountdown();
        addClass(header, 'xmas');
        removeClass(header, 'winter', 'spring', 'summer', 'fall');

    } else if (selection.value === 'winter') {
        changeHeaderDisplay('Winter');
        addClass(header, 'winter');
        removeClass(header, 'xmas', 'spring', 'summer', 'fall');

    } else if (selection.value === 'spring') {
        changeHeaderDisplay('Spring');
        addClass(header, 'spring');
        removeClass(header, 'xmas', 'winter', 'summer', 'fall');

    } else if (selection.value === 'summer') {
        changeHeaderDisplay('Summer');
        addClass(header, 'summer');
        removeClass(header, 'xmas', 'winter', 'spring', 'fall');

    } else if (selection.value === 'fall') {
        changeHeaderDisplay('Fall');
        addClass(header, 'fall');
        removeClass(header, 'xmas', 'winter', 'spring', 'summer');

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

function applyClassToBucketList() {
    if (selection.value === 'xmas') {
        addClass(table, 'xmas');
        removeClass(table, 'winter', 'spring', 'summer', 'fall');

    } else if (selection.value === 'winter') {
        addClass(table, 'winter');
        removeClass(table, 'xmas', 'spring', 'summer', 'fall');

    } else if (selection.value === 'spring') {
        addClass(table, 'spring');
        removeClass(table, 'xmas', 'winter', 'summer', 'fall');

    } else if (selection.value === 'summer') {
        addClass(table, 'summer');
        removeClass(table, 'xmas', 'winter', 'spring', 'fall');

    } else if (selection.value === 'fall') {
        addClass(table, 'fall');
        removeClass(table, 'xmas', 'winter', 'spring', 'summer');

    } else {
        return; 
    }
}


//-------------------------------------------------------------------
//      ADD A BUCKET LIST ITEM
//-------------------------------------------------------------------

function createListItem(textSource) {
    let newRow = document.createElement('tr');
    newRow.classList = "bucketList";
    
    let newActivity = document.createElement('td');
    newActivity.innerHTML = textSource;
    newActivity.contentEditable = true;

    let newCheckbox = document.createElement('td');
    const checkInput = document.createElement('input');
    checkInput.type = "checkbox";

    let newRemoveButton = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.classList = "removeButton noPrint"
    removeButton.innerHTML = "x";

    newCheckbox.appendChild(checkInput);
    newRemoveButton.appendChild(removeButton);

    newRow.append(newActivity);
    newRow.append(newCheckbox);
    newRow.append(newRemoveButton);

    document.getElementById("table-body").appendChild(newRow);
}

activityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createListItem(activityInput.value);   
    activityInput.value = '';
});


//-------------------------------------------------------------------
//      SELECT A SEASON DROPDOWN
//-------------------------------------------------------------------

function generateSeasonalActivities(season, list, seasonClass) {
    if (selection.value === season) {
        list.forEach((item)=> {
            let div = document.createElement('div');
            div.innerHTML = item;
            div.classList = "listItems " + seasonClass;
            document.getElementById('newItems').appendChild(div);
        });
    }
    
}

function generateNonSeasonalActivities() {
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
    generateSeasonalActivities('xmas', xmasList, 'xmasClass');
    generateSeasonalActivities('winter', winterList, 'winterClass');
    generateSeasonalActivities('spring', springList, 'springClass');
    generateSeasonalActivities('summer', summerList, 'summerClass');
    generateSeasonalActivities('fall', fallList, 'fallClass'); 
    generateNonSeasonalActivities();
    if (document.getElementById('seasonSelect').value === 'xmas') {
        ifXmas.display = 'block';
        ifXmas.style.backgroundColor = '#ffffffe8';
    } else {
        ifXmas.display = 'none';
        ifXmas.innerHTML = '';
        ifXmas.style.backgroundColor = 'transparent';
    }

    addSuggestedActivity();
    
    applyClassToBucketList();
    hint.textContent = 'Click to add to your list';
});


// Allows user to click and add to list
function addSuggestedActivity() {
    const listItem = document.getElementsByClassName('listItems');

    for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener('click', ()=> {
            createListItem(listItem[i].innerHTML);
            listItem[i].innerHTML = 'Added!';
        });
    }
}

//-------------------------------------------------------------------
//      REMOVE BUTTONS
//-------------------------------------------------------------------

tableBody.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode.parentNode;
        const userList = li.parentNode;
        
        if (button.textContent === 'x') {
            userList.removeChild(li);  
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