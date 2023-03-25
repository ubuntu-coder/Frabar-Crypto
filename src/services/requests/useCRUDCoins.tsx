import { useQuery } from "react-query";
import { fetchCoinList } from "../endpoints/coinsEndPoint";

export const useFetchCoins = (currency: string) =>
  useQuery(["fetch-coins", currency], () => fetchCoinList(currency));
