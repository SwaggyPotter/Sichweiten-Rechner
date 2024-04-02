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
let movableSpeedBar = document.getElementById('speedRange')
let choosedUndergroundLine


/**
 * Eventlistener für den Regler für das Tempo (Click Event)
 */
movableSpeedBar.addEventListener('click', () => {
    changeValueToSpeed(movableSpeedBar.value)
})


/**
 * Eventlistener für den Regler für das Tempo (Touch Event)
 */
movableSpeedBar.addEventListener('touchend', () => {
    changeValueToSpeed(movableSpeedBar.value)
})


/**
 * Basierend auf der ausgewählten Prozentzahl beim Regler wird das entsprechende Tempo gewählt
 * und die Sichtweite neu errechnet
 * @param {number} percent 
 */
function changeValueToSpeed(percent) {
    if (percent == 100) {
        trackspeed = '70'
        calcNewView()
    }
    if (percent == 84) {
        trackspeed = '60'
        calcNewView()
    }
    if (percent == 68) {
        trackspeed = '50'
        calcNewView()
    }
    if (percent == 52) {
        trackspeed = '40'
        calcNewView()
    }
    if (percent == 36) {
        trackspeed = '25'
        calcNewView()
    }
    if (percent == 16) {
        trackspeed = '15'
        calcNewView()
    }
    if (percent == 0) {
        document.getElementById('viewPoint').innerText = `Gleis gesperrt`
    }
}


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
    console.log(views)
    document.getElementById('viewPoint').innerText = `Die erforderliche Sichtweite beträgt: ${view}m`
    document.getElementById('resetBTNContainer').innerHTML = `<p id="resetBTN" onclick="reset()">zurücksetzen</p>`
    document.getElementById('speedContainer').style.display = 'flex'
    setSpeedRange()
}


/**
 * Berechnet die neue Sichtweite durch bewegen des Reglers
 */
function calcNewView() {
    let gradient = lineData[track]
    let viewCode = group + gradient + time
    let viewPointPosition = speed.indexOf(Number(trackspeed))
    let view = views[viewCode][viewPointPosition]
    document.getElementById('viewPoint').innerText = `Die erforderliche Sichtweite beträgt: ${view}m`
    document.getElementById('speedContainer').style.display = 'flex'
    setSpeedRange()
}


/**
 * Setzt die Value von dem Tempo auf das normale streckentempo
 */
function setSpeedRange() {
    setableSpeed = document.getElementById('speedRange')
    if (trackspeed == 70) {
        setableSpeed.value = 100
    }
    if (trackspeed == 60) {
        setableSpeed.value = 84
    }
    if (trackspeed == 50) {
        setableSpeed.value = 68
    }
    if (trackspeed == 40) {
        setableSpeed.value = 52
    }
    if (trackspeed == 25) {
        setableSpeed.value = 36
    }
    if (trackspeed == 15) {
        setableSpeed.value = 16
    }
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
        document.getElementById('station').innerHTML += `<p class="dropDownItem"  onclick="stationChoosed('${lineNames[i]}')">${lineNames[i]}</p>`
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
        <p class="dropDownItem"  onclick="timeChoosed(10)">10s</p>
        <p class="dropDownItem"  onclick="timeChoosed(20)">20s</p>`
    }
    else if (gr == 'KG') {
        group = 'KG'
        document.getElementById('groupChoosen').innerText = `Kleingruppe`
        document.getElementById('timeChoose').innerHTML = `
        <p class="dropDownItem" onclick="timeChoosed(7)">7s</p>
        <p class="dropDownItem" onclick="timeChoosed(10)">10s</p>
        <p class="dropDownItem" onclick="timeChoosed(15)">15s</p>
        <p class="dropDownItem" onclick="timeChoosed(20)">20s</p>
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


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
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


/**
 * Zum zurücksetzen des Sichweitenermittlers
 */
function reset() {

}