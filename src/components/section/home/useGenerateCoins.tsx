import { useState, useTransition, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetchCoins } from "../../../services/requests/useCRUDCoins";
import { useRecoilState } from "recoil";

import { currencyMode } from "../../../shared/CurrencyMode";
import { separator } from "../../../helper/utils";

import { Image, Typography } from "antd";

export const useGenerateCoins = () => {
  const navigate = useNavigate();

  const [cryptoMode, setCurrency] = useRecoilState(currencyMode);

  const { data: coinsList, isLoading } = useFetchCoins(cryptoMode.currency);

  const [isPending, startTransition] = useTransition();

  const [tablePrams, setTablePrams] = useState<ITableParams>({
    search: "",
    currencyMode: "INR",
  });

  const columns = [
    {
      title: "Coin + price",
      dataIndex: "coinPrice",
      key: "coinPrice",
      responsive: ["xs"],
    },
    {
      title: "Coin",
      dataIndex: "coin",
      key: "coin",
      responsive: ["sm"],
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      responsive: ["sm"],
    },
    {
      title: "Day change",
      dataIndex: "changePercent",
      key: "changePercent",
    },
    {
      title: "Market Cap",
      dataIndex: "marketCap",
      key: "marketCap",
    },
  ];

  const getCoins = () => {
    return coinsList?.data?.filter(
      (coin: ICoin) =>
        coin.name.toLowerCase().includes(tablePrams.search) ||
        coin.symbol.toLowerCase().includes(tablePrams.search)
    );
  };

  const data = getCoins()?.map((coinData: ICoin) => ({
    key: coinData.id,
    coinPrice: (
      <div className="flex items-center flex-col">
        <div className="flex items-center gap-x-2">
          <div className="flex flex-col items-center">
            <Image src={coinData.image} width={30} alt={coinData.name} />
            <Typography.Text
              strong
              style={{
                textTransform: "uppercase",
                fontSize: 18,
              }}
            >
              {coinData.symbol}
            </Typography.Text>
            <Typography.Text strong style={{ color: "darkgrey" }}>
              {coinData.name}
            </Typography.Text>
            <Typography.Text strong style={{ fontSize: "20" }}>
              {cryptoMode.symbol + " "}
              {separator(coinData.current_price.toFixed(2))}
            </Typography.Text>
          </div>
        </div>
      </div>
    ),
    coin: (
      <div className="flex items-center gap-x-3">
        <Image src={coinData.image} width={50} alt={coinData.name} />
        <div className="flex flex-col">
          <Typography.Text
            strong
            style={{
              textTransform: "uppercase",
              fontSize: 22,
            }}
          >
            {coinData.symbol}
          </Typography.Text>
          <Typography.Text strong style={{ color: "darkgrey" }}>
            {coinData.name}
          </Typography.Text>
        </div>
      </div>
    ),
    price: (
      <Typography.Text strong style={{ fontSize: "20" }}>
        {cryptoMode.symbol + " "}
        {separator(coinData.current_price.toFixed(2))}
      </Typography.Text>
    ),
    changePercent: (
      <Typography.Text
        strong
        className={`${
          coinData.price_change_percentage_24h > 0
            ? "text-blue-700"
            : "text-red-600"
        } font-bold`}
      >
        {coinData.price_change_percentage_24h.toFixed(2)}%
      </Typography.Text>
    ),
    marketCap: (
      <Typography.Text strong>
        {cryptoMode.symbol + " "}
        {separator(coinData.current_price.toFixed(2))}
      </Typography.Text>
    ),
  }));

  return {
    tablePrams,
    setTablePrams,
    data,
    columns,
    isLoading,
    isPending,
    startTransition,
  };
};
