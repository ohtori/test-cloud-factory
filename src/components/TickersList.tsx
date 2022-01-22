import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import tickersStore, { ITickersList } from "../stores/TickersStore";
import TickersItem from "./TickersItem";

export interface ITickerListProps {
  tickers: ITickersList
}

const TickersList = React.memo(({ tickers }: ITickerListProps): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/tickers') {
      tickersStore.setSuspendedBy('tab1');
      tickersStore.setFetchTimer();
    } else {
      tickersStore.setSuspendedBy('tab2');
      tickersStore.suspendFetchTimer();
    }
  }, [pathname]);

  return (
    <table className="tickers">
      <thead>
        <tr className="tickers__item">
          <td>Ticker</td>
          <td>Last</td>
          <td>Highest Bid</td>
          <td>Percent Change</td>
        </tr>
      </thead>
      <tbody>
        {tickers.map((ticker) => (
          <TickersItem key={ticker[1].id} ticker={ticker} />
        ))}
      </tbody>
    </table>
  );
})

export default TickersList;