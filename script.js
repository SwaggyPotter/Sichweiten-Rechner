let lineList = document.getElementById('undergroundLine')
let choosenLineCounter = 0;
let stationChooser = document.getElementById('stSelector')
let choosenSpeed
let trackspeed
let lineData
let groupSelector = document.getElementById('GrpSelector')
let setableSpeed = document.getElementById('speedRange')

/*Event listener*/
/**
 * Eventlistener zur auswahl der U-Bahn linie
 */
let undergroundLine = document.getElementById('undergroundLine')
undergroundLine.addEventListener('click', () => { chooseLine() }, false)
/**
 * Ändert bei auswahl der Arbeitsgruppe die Räumzeit
 */
groupSelector.addEventListener('click', () => {
    if (groupSelector.value == 'AG') {
        document.getElementById('CTSelector').innerHTML = `
            <option value="0">Räumzeit wählen</option>
            <option value="10">10s</option>
            <option value="20">20s</option>`
    }
    else if (groupSelector.value == 'KG') {
        document.getElementById('CTSelector').innerHTML = `
            <option value="0">Räumzeit wählen</option>
            <option value="7">7s</option>
            <option value="10">10s</option>
            <option value="15">15s</option>
            <option value="20">20s</option>
        `
    }
}, false)


/**
 * Lädt die Banhöfe in kürzeln je nach ausgewählter linie
 */
stationChooser.addEventListener('click', () => {
    if (lineList.value == 'U1') {
        lineData = u1[`${stSelector.value}`]
    }
    if (lineList.value == 'U2') {
        lineData = u2[`${stSelector.value}`]
    }
    if (lineList.value == 'U3') {
        lineData = u3[`${stSelector.value}`]
    }
    if (lineList.value == 'U4') {
        lineData = u4[`${stSelector.value}`]
    }
    if (lineList.value == 'U5') {
        lineData = u5[`${stSelector.value}`]
    }
    if (lineList.value == 'U6') {
        lineData = u6[`${stSelector.value}`]
    }
    if (lineList.value == 'U7') {
        lineData = u7[`${stSelector.value}`]
    }
    if (lineList.value == 'U8') {
        lineData = u8[`${stSelector.value}`]
    }
    if (lineList.value == 'U9') {
        lineData = u9[`${stSelector.value}`]
    }
}, false)


/**
 * Lädt anhand der Daten die Erforderliche Sichtweite
 */
function calcView() {
    let group = document.getElementById('GrpSelector').value
    let time = document.getElementById('CTSelector').value
    let track = document.getElementById('trSelector').value
    let gradient = lineData[track]
    let viewCode = group + gradient + time
    trackspeed = lineData['GES']
    let viewPointPosition = speed.indexOf(Number(trackspeed))
    let view = views[viewCode][viewPointPosition]
    document.getElementById('viewPoint').innerText = `Die erforderliche Sichtweite beträgt: ${view}m`
    document.getElementById('speedContainer').style.display = 'flex'
    setableSpeed = document.getElementById('speedRange')
}


/**
 * Lädt die Bahnhof namen auf der Strecke
 */
function chooseLine() {
    if (lineList.value == 'U1') {
        loadUndergroundLine(u1Names)
    }
    if (lineList.value == 'U2') {
        loadUndergroundLine(u2Names)
    }
    if (lineList.value == 'U3') {
        loadUndergroundLine(u3Names)
    }
    if (lineList.value == 'U4') {
        loadUndergroundLine(u4Names)
    }
    if (lineList.value == 'U5') {
        loadUndergroundLine(u5Names)
    }
    if (lineList.value == 'U6') {
        loadUndergroundLine(u6Names)
    }
    if (lineList.value == 'U7') {
        loadUndergroundLine(u7Names)
    }
    if (lineList.value == 'U8') {
        loadUndergroundLine(u8Names)
    }
    if (lineList.value == 'U9') {
        loadUndergroundLine(u9Names)
    }
}


/**
 * Füllt die Auswahl mit namen der Bahnhöfe 
 * @param {string} lineNames Linien Name U1,U2,U3.....
 */
function loadUndergroundLine(lineNames) {
    document.getElementById('stSelector').innerHTML = ''
    document.getElementById('stSelector').innerHTML += `<option value="0">Bahnhof wählen</option>`
    for (let i = 0; i < lineNames.length; i++) {
        const element = lineNames[i];
        document.getElementById('stSelector').innerHTML += `<option value="${lineNames[i]}">${lineNames[i]}</option>`
    }
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}