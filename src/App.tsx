import { Api } from "./ComponentPages/Api";
import "./App.css";
import Header from './ComponentPages/Header'
import Home from "./ComponentPages/Home";
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

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App(){
    return (
      <>
        <h1 style={{height:"100px", marginTop:"-1%"}}><Header /></h1>
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