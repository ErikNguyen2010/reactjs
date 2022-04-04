import logo from './logo.svg';
import './App.css';
import CardRCC from './Components/CardRCC';
import CardRFC from './Components/CardRFC';
import BTlayout from './Components/baiTapLayout/BTlayout';
import BTheader from './Components/baiTapLayout/BTheader';
import DataBinding from './Components/DataBinding/DataBinding';
import HandleEvent from './Components/HandleEvent/HandleEvent';
import StateDemo from './Components/StateDemo/StateDemo';
import StyleComponent from './StyleComponent/StyleComponent';
import RenderArray from './RenderArray/RenderArray';
import DemoProps from './Props/DemoProps';
import ShoesShop from './Props/ShoesShop/ShoesShop';
import BTXemChiTiet from './Props/BTXemChiTiet/BTXemChiTiet';
import GioHang from './Props/BTXemChiTiet/GioHang';
import TangGiamSoLuong from './Components/DemoRedux/TangGiamSoLuong/TangGiamSoLuong';

function App() {
  return (
    <div className="App">
      {/* <BTlayout/> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent/> */}
      {/* <StateDemo/> */}
      {/* <StyleComponent/> */}
      {/* <RenderArray/> */}
      {/* <DemoProps/> */}
      {/* <ShoesShop/> */}
      {/* <BTXemChiTiet/> */}
      <TangGiamSoLuong/>
    </div>
  );
}

export default App;
