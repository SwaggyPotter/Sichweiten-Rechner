let lineList = document.getElementById('undergroundLine')
let choosenLineCounter = 0;
let stationChooser = document.getElementById('stSelector')

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
        console.log(u1[`${stSelector.value}`])
    }
    if (lineList.value == 'U2') {
        console.log(u2[`${stSelector.value}`])
    }
    if (lineList.value == 'U3') {
        console.log(u3[`${stSelector.value}`])
    }
    if (lineList.value == 'U4') {
        console.log(u4[`${stSelector.value}`])
    }
    if (lineList.value == 'U5') {
        console.log(u5[`${stSelector.value}`])
    }
    if (lineList.value == 'U6') {
        console.log(u6[`${stSelector.value}`])
    }
    if (lineList.value == 'U7') {
        console.log(u7[`${stSelector.value}`])
    }
    if (lineList.value == 'U8') {
        console.log(u8[`${stSelector.value}`])
    }
    if (lineList.value == 'U9') {
        console.log(u9[`${stSelector.value}`])
    }
})


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


function loadUndergroundLine(lineNames) {
    document.getElementById('stSelector').innerHTML = ''
    document.getElementById('stSelector').innerHTML += `<option value="0">Bahnhof wählen</option>`
    for (let i = 0; i < lineNames.length; i++) {
        const element = lineNames[i];
        document.getElementById('stSelector').innerHTML += `<option value="${lineNames[i]}">${lineNames[i]}</option>`
    }
}