import { get } from "../config/api";

export const fetchCoinList = (currency: string) =>
  get(
    `markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
