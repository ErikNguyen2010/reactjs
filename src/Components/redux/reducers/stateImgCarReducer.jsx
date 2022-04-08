const stateDefaultImg = "./img/products/products/black-car.jpg";



export const stateImgCar = (state = stateDefaultImg, action) =>{
    switch(action.type){
        case"THAY_DOI_IMG" :{
            console.log(action);
            state = action.newSrc;
            return state;
        }
        default: return state
    }
    
}
