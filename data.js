let u1Names = ['U-Kfo', 'Kfo-Wt', 'Wt-Nu/Nm', 'Nu/Nm-Kus', 'Kus-Go', 'Go-Mo', 'Mo-Ho', 'Ho-Pr', 'Pr-Kbo', 'Kbo-Gr', 'Gr-S', 'S-Wa']
let u1 = {
    'U-Kfo': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Kfo-Wt': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'Wt-Nu/Nm': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Nu/Nm-Kus': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '50' },
    'Kus-Go': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '50' },
    'Go-Mo': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '50' },
    'Mo-Ho': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '50' },
    'Ho-Pr': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '50' },
    'Pr-Kbo': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '50' },
    'Kbo-Gr': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '50' },
    'Gr-S': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '50' },
    'S-Wa': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '50' },
}

let u2Names = ['Ri-Sd', 'Sd-Nd', 'Nd-Th', 'Th-Kd', 'Kd-So', 'So-Bmo', 'Bmo-Obi', 'Obi-RP', 'RP-Zo', 'Zo-Wt', 'Wt-No', 'No-Bs',
    'Bs-Gu', 'Gu-MB', 'MB-Pd', 'Pd-MH', 'MH-Mi', 'Mi-Hv', 'Hv-Sp', 'Sp-Mk', 'Mk-Ko', 'Ko-A', 'A-Lu', 'Lu-Sz', 'Sz-EB', 'Eb-Sh', 'Sh-VIN', 'VIN-PA']
let u2 = {
    'Ri-Sd': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'Sd-Nd': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'Nd-Th': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
    'Th-Kd': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '60' },
    'Kd-So': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '60' },
    'So-Bmo': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
    'Bmo-Obi': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Obi-RP': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '60' },
    'RP-Zo': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Zo-Wt': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Wt-No': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'No-Bs': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Bs-Gu': { 'GL1': 'G3', 'GL2': 'G2', 'GES': '60' },
    'Gu-MB': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '60' },
    'MB-Pd': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '60' },
    'Pd-MH': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
    'MH-Mi': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Mi-Hv': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Hv-Sp': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
    'Sp-Mk': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Mk-Ko': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '60' },
    'Ko-A': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'A-Lu': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Lu-Sz': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'Sz-EB': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'Eb-Sh': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Sh-VIN': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '60' },
    'VIN-PA': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '60' }
}

let u3Names = ['K-Ot', 'Ot-Os', 'Os-T', 'T-Dd', 'Dd-Po', 'Po-Bt', 'Bt-Rd', 'Rd-Hb', 'Hb-Fpo', 'Fpo-Hz', 'Hz-Sno', 'Sno-Au', 'Au-Wt', 'Wt-Nm/Nu']
let u3 = {
    'K-Ot': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
    'Ot-Os': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
    'Os-T': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'T-Dd': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Dd-Po': { 'GL1': 'G2', 'GL2': 'G2', 'GES': '60' },
    'Po-Bt': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '60' },
    'Bt-Rd': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '60' },
    'Rd-Hb': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
    'Hb-Fpo': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '60' },
    'Fpo-Hz': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '60' },
    'Hz-Sno': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Sno-Au': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Au-Wt': { 'GL1': 'G3', 'GL2': 'G2', 'GES': '60' },
    'Wt-Nm/Nu': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' }
}

let u4Names = ['Ipo-RS', 'RS-Bpo', 'Bpo-V', 'V-Nm/Nu']
let u4 = {
    'Ipo-RS': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'RS-Bpo': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Bpo-V': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '60' },
    'V-Nm/Nu': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
}

let u5Names = ['HBF-BUN', 'BUN-BRT', 'BRT-UDU', 'UDU-MUI', 'MUI-RHO', 'RHO-Al', 'Al-Si', 'Si-Sr', 'Sr-WR', 'WR-FT', 'FT-Sa', 'Sa-Ff',
    'Ff-Md', 'Md-Li', 'Li-Fi', 'Fi-Tk', 'Tk-Bü', 'Bü-E', 'E-Wh', 'Wh-KL', 'KL-GK', 'GK-C', 'C-HD', 'HD-LL', 'LL-HÖ']
let u5 = {
    'HBF-BUN': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'BUN-BRT': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '60' },
    'BRT-UDU': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '60' },
    'UDU-MUI': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '60' },
    'MUI-RHO': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '60' },
    'RHO-Al': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '60' },
    'Al-Si': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'Si-Sr': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Sr-WR': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'WR-FT': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'FT-Sa': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Sa-Ff': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Ff-Md': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Md-Li': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Li-Fi': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'Fi-Tk': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '60' },
    'Tk-Bü': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '60' },
    'Bü-E': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
    'E-Wh': { 'GL1': 'G3', 'GL2': 'G2', 'GES': '60' },
    'Wh-KL': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '60' },
    'KL-GK': { 'GL1': 'G3', 'GL2': 'G2', 'GES': '60' },
    'GK-C': { 'GL1': 'G3', 'GL2': 'G2', 'GES': '60' },
    'C-HD': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '60' },
    'HD-LL': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
    'LL-HÖ': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '60' },
}

let u6Names = ['Mf-WI', 'WI-Ull', 'Ull-Ka', 'Ka-At', 'At-Ts', 'Ts-Ps', 'Ps-PL', 'PL-Me', 'Me-Hu', 'Hu-Ks', 'Ks-Mic', 'Mic-UDO', 'UDO-F', 'F-Ob', 'Ob-ZW', 'ZW-SK',
    'SK-Ri', 'Ri-We', 'We-Lpo', 'Lpo-Se', 'Se-Rb', 'Rb-Afr', 'Afr-Sch', 'Sch-Scha', 'Scha-Oti', 'Oti-Hh', 'Hh-Bk', 'Bk-Tg']
let u6 = {
    'Mf-WI': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'WI-Ull': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Ull-Ka': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Ka-At': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'At-Ts': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Ts-Ps': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Ps-PL': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'PL-Me': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Me-Hu': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Hu-Ks': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Ks-Mic': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Mic-UDO': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '70' },
    'UDO-F': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '70' },
    'F-Ob': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '70' },
    'Ob-ZW': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'ZW-SK': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'SK-Ri': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Ri-We': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'We-Lpo': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Lpo-Se': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Se-Rb': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '70' },
    'Rb-Afr': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Afr-Sch': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Sch-Scha': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '70' },
    'Scha-Oti': { 'GL1': 'G2', 'GL2': 'G2', 'GES': '70' },
    'Oti-Hh': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Hh-Bk': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Bk-Tg': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' }
}

let u7Names = ['R-Zd', 'Zd-Wk', 'Wk-La', 'La-Jt', 'Jt-Br', 'Br-Pi', 'Pi-Bl', 'Bl-Gz', 'Gz-Nk', 'Nk-KM', 'KM-Rk', 'Rk-Hpu', 'Hpu-Sü', 'Sü-Gs', 'Gs-Me', 'Me-Mu',
    'Mu-Y', 'Y-Kto', 'Kto-Ei', 'Ei-Bpu', 'Bpu-Beu', 'Beu-Bli', 'Bli-Fpu',
    'Fpu-Kn', 'Kn-Ado', 'Ado-Wd', 'Wd-Bmu', 'Bmu-Rw', 'Rw-Mp', 'Mp-Jho/Jhu', 'Jho/Jhu-JK', 'Jk-Hl', 'Hl-Sie', 'Sie-Rm', 'Rm-P', 'P-Hs', 'Hs-Zi',
    'Zi-As', 'As-RSp']
let u7 = {
    'R-Zd': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Zd-Wk': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Wk-La': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'La-Jt': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Jt-Br': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '70' },
    'Br-Pi': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Pi-Bl': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Bl-Gz': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '70' },
    'Gz-Nk': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Nk-KM': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'KM-Rk': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Rk-Hpu': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Hpu-Sü': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Sü-Gs': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '70' },
    'Gs-Me': { 'GL1': 'G2', 'GL2': 'G2', 'GES': '70' },
    'Me-Mu': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Mu-Y': { 'GL1': 'G2', 'GL2': 'G2', 'GES': '70' },
    'Y-Kto': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Kto-Ei': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Ei-Bpu': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '70' },
    'Bpu-Beu': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Beu-Bli': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Bli-Fpu': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Fpu-Kn': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Kn-Ado': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Ado-Wd': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Wd-Bmu': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Bmu-Rw': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Rw-Mp': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Mp-Jho/Jhu': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '70' },
    'Jho/Jhu-JK': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Jk-Hl': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Hl-Sie': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '70' },
    'Sie-Rm': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Rm-P': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'P-Hs': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Hs-Zi': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Zi-As': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'As-RSp': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '70' }
}

let u8Names = ['HMS-L', 'L-Bo', 'Bo-Hpo', 'Hpo-ST', 'ST-Kbu', 'Kbu-Mr', 'Mr-He', 'He-Jb', 'Jb-Ap', 'Ap-W', 'W-Ro', 'Ro-B', 'B-Vo',
    'Vo-Gb', 'Gb-Pk', 'Pk-Olu', 'Olu-FN', 'FN-RE', 'RE-PB', 'PB-LD', 'LD-KB', 'KB-RR', 'RR-WIU']
let u8 = {
    'HMS-L': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'L-Bo': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Bo-Hpo': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Hpo-ST': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'ST-Kbu': { 'GL1': 'G3', 'GL2': 'G2', 'GES': '70' },
    'Kbu-Mr': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Mr-He': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'He-Jb': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '70' },
    'Jb-Ap': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Ap-W': { 'GL1': 'G3', 'GL2': 'G3', 'GES': '70' },
    'W-Ro': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Ro-B': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '70' },
    'B-Vo': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Vo-Gb': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '70' },
    'Gb-Pk': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Pk-Olu': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Olu-FN': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'FN-RE': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'RE-PB': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'PB-LD': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'LD-KB': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'KB-RR': { 'GL1': 'G2', 'GL2': 'G2', 'GES': '70' },
    'RR-WIU': { 'GL1': 'G3', 'GL2': 'G1', 'GES': '70' }
}

let u9Names = ['Rzu-Slo/Slu', 'Slo/Slu-Wsg', 'Wsg-Fw', 'Fw-Bd', 'Bd-Beo', 'Beo-Gt', 'Gt-Snu', 'Snu-Kfu',
    'Kfu-Zu', 'Zu-Ha', 'Ha-Tm', 'Tm-Bi', 'Bi-WF', 'WF-Am', 'Am-Lpu', 'Lpu-Np', 'Np-Plo']
let u9 = {
    'Rzu-Slo/Slu': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Slo/Slu-Wsg': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Wsg-Fw': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Fw-Bd': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Bd-Beo': { 'GL1': 'G2', 'GL2': 'G2', 'GES': '70' },
    'Beo-Gt': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Gt-Snu': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Snu-Kfu': { 'GL1': 'G1', 'GL2': 'G2', 'GES': '70' },
    'Kfu-Zu': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'Zu-Ha': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Ha-Tm': { 'GL1': 'G1', 'GL2': 'G3', 'GES': '70' },
    'Tm-Bi': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Bi-WF': { 'GL1': 'G1', 'GL2': 'G1', 'GES': '70' },
    'WF-Am': { 'GL1': 'G2', 'GL2': 'G3', 'GES': '70' },
    'Am-Lpu': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Lpu-Np': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' },
    'Np-Plo': { 'GL1': 'G2', 'GL2': 'G1', 'GES': '70' }
}

/**
 * Mögliche geschwindigkeiten der Züge
 */
let speed = [15, 25, 40, 50, 60, 70]

let views = {
    /**
    * Arbeitgruppe, Gefälleklasse 1, Räumzeit: 10 Sekunden
    */
    'AGG110': [70, 120, 210, 290, 370, 460],
    /**
     * Arbeitgruppe, Gefälleklasse 1, Räumzeit: 20 Sekunden
     */
    'AGG120': [120, 200, 340, 440, 560, 690],
    /**
    * Arbeitgruppe, Gefälleklasse 2, Räumzeit: 10 Sekunden
    */
    'AGG210': [70, 130, 230, 310, 400, 490],
    /**
     * Arbeitgruppe, Gefälleklasse 2, Räumzeit: 20 Sekunden
     */
    'AGG220': [120, 200, 340, 440, 560, 690],
    /**
     * Arbeitgruppe, Gefälleklasse 3, Räumzeit: 10 Sekunden
     */
    'AGG310': [80, 140, 250, 350, 450, 570],
    /**
     * Arbeitgruppe, Gefälleklasse 3, Räumzeit: 20 Sekunden
     */
    'AGG320': [120, 210, 360, 480, 620, 770],
    /**
     * Kleingruppe 7 Sekunden
     */
    'KGG17': [50, 70, 120, 140, 170, 200], 'KGG27': [50, 70, 120, 140, 170, 200], 'KGG37': [50, 70, 120, 140, 170, 200],
    /**
     * Kleingruppe 10 Sekunden
     */
    'KGG110': [60, 90, 150, 190, 220, 260], 'KGG210': [60, 90, 150, 190, 220, 260], 'KGG310': [60, 90, 150, 190, 220, 260],
    /**
     * Kleingruppe 15 Sekunden
     */
    'KGG115': [80, 130, 200, 250, 300, 350], 'KGG215': [80, 130, 200, 250, 300, 350], 'KGG315': [80, 130, 200, 250, 300, 350],
    /**
    * Kleingruppe 20 Sekunden
    */
    'KGG120': [100, 160, 260, 320, 390, 450], 'KGG220': [100, 160, 260, 320, 390, 450], 'KGG320': [100, 160, 260, 320, 390, 450],
}



