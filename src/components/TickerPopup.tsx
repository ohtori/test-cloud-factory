import { observer } from "mobx-react";
import popupStore from "../stores/TickersPopupStore";
import tickersStore, { ITickerPrepared } from "../stores/TickersStore";

export interface ITickerPopupProps {
  ticker: ITickerPrepared
}

const TickerPopup = observer(() => {
  const clickHandler = () => {
    if (tickersStore.suspendedBy !== "tab2") {
      tickersStore.setFetchTimer();
    }
    popupStore.clearTicker();
  }
  return (
    popupStore.ticker
      ? <div className="ticker-popup__wrap">
        <div className="ticker-popup">
          <button className="ticker-popup__btn" onClick={clickHandler}>x</button>
          <h3>{popupStore.ticker[0]}</h3>
          <p>id: {popupStore.ticker[1].id}</p>
          <p>last: {popupStore.ticker[1].last}</p>
          <p>lowestAsk: {popupStore.ticker[1].lowestAsk}</p>
          <p>highestBid: {popupStore.ticker[1].highestBid}</p>
          <p>percentChange: {popupStore.ticker[1].percentChange}</p>
          <p>baseVolume: {popupStore.ticker[1].baseVolume}</p>
          <p>quoteVolume: {popupStore.ticker[1].quoteVolume}</p>
          <p>isFrozen: {popupStore.ticker[1].isFrozen}</p>
          <p>postOnly: {popupStore.ticker[1].postOnly}</p>
          <p>marginTradingEnabled: {popupStore.ticker[1].marginTradingEnabled}</p>
          <p>high24hr: {popupStore.ticker[1].high24hr}</p>
          <p>low24hr: {popupStore.ticker[1].low24hr}</p>
        </div>
      </div> : null
  );
});

export default TickerPopup;