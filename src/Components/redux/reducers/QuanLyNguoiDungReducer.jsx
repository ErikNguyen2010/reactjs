const stateDefault ={
    mangNguoiDung: [
        {taiKhoan: "nguyenvana", matKhau: 1234, hoTen: "nguyen van a", soDienThoai: "0990", email:"nguyenvana@gmail.com", loaiNguoiDung: "QuanTri"},
        {taiKhoan: "nguyenvanb", matKhau: 33333, hoTen: "nguyen van b", soDienThoai: "0933390", email:"nguyenvanb@gmail.com", loaiNguoiDung: "NguoiDung"}
    ]

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
        
        
        default: return state
    }
}

