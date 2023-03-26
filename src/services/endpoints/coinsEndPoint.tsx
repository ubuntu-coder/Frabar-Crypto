import { get } from "../config/api";

export const fetchCoinList = (currency: string) =>
  get(
    `markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );

export const fetchCoinDetail = (id?: string) =>
  get(`https://api.coingecko.com/api/v3/coins/${id}`);

export const fetchHistoryChart = (
  id?: string,
  _currency?: string,
  day?: number
) =>
  get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${_currency}&days=${day}`
  );
