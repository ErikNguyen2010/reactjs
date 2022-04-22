const stateDefault ={
    mangNguoiDung: [
        {taiKhoan: "nguyenvana", matKhau: 1234, hoTen: "nguyen van a", soDienThoai: "0990", email:"nguyenvana@gmail.com", loaiNguoiDung: "QuanTri"},
        {taiKhoan: "nguyenvanb", matKhau: 33333, hoTen: "nguyen van b", soDienThoai: "0933390", email:"nguyenvanb@gmail.com", loaiNguoiDung: "NguoiDung"}
    ],
    nguoiDungSua: {
        taiKhoan: "nguyenvanbeeees", matKhau: 33333, hoTen: "nguyen van b", soDienThoai: "0933390", email:"nguyenvanb@gmail.com", loaiNguoiDung: "NguoiDung"
    }

}

export const quanLyNguoiDungReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case "DANG_KY":{
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]
            return {...state}
        }

        case "XOA_NGUOI_DUNG" :{
            state.mangNguoiDung = [...state.mangNguoiDung.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan)]
            return {...state}
        }
        case 'SUA_NGUOI_DUNG':{
            state.nguoiDungSua = action.nguoiDung
            return {...state}
        }
        case "CAP_NHAT_THONG_TIN":{
            let mangNguoiDung = [...state.mangNguoiDung]
            let nguoiDungUpdate = mangNguoiDung.find(nguoiDung => nguoiDung.taiKhoan == action.nguoiDungCapNhat.taiKhoan)
            if(nguoiDungUpdate){
               for(let key in nguoiDungUpdate){
                   nguoiDungUpdate[key] = action.nguoiDungCapNhat[key]
               }
            }
            state.mangNguoiDung = mangNguoiDung
            return{...state}
        }
        
        
        default: return state
    }
}

