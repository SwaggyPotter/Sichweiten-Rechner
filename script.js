let u1Names = ['U-Kfo', 'Kfo-Wt', 'Wt-Nu/Nm', 'Nu/Nm-Kus', 'Kus-Go', 'Go-Mo', 'Mo-Ho', 'Ho-Pr', 'Pr-Kbo', 'Kbo-Gr', 'Gr-S', 'S-Wa']
let u2Names = ['Ri-Sd', 'Sd-Nd', 'Nd-Th', 'Th-Kd', 'Kd-So', 'So-Bmo', 'Bmo-Obi', 'Obi-RP', 'RP-Zo', 'Zo-Wt', 'Wt-No', 'No-Bs',
    'Bs-Gu', 'Gu-MB', 'MB-Pd', 'Pd-MH', 'MH-Mi', 'Mi-Hv', 'Hv-Sp', 'Sp-Mk', 'Mk-Ko', 'Ko-A', 'A-Lu', 'Lu-Sz', 'Sz-EB', 'Eb-Sh', 'Sh-VIN', 'VIN-PA']
let u3Names = ['K-Ot', 'Ot-Os', 'Os-T', 'T-Dd', 'Dd-Po', 'Po-Bt', 'Bt-Rd', 'Rd-Hb', 'Hb-Fpo', 'Fpo-Hz', 'Hz-Sno', 'Sno-Au', 'Au-Wt', 'Wt-Nm/Nu']
let u4Names = ['Ipo-RS', 'RS-Bpo', 'Bpo-V', 'V-Nm/Nu']
let u5Names = ['HBF-BUN', 'BUN-BRT', 'BRT-UDU', 'UDU-MUI', 'MUI-RHO', 'RHO-Al', 'Al-Si', 'Si-Sr', 'Sr-WR', 'WR-FT', 'FT-Sa', 'Sa-Ff',
    'Ff-Md', 'Md-Li', 'Li-Fi', 'Fi-Tk', 'Tk-Bü', 'Bü-E', 'E-Wh', 'Wh-KL', 'KL-GK', 'GK-C', 'C-HD', 'HD-LL', 'LL-HÖ']
let u6Names = ['Mf-WI', 'WI-Ull', 'Ull-Ka', 'Ka-At', 'At-Ts', 'Ts-Ps', 'Ps-PL', 'PL-Me', 'Me-Hu', 'Hu-Ks', 'Ks-Mic', 'Mic-UDO', 'UDO-F', 'F-Ob', 'Ob-ZW', 'ZW-SK',
    'SK-Ri', 'Ri-We', 'We-Lpo', 'Lpo-Se', 'Se-Rb', 'Rb-Afr', 'Afr-Sch', 'Sch-Scha', 'Scha-Oti', 'Oti-Hh', 'Hh-Bk', 'Bk-Tg']
let u7Names = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
let u8Names = ['HMS-L', 'L-Bo', 'Bo-Hpo', 'Hpo-ST', 'ST-Kbu', 'Kbu-Mr', 'Mr-He', 'He-Jb', 'Jb-Ap', 'Ap-W', 'W-Ro', 'Ro-B', 'B-Vo',
    'Vo-Gb', 'Gb-Pk', 'Pk-Olu', 'Olu-FN', 'FN-RE', 'RE-PB', 'PB-LD', 'LD-KB', 'KB-RR', 'RR-WIU']
let u9Names = ['Rzu-Slo/Slu', 'Slo/Slu-Wsg', 'Wsg-Fw', 'Fw-Bd', 'Bd-Beo', 'Beo-Gt', 'Gt-Snu', 'Snu-Kfu',
    'Kfu-Zu', 'Zu-Ha', 'Ha-Tm', 'Tm-Bi', 'Bi-WF', 'WF-Am', 'Am-Lpu', 'Lpu-Np', 'Np-Plo']
let u1 = {
    'U-Kfo': {
        'GL1': 'G0',
        'GL2': 'G0',
        'GES': '60'
    },
    'Kfo-Wt': {
        'GL1': 'G3',
        'GL2': 'G0',
        'GES': '60'
    },
    'Wt-Nu/Nm': {
        'GL1': 'G0',
        'GL2': 'G0',
        'GES': '60'
    },
    'Nu/Nm-Kus': {
        'GL1': 'G3',
        'GL2': 'G0',
        'GES': '50'
    },
    'Kus-Go': {
        'GL1': 'G3',
        'GL2': 'G0',
        'GES': '50'
    },
    'Go-Mo': {
        'GL1': 'G0',
        'GL2': 'G3',
        'GES': '50'
    },
    'Mo-Ho': {
        'GL1': 'G0',
        'GL2': 'G0',
        'GES': '50'
    },
    'Ho-Pr': {
        'GL1': 'G0',
        'GL2': 'G1',
        'GES': '50'
    },
    'Pr-Kbo': {
        'GL1': 'G0',
        'GL2': 'G0',
        'GES': '50'
    },
    'Kbo-Gr': {
        'GL1': 'G0',
        'GL2': 'G0',
        'GES': '50'
    },
    'Gr-S': {
        'GL1': 'G1',
        'GL2': 'G0',
        'GES': '50'
    },
    'S-Wa': {
        'GL1': 'G1',
        'GL2': 'G0',
        'GES': '50'
    },
}
let u2 = {}
let u3 = {}
let u4 = {}
let u5 = {}
let u6 = {}
let u7 = {}
let u8 = {}
let u9 = {}
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
    console.log(u1[document.getElementById('stSelector').value])
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

    }
    if (lineList.value == 'U5') {

    }
    if (lineList.value == 'U6') {

    }
    if (lineList.value == 'U7') {

    }
    if (lineList.value == 'U8') {

    }
    if (lineList.value == 'U9') {

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