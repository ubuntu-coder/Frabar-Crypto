import { useQuery } from "react-query";
import { message } from "antd";
import {
  fetchCoinList,
  fetchCoinDetail,
  fetchHistoryChart,
} from "../endpoints/coinsEndPoint";
import { useNavigate } from "react-router-dom";

export const useFetchCoins = (currency: string) =>
  useQuery(["fetch-coins", currency], () => fetchCoinList(currency), {
    onSuccess: () => message.success("welcome back"),
    onError: (e: any) => {
      message.error("ooppss.. have problem");
    },
  });

export const useFetchCoinDetail = (id?: string) =>
  useQuery(["get-coin-detail", id], () => fetchCoinDetail(id), {
    onError: () => message.error("ooppss.. have problem"),
    onSuccess: () => message.success("successful🥳"),
  });

export const useFetchHistoryCoin = (
  id?: string,
  _currency?: string,
  day?: number
) =>
  useQuery(
    ["history-fetch", id, _currency, day],
    () => fetchHistoryChart(id, _currency, day),
    {
      cacheTime: 0,
    }
  );
