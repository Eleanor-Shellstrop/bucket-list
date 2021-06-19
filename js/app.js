const summerList = [
    "Water balloon fight",
    "Picnic in the Park",
    "Pool Day",
    "U-Pick Produce at a Farm"
];

summerList.forEach((item)=> {
    let div = document.createElement('div');
    div.innerHTML = item;
    div.classList = 'listItems'
    document.getElementById('newItems').appendChild(div);
})