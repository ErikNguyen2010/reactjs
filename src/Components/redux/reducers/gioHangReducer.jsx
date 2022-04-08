const stateDefault = [
];
export const gioHangReducer = (state = stateDefault,action) =>{
    switch(action.type){
        case "THEM_GIO_HANG":{
            let gioHang = state
            let phone = gioHang.find(product => product.maSP == action.sanPham.maSP)
            if(phone){
                phone.soLuong += 1
            }else{
                gioHang.push(action.sanPham)
            }
            return [...gioHang]
        }
        case "XOA_GIO_HANG" :{
            let gioHang = [...state];
            gioHang = gioHang.filter(product => product.maSP !== action.maSPClick)
            return gioHang
        }
        default: return state;
    }
}