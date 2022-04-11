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
        case "TANG_GIAM_SO_LUONG":{
            let gioHang = [...state];
            let result = gioHang.find(phone => phone.maSP == action.maSanPham)
            if(result){
                result.soLuong += action.soLuong
                if(result.soLuong<1){
                    if(window.confirm("mun xoa ko")){
                        gioHang = gioHang.filter(product => product.maSP !== action.maSanPham)
                    }else{
                        result.soLuong -= action.soLuong
                    }
                }
            }
            return gioHang
        }


        default: return state;
    }
}