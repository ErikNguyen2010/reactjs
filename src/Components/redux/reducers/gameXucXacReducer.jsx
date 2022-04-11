


const stateDefault = {
    banChon: false,
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangXucXac: [
        {hinhAnh: "./img/taixiu/2.png", diem: 2},
        {hinhAnh: "./img/taixiu/3.png", diem: 3},
        {hinhAnh: "./img/taixiu/4.png", diem: 4},
    ],
}



export const gameXucXacReducer = (state = stateDefault, action) =>{
     switch(action.type){
        case "DAT_CUOC": {
            state.banChon = action.banChon;
            return {...state};
        }
        case"PLAY_GAME": {
            let randomMang = [];
            for(let i = 1; i<=3; i++ ) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacRandom = {hinhAnh : `./img/taixiu/${soNgauNhien}.png`, diem: soNgauNhien}
                randomMang.push(xucXacRandom)
            }
            state.mangXucXac = randomMang;


            let sum = 0;
            for(let xucXac of randomMang){
                sum += xucXac.diem
            }

            if((state.banChon && sum > 11) || (!state.banChon && sum <= 11)){
                state.soBanThang += 1
            }
            state.tongSoBanChoi += 1
            return {...state}
        }
        default: return state

     }
}