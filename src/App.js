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
import ProjectsEn from "./components/ProjectsEn";
import PrPortfolyo from "./components/PrPortfolyo";
import PrPortfolyoEn from "./components/PrPortfolyoEn";
import PrTanitim from "./components/PrTanitim";
import PrTanitimEn from "./components/PrTanitimEn";
import PrStok from "./components/PrStok";
import PrStokEn from "./components/PrStokEn";
import PrPolice from "./components/PrPolice";
import PrPoliceEn from "./components/PrPoliceEn";
import PrOtoban from "./components/PrOtoban";
import PrOtobanEn from "./components/PrOtobanEn";
import PrCountdown from "./components/PrCountdown";
import PrCountdownEn from "./components/PrCountdownEn";
import PrShopping from "./components/PrShopping";
import PrShoppingEn from "./components/PrShoppingEn";
import PrDoviz from "./components/PrDoviz";
import PrDovizEn from "./components/PrDovizEn";
import Prilk from "./components/Prilk";
import PrilkEn from "./components/PrilkEn";
import PrMenu from "./components/PrMenu";
import PrMenuEn from "./components/PrMenuEn";
import Galery from "./components/Galery";
import İletişim from "./components/İletişim";
import İletişimEn from "./components/İletişimEn";
import PrInstagram from "./components/PrInstagram";
import PrInstagramEn from "./components/PrInstagramEn";
import PrGlomil from "./components/PrGlomil";
import PrGlomilEn from "./components/PrGlomilEn";
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
        <Route
          path="/projeler/ilk_web_sitem/"
          exact
          render={() => (
            <>
              <Prilk />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/policeCar/"
          exact
          render={() => (
            <>
              <PrPolice />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/policeCar/en/"
          exact
          render={() => (
            <>
              <PrPoliceEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/ilk_web_sitem/en/"
          exact
          render={() => (
            <>
              <PrilkEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/iletisim/"
          exact
          render={() => (
            <>
              <İletişim />
              <Nav />
            </>
          )}
        />
        <Route
          path="/iletisim/en/"
          exact
          render={() => (
            <>
              <İletişimEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/galeri/"
          exact
          render={() => (
            <>
              <Galery />
              <Nav />
            </>
          )}
        />
        <Route
          path="/galeri/en/"
          exact
          render={() => (
            <>
              <Galery />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/doviz_hesaplama/"
          exact
          render={() => (
            <>
              <PrDoviz />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/menu/"
          exact
          render={() => (
            <>
              <PrMenu />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/instagram/"
          exact
          render={() => (
            <>
              <PrInstagram />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/instagram/en/"
          exact
          render={() => (
            <>
              <PrInstagramEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/glomil/"
          exact
          render={() => (
            <>
              <PrGlomil />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/glomil/en/"
          exact
          render={() => (
            <>
              <PrGlomilEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/menu/en/"
          exact
          render={() => (
            <>
              <PrMenuEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/doviz_hesaplama/en/"
          exact
          render={() => (
            <>
              <PrDovizEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/shopping/"
          exact
          render={() => (
            <>
              <PrShopping />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/shopping/en/"
          exact
          render={() => (
            <>
              <PrShoppingEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/countdown_to_do/"
          exact
          render={() => (
            <>
              <PrCountdown />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/countdown_to_do/en/"
          exact
          render={() => (
            <>
              <PrCountdownEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/otoban_oto/"
          exact
          render={() => (
            <>
              <PrOtoban />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/otoban_oto/en/"
          exact
          render={() => (
            <>
              <PrOtobanEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/stok_takip/"
          exact
          render={() => (
            <>
              <PrStok />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/stok_takip/en/"
          exact
          render={() => (
            <>
              <PrStokEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/tanitim/"
          exact
          render={() => (
            <>
              <PrTanitim />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/tanitim/en/"
          exact
          render={() => (
            <>
              <PrTanitimEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/"
          exact
          render={() => (
            <>
              <Projects />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/en/"
          exact
          render={() => (
            <>
              <ProjectsEn />
              <NavEn />
            </>
          )}
        />
        <Route
          path="/projeler/portfolyo/"
          exact
          render={() => (
            <>
              <PrPortfolyo />
              <Nav />
            </>
          )}
        />
        <Route
          path="/projeler/portfolyo/en/"
          exact
          render={() => (
            <>
              <PrPortfolyoEn />
              <NavEn />
            </>
          )}
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
