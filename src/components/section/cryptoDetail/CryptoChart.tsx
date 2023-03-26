import { useFetchHistoryCoin } from "../../../services/requests/useCRUDCoins";
import { PageLoading } from "../../common";
import { useRecoilState } from "recoil";
import { currencyMode } from "../../../shared/CurrencyMode";
import { useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { LargeHeading } from "../../UI/LargeHeading";
import { useViewWidth } from "../../../helper/hooks/useViewWidth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CryptoChart = ({ id }: IChartCoin) => {
  const [cryptoMode, setCryptoMode] = useRecoilState(currencyMode);
  const [day, setDay] = useState<number>(1);
  const { width } = useViewWidth();

  const { data: historyCoin, isLoading } = useFetchHistoryCoin(
    id,
    cryptoMode.currency,
    day
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    !isLoading && (
      <div className="flex rounded-lg items-center justify-start flex-col bg-gray-900">
        <LargeHeading className="mt-10 text-orange-400">
          Tracking Coin{" "}
        </LargeHeading>
        <Line
          className="h-[360px] p-10 mt-10 w-full"
          height={width < 668 ? 360 : 150}
          data={{
            labels: historyCoin?.data?.prices?.map((coin: any) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return day === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historyCoin?.data?.prices?.map((coin: any) => coin[1]),
                label: `Price ( Past ${day} Days ) in ${cryptoMode.currency}`,
                borderColor: "#cf486c",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      </div>
    )
  );
};
