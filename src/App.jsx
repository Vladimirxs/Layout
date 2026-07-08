import Shop from './assets/ShopGuide/Shop';
import Info from './assets/InfoShop/Info';
import Navigation from './assets/NavigitionShop/Navigation';
import InfoAction from './assets/InfoAction/InfoAction';
import Partners from './assets/PartnersShop/Partners';
import ConnectStore from './assets/ConnectionStore/ConnectStore';
import './App.css';

function App() {
  return (
    <div>
      <Shop />
      <Info />
       <Navigation/> 
       <InfoAction/>
       <Partners/>
       <ConnectStore/>
    </div>
  )
}


export default App
