import { Api } from "./common/Api";
import "./style/Common.css"
import Home from "./common/Home";
import HipFig from "./May/HipFig";
import CheckItenery from "./Components/CheckItenery";
import Count from "./Components/Count";
import Counter from "./Components/Counter";
import DateTime from "./Components/DateTime";
import EduGaonTamp from "./Components/EduGaonTamp";
import Itineraries from "./Components/Itineraries";
import Login from "./Components/Login";
import Post from "./Components/Post";
import Variable from "./Components/Variable";
import Navbar from "./common/Navbar";

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App(){
    return (
      <>
        <Navbar/>
        <Home />
        <HipFig />
        <CheckItenery/>
        <Count/>
        <Counter/>
        <DateTime/>
        <EduGaonTamp/>
        <Itineraries/>
        <Login/>
        <Post/>
        <Variable/>
        <Api />
      </>
    )
  }                                                                                                                                          

export default App