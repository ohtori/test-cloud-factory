import React from "react";
import tickersStore, { ITickerPrepared } from "../stores/TickersStore";
import tickerPopupStore from '../stores/TickersPopupStore';
import TableCell from "./TableCell";
import SimpleTableCell from './SimpleTableCell';


export interface ITickerItemProps {
  ticker: ITickerPrepared
}

const TickersItem = React.memo(({ ticker }: ITickerItemProps): JSX.Element => {
  const clickHandler = () => {
    tickerPopupStore.setTicker(ticker);
    tickersStore.suspendFetchTimer();
  }

  return (
    <tr onClick={clickHandler} className="tickers__item">
      <SimpleTableCell value={ticker[0]} />
      <TableCell value={Number(ticker[1].last)} />
      <TableCell value={Number(ticker[1].highestBid)} />
      <TableCell value={Number(ticker[1].percentChange)} />
    </tr>
  )
});

export default TickersItem;