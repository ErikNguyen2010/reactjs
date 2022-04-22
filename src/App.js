import logo from "./logo.svg";
import "./App.css";
import CardRCC from "./Components/CardRCC";
import CardRFC from "./Components/CardRFC";
import BTlayout from "./Components/baiTapLayout/BTlayout";
import BTheader from "./Components/baiTapLayout/BTheader";
import DataBinding from "./Components/DataBinding/DataBinding";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import StateDemo from "./Components/StateDemo/StateDemo";
import StyleComponent from "./StyleComponent/StyleComponent";
import RenderArray from "./RenderArray/RenderArray";
import DemoProps from "./Props/DemoProps";
import ShoesShop from "./Props/ShoesShop/ShoesShop";
import BTXemChiTiet from "./Props/BTXemChiTiet/BTXemChiTiet";
import GioHang from "./Props/BTXemChiTiet/GioHang";
import TangGiamSoLuong from "./Components/DemoRedux/TangGiamSoLuong/TangGiamSoLuong";
import BTChonXeRedux from "./Components/DemoRedux/TangGiamSoLuong/BTChonXeRedux/BTChonXeRedux";
import BTGioHangRedux from "./Components/DemoRedux/BTGioHangRedux/BTGioHangRedux";
import GameTaiXiu from "./Components/DemoRedux/GameTaiXiu/GameTaiXiu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HeaderHome from "./Components/HeaderHome/HeaderHome";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import BaiTapQuanLyNguoiDung from "./pages/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung";
import LifeCycle from "./pages/LifeCycle/LifeCycle";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/home"} render ={(propsRoute) => {
          return <div>
           <HeaderHome/>
             <Home {...propsRoute}/> 
          </div> }
        } />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/detail/:postid"} component={Detail} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/lifecycle"} component={LifeCycle} />
        <Route exact path={"/btqlnd"} component={BaiTapQuanLyNguoiDung} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
