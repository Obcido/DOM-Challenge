window.onload = function () {
    // Lyssna efter händelser
    let elements = document.getElementsByClassName('team-member');
    let titles = document.getElementsByClassName('team-title');

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', effectOn, false);
        elements[i].addEventListener('mouseout', effectOff, false);
        titles[i].addEventListener('click', editTitle, false);
    }



}
var editTitle = function (e) {
    // Ändra "team-title"
    let newTitle = prompt('Ny titel: ', e.currentTarget.innerText);
    e.currentTarget.innerText = newTitle;
};

function effectOn(id) {
    // Rita en ram runt personen, kanske lite drop shadow?
    id.currentTarget.style.setProperty('-webkit-filter', 'drop-shadow(2px 4px 4px #333)');

}

function effectOff(id) {
    // Stäng av effekten när musen inte längre är ovanför personen
    id.currentTarget.style.removeProperty('-webkit-filter', 'drop-shadow(2px 3px 3px #333)');
}
