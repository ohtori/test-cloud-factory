import { observer } from "mobx-react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Tickers from "../pages/Tickers";
import tickersStore from "../stores/TickersStore";
import TickersList from "./TickersList";

const Main = observer(
  () => {
    return (
      <main className="main">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/tickers" element={<Tickers />}>
            <Route path="/tickers" element={
              <TickersList tickers={
                tickersStore.tickers.slice(0, Math.ceil(tickersStore.tickers.length / 2))
              } />
            } />
            <Route path="2" element={
              <TickersList tickers={
                tickersStore.tickers.slice(Math.ceil(tickersStore.tickers.length / 2))
              } />
            } />
          </Route>
        </Routes>
      </main>
    )
  }
)

export default Main;