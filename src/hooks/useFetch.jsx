import { useState } from "react";

export const useFetch = ({ currency }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(currency);

  const consultaApi = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Error en la API");
      }

      const json = await res.json();

      const arrayCryptos = json.Data.map((item) => {
        switch (currency) {
          case "USD":
            const objetoUSD = {
              id: item.CoinInfo.Name,
              name: item.CoinInfo.FullName,
              price: item.DISPLAY.USD.PRICE,
              highday: item.DISPLAY.USD.HIGHDAY,
              lowday: item.DISPLAY.USD.LOWDAY,
              lastupdate: item.DISPLAY.USD.LASTUPDATE,
            };
            return objetoUSD;
          case "GBP":
            const objetoGBP = {
              id: item.CoinInfo.Name,
              name: item.CoinInfo.FullName,
              price: item.DISPLAY.GBP.PRICE,
              highday: item.DISPLAY.GBP.HIGHDAY,
              lowday: item.DISPLAY.GBP.LOWDAY,
              lastupdate: item.DISPLAY.GBP.LASTUPDATE,
            };
            return objetoGBP;
          case "EUR":
            const objetoEUR = {
              id: item.CoinInfo.Name,
              name: item.CoinInfo.FullName,
              price: item.DISPLAY.EUR.PRICE,
              highday: item.DISPLAY.EUR.HIGHDAY,
              lowday: item.DISPLAY.EUR.LOWDAY,
              lastupdate: item.DISPLAY.EUR.LASTUPDATE,
            };
            return objetoEUR;
          case "ARS":
            const objetoARS = {
              id: item.CoinInfo.Name,
              name: item.CoinInfo.FullName,
              price: item.DISPLAY.ARS.PRICE,
              highday: item.DISPLAY.ARS.HIGHDAY,
              lowday: item.DISPLAY.ARS.LOWDAY,
              lastupdate: item.DISPLAY.ARS.LASTUPDATE,
            };
            return objetoARS;
          case "MEX":
            const objetoMEX = {
              id: item.CoinInfo.Name,
              name: item.CoinInfo.FullName,
              price: item.DISPLAY.MEX.PRICE,
              highday: item.DISPLAY.MEX.HIGHDAY,
              lowday: item.DISPLAY.MEX.LOWDAY,
              lastupdate: item.DISPLAY.MEX.LASTUPDATE,
            };
            return objetoMEX;
        }
      });

      setData(arrayCryptos);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { consultaApi, data, loading, error };
};
