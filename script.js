let lineList = document.getElementById('undergroundLine')
let choosenLineCounter = 0;
let stationChooser = document.getElementById('station')
let choosenSpeed
let trackspeed
let lineData
let groupSelector = document.getElementById('GrpSelector')
let setableSpeed = document.getElementById('speedRange')
let lineDropDownBtn = document.getElementById('lineDropDownBtn')
let group
let time
let track
let stationBtn = document.getElementById('stationDropdownBtn')
let choosedUndergroundLine

/**
 * Lädt die Banhöfe in kürzeln je nach ausgewählter linie
 */
function stationChoosed(station) {
    stationBtn.innerText = station
    if (choosedUndergroundLine == 'U1') {
        lineData = u1[station]
    }
    if (choosedUndergroundLine == 'U2') {
        lineData = u2[station]
    }
    if (choosedUndergroundLine == 'U3') {
        lineData = u3[station]
    }
    if (choosedUndergroundLine == 'U4') {
        lineData = u4[station]
    }
    if (choosedUndergroundLine == 'U5') {
        lineData = u5[station]
    }
    if (choosedUndergroundLine == 'U6') {
        lineData = u6[station]
    }
    if (choosedUndergroundLine == 'U7') {
        lineData = u7[station]
    }
    if (choosedUndergroundLine == 'U8') {
        lineData = u8[station]
    }
    if (choosedUndergroundLine == 'U9') {
        lineData = u9[station]
    }
}


/**
 * Ändert den Text der Gruppenauswahl. Die Variable mit der Gruppenart wird ein Wert mit 
 * KG(Kleingruppe) oder AG(Arbeitsgruppe) zugewiesen.
 * @param {string} chGroup Gruppenart (Klein-, oder Arbeitsgruppe)
 */
function chooseGroup(chGroup) {
    if (chGroup == "KG") {
        document.getElementById('groupChoosen').innerText = "Kleingruppe"
    }
    else if (chGroup == "AG") {
        document.getElementById('groupChoosen').innerText = "Arbeitsgruppe"
    }
    group = chGroup
}


/**
 * Ändert das ausgewählte Gleis zu Gleis eins oder zwei
 * @param {string} x Das ausgewählte Gleis als String
 */
function chooseTrack(x) {
    if (x == "GL1") {
        document.getElementById('trackBTN').innerText = "Gleis 1"
    }
    else if (x == "GL2") {
        document.getElementById('trackBTN').innerText = "Gleis 2"
    }
    track = x
}


/**
 * Lädt anhand der Daten die Erforderliche Sichtweite
 */
function calcView() {
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
 * Lädt die Bahnhofnamen auf der Strecke
 */
function chooseLine(line) {
    lineDropDownBtn.innerText = line
    choosedUndergroundLine = line
    if (line == 'U1') {
        loadUndergroundLine(u1Names)
    }
    if (line == 'U2') {
        loadUndergroundLine(u2Names)
    }
    if (line == 'U3') {
        loadUndergroundLine(u3Names)
    }
    if (line == 'U4') {
        loadUndergroundLine(u4Names)
    }
    if (line == 'U5') {
        loadUndergroundLine(u5Names)
    }
    if (line == 'U6') {
        loadUndergroundLine(u6Names)
    }
    if (line == 'U7') {
        loadUndergroundLine(u7Names)
    }
    if (line == 'U8') {
        loadUndergroundLine(u8Names)
    }
    if (line == 'U9') {
        loadUndergroundLine(u9Names)
    }
}


/**
 * Füllt die Auswahl mit namen der Bahnhöfe 
 * @param {string} lineNames Linien Name U1,U2,U3.....
 */
function loadUndergroundLine(lineNames) {
    document.getElementById('station').innerHTML = ''
    for (let i = 0; i < lineNames.length; i++) {
        const element = lineNames[i];
        document.getElementById('station').innerHTML += `<p onclick="stationChoosed('${lineNames[i]}')">${lineNames[i]}</p>`
    }
}


/**
 * Ändert die Räumzeiten basierend auf der Gruppe.
 * @param {string} gr Gruppenart (Klein-, Arbeitsgruppe)
 */
function chooseGroup(gr) {
    if (gr == 'AG') {
        group = 'AG'
        document.getElementById('groupChoosen').innerText = `Arbeitsgruppe`
        document.getElementById('timeChoose').innerHTML = `
        <p onclick="timeChoosed(10)">10s</p>
        <p onclick="timeChoosed(20)">20s</p>`
    }
    else if (gr == 'KG') {
        group = 'KG'
        document.getElementById('groupChoosen').innerText = `Kleingruppe`
        document.getElementById('timeChoose').innerHTML = `
        <p onclick="timeChoosed(7)">7s</p>
        <p onclick="timeChoosed(10)">10s</p>
        <p onclick="timeChoosed(15)">15s</p>
        <p onclick="timeChoosed(20)">20s</p>
        `
    }
}

/**
 * Funktion zum ändern der Räumzeit
 * @param {number} seconds
 */
function timeChoosed(seconds) {
    time = seconds
    document.getElementById('chooseTime').innerText = `Räumzeit: ${seconds}sekunden`
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openDropDownLine() {
    document.getElementById("lineChoose").classList.toggle("show");
}


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
function openDropDownStation() {
    document.getElementById("station").classList.toggle("show");
}


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
function openDropDownTrack() {
    document.getElementById("track").classList.toggle("show");
}


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
function openDropDownGroup() {
    document.getElementById("group").classList.toggle("show");
}


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
function openDropDownTime() {
    document.getElementById("timeChoose").classList.toggle("show");
}


/**
 * Überprüft ob außerhalb des Dropdown menüs geklickt wurde um es zu schließen
 * @param {eventlistener} event 
 */
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}