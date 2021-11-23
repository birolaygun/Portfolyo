import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Mains from "./components/Mains"
import About from "./components/About";
import Cv from "./components/Cv";
import Projects from "./components/Projects";
import PrPortfolyo from "./components/PrPortfolyo";
import PrTanitim from "./components/PrTanitim";
import PrStok from "./components/PrStok";
import PrOtoban from "./components/PrOtoban";
import PrCountdown from "./components/PrCountdown";
import PrShopping from "./components/PrShopping";
import PrDoviz from "./components/PrDoviz";
import Prilk from "./components/Prilk";
import Galery from "./components/Galery";
import İletişim from "./components/İletişim";
import "./scss/styles.css";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Route path="/" exact component={Mains} />
        <Route path="/ilk_web_sitem" exact component={Prilk} />
        <Route path="/iletişim" exact component={İletişim} />
        <Route path="/galeri" exact component={Galery} />
        <Route path="/doviz_hesaplama" exact component={PrDoviz} />
        <Route path="/shopping" exact component={PrShopping} />
        <Route path="/countdown_to_do" exact component={PrCountdown} />
        <Route path="/otoban_oto" exact component={PrOtoban} />
        <Route path="/stok_takip" exact component={PrStok} />
        <Route path="/tanitim" exact component={PrTanitim} />
        <Route path="/projelerim" exact component={Projects} />
        <Route path="/portfolyo" exact component={PrPortfolyo} />
        <Route path="/cv" exact component={Cv} />
        <Route path="/hakkimda" exact component={About} />
      </div>
    </Router>
  );
}

