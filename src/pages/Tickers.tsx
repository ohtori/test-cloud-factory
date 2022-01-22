import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import tickersStore from '../stores/TickersStore';
import Spiner from '../components/Spiner';
import TickersTab from '../components/TickersTab';
import ErrorMessage from '../components/ErrorMessage';

const Tickers = observer(() => {
  useEffect(() => {
    tickersStore.fetchTickers('https://poloniex.com/public?command=returnTicker');
  }, []);

  return (
    <>
      <h2>Котировки</h2>
      <TickersTab />
      {tickersStore.error
        ? <ErrorMessage />
        : tickersStore.tickers.length
          ? <Outlet />
          : <Spiner />
      }
    </>
  )
});


export default Tickers;