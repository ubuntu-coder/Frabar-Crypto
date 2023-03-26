import { Card, Image, Typography } from "antd";
import ReactHtmlParser from "react-html-parser";
import { separator } from "../../../helper/utils";
import { useRecoilState } from "recoil";
import { currencyMode } from "../../../shared/CurrencyMode";

export const CryptoCard = ({ coinData }: ICoinProps) => {
  const [cryptoMode, setCryptoMode] = useRecoilState(currencyMode);

  const className = "flex items-center justify-center text-center mb-4";

  return (
    <Card className="flex flex-col items-center">
      <div className={className}>
        <Image src={coinData.image.large} width={100} alt="img-coin" />
      </div>
      <div className={className}>
        <Typography.Text strong style={{ fontSize: "28px" }}>
          {coinData.name}
        </Typography.Text>
      </div>
      <div className={className}>
        <Typography.Text>
          {ReactHtmlParser(coinData.description.en.split(". ")[0])}
        </Typography.Text>
      </div>

      <div className={className}>
        <Typography.Text>
          <span className="font-bold">Current Price :</span>
          {cryptoMode.symbol + " "}
          {separator(
            cryptoMode.currency === "USD"
              ? coinData.market_data.current_price["usd"]
              : coinData.market_data.current_price["inr"]
          )}
        </Typography.Text>
      </div>
      <div className={className}>
        <Typography.Text>
          <span className="font-bold">Market Cap :</span>
          {cryptoMode.symbol + " "}
          {separator(
            cryptoMode.currency === "USD"
              ? coinData.market_data.market_cap["usd"]
              : coinData.market_data.market_cap["inr"]
          )
            ?.toString()
            .slice(0, -6)}
        </Typography.Text>
      </div>
      <div className={className}>
        <Typography.Text>
          {" "}
          <span className="font-bold">Rank :</span> {coinData.market_cap_rank}
        </Typography.Text>
      </div>
    </Card>
  );
};
