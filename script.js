let lineList = document.getElementById('undergroundLine')
let choosenLineCounter = 0;
let stationChooser = document.getElementById('stSelector')
let choosenSpeed
let trackspeed
let lineData

/*Event listener*/
/**
 * Eventlistener zur auswahl der U-Bahn linie
 */
let undergroundLine = document.getElementById('undergroundLine')
undergroundLine.addEventListener('click', () => {
    chooseLine()
})


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
})


function calcView() {
    let group = document.getElementById('GrpSelector').value
    let time = document.getElementById('CTSelector').value
    let track = document.getElementById('trSelector').value
    let gradient = lineData[track]
    let viewCode = group + gradient + time
    trackspeed = lineData['GES']
    let viewPointPosition = speed.indexOf(Number(trackspeed))
    let view = views[viewCode][viewPointPosition]
    document.getElementById('viewPoint').innerText = `Die Sichtweite beträgt: ${view}m`
}


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
 * Fill the 
 * @param {string} lineNames line name U1,U2,U3.....
 */
function loadUndergroundLine(lineNames) {
    document.getElementById('stSelector').innerHTML = ''
    document.getElementById('stSelector').innerHTML += `<option value="0">Bahnhof wählen</option>`
    for (let i = 0; i < lineNames.length; i++) {
        const element = lineNames[i];
        document.getElementById('stSelector').innerHTML += `<option value="${lineNames[i]}">${lineNames[i]}</option>`
    }
}