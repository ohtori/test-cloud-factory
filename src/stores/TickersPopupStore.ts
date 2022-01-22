import { action, makeObservable, observable } from "mobx";
import { ITickerPrepared } from "../stores/TickersStore";

class TickersPopupStore {
  public ticker: ITickerPrepared | null

  constructor() {
    makeObservable(this, {
      ticker: observable,
      setTicker: action,
      clearTicker: action
    })
    this.ticker = null;
  }

  setTicker(ticker: ITickerPrepared) {
    this.ticker = ticker;
  }

  clearTicker() {
    this.ticker = null;
  }
}

export default new TickersPopupStore();