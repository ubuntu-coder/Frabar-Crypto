interface ICoinDetail {
  name: string;
  id: string;
  image: {
    large: string;
  };
  description: {
    en: string;
  };
  market_cap_rank: number;
  market_data: {
    current_price: TCurrencyModel;
    market_cap: TCurrencyModel;
  };
}

interface ICoinProps {
  coinData: ICoinDetail;
}

interface IChartCoin {
  id: string;
}

type TCurrencyModel = {
  usd: number;
  inr: number;
  USD?: number;
  INR?: number;
};

type TCurrency = "USD" | "INR" | "usd" | "inr";
