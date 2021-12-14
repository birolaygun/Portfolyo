import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Mains from "./components/Mains";
import NavEn from "./components/NavEn";
import MainsEn from "./components/MainsEn";
import About from "./components/About";
import AboutEn from "./components/AboutEn";
import Cv from "./components/Cv";
import CvEn from "./components/CvEn";
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
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Mains />
              <Nav />
            </>
          )}
        />

        <Route
          path="/en/"
          exact
          render={() => (
            <>
              <MainsEn />
              <NavEn />
            </>
          )}
        />
        <Route path="/projeler/ilk_web_sitem/" exact component={(Prilk, Nav)} />
        <Route path="/iletisim/" exact component={(İletişim, Nav)} />
        <Route path="/galeri/" exact component={(Galery, Nav)} />
        <Route
          path="/projeler/doviz_hesaplama/"
          exact
          component={(PrDoviz, Nav)}
        />
        <Route path="/projeler/shopping/" exact component={(PrShopping, Nav)} />
        <Route
          path="/projeler/countdown_to_do/"
          exact
          component={(PrCountdown, Nav)}
        />
        <Route path="/projeler/otoban_oto/" exact component={(PrOtoban, Nav)} />
        <Route path="/projeler/stok_takip/" exact component={(PrStok, Nav)} />
        <Route path="/projeler/tanitim/" exact component={(PrTanitim, Nav)} />
        <Route path="/projeler/" exact component={(Projects, Nav)} />
        <Route
          path="/projeler/portfolyo/"
          exact
          component={(PrPortfolyo, Nav)}
        />
        <Route
          path="/cv/"
          exact
          render={() => (
            <>
              <Cv />
              <Nav />
            </>
          )}
        />
        <Route
          path="/cv/en/"
          exact
          render={() => (
            <>
              <CvEn />
              <NavEn />
            </>
          )}
        />

        <Route
          path="/hakkimda/"
          exact
          render={() => (
            <>
              <About />
              <Nav />
            </>
          )}
        />
        <Route
          path="/hakkimda/en/"
          exact
          render={() => (
            <>
              <AboutEn />
              <NavEn />
            </>
          )}
        />
      </div>
    </Router>
  );
}
