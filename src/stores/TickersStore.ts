import { action, makeObservable, observable, runInAction } from "mobx";
import fetchWrap from "../helpers/fetchWrap";

export type ITickersList = Array<[string, ITickerItem]>

export interface ITicker {
  [key: string]: ITickerItem
}

export interface ITickerItem {
  id: number
  last: string
  lowestAsk: string
  highestBid: string
  percentChange: string
  baseVolume: string
  quoteVolume: string
  isFrozen: string
  postOnly: string
  marginTradingEnabled: string
  high24hr: string
  low24hr: string
}

export type ITickerPrepared = [string, ITickerItem];

class TickersStore {
  public tickers: Array<ITickerPrepared>
  public error: Error | null
  public suspendedBy: string
  private timer: ReturnType<typeof setInterval> | null
  private tickersUrl: string

  constructor() {
    makeObservable(this, {
      tickers: observable,
      error: observable,
      fetchTickers: action,
      setFetchTimer: action,
      suspendFetchTimer: action,
      setSuspendedBy: action
    })
    this.tickers = [];
    this.error = null;
    this.timer = null;
    this.tickersUrl = '';
    this.suspendedBy = '';
  }

  fetchTickers(url: string) {
    this.tickersUrl = url;
    this.timer === null && this.setFetchTimer();
    fetchWrap<ITicker>(url)
      .then((result) => {
        runInAction(() => {
          this.tickers = Object.entries(result);
          this.error && (this.error = null);
        });
      })
      .catch((e) => {
        runInAction(() => {
          this.error = e;
        });
        console.log(e);
      });
  }

  setFetchTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(
      this.fetchTickers.bind(this, this.tickersUrl)
    , 5000);
  }

  suspendFetchTimer () {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  setSuspendedBy(str: string) {
    this.suspendedBy = str;
  }
}

export default new TickersStore();