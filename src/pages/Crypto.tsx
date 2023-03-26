import { useNavigate, useParams } from "react-router-dom";
import { PageLoading } from "../components/common";
import { CryptoCard } from "../components/section/cryptoDetail/CryptoCard";
import { CryptoChart } from "../components/section/cryptoDetail/CryptoChart";
import { useFetchCoinDetail } from "../services/requests/useCRUDCoins";

function CryptoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: coinData, isLoading } = useFetchCoinDetail(id);

  if (isLoading) {
    return <PageLoading />;
  }

  if (!isLoading && coinData?.status !== 200) {
    navigate("/404");
  }

  return !isLoading && coinData?.status == 200 ? (
    <div className="container max-w-7xl mx-auto w-full md:p-10 grid grid-cols-7 gap-x-4 min-h-[80vh] ">
      <div className="col-span-full md:col-span-2">
        <CryptoCard coinData={coinData?.data} />
      </div>
      <div className="col-span-full md:col-span-5 h-full">
        <CryptoChart id={coinData?.data.id} />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default CryptoDetail;
