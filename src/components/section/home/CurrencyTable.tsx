import { CustomTable } from "../../UI/CustomTable";
import { useGenerateCoins } from "./useGenerateCoins";
import { Input, Select } from "antd";
import { CURRENCY_MODE, CURRENCY_SYMBOL } from "../../../helper/constant";
import { useRecoilState } from "recoil";
import { currencyMode } from "../../../shared/CurrencyMode";
import { useNavigate } from "react-router-dom";

export const HeaderTable = ({
  setTableParams,
  tablePrams,
  startTransition,
}: IHeaderTable) => {
  const [cryptoMode, setCryptoMode] = useRecoilState(currencyMode);

  return (
    <div className="flex flex-col items-center gap-4 md:gap-10 md:flex-row">
      <Input.Search
        onChange={(e) => {
          startTransition(() => {
            setTimeout(() => {
              setTableParams({ ...tablePrams, search: e.target.value });
            }, 750);
          });
        }}
        className="flex-1 flex items-center justify-center py-2 border-none"
        size="large"
        placeholder="Search coins.."
      />
    </div>
  );
};

export const CurrencyTable = () => {
  const navigate = useNavigate();

  const {
    columns,
    data,
    isLoading,
    setTablePrams,
    tablePrams,
    isPending,
    startTransition,
  } = useGenerateCoins();

  const handleRowSelect = (key?: string) => {
    navigate(`cryptoDetail/${key}`);
  };

  return (
    <div>
      <CustomTable
        columns={columns}
        data={data}
        loading={isLoading || isPending}
        handleClickRow={handleRowSelect}
        header={
          <HeaderTable
            tablePrams={tablePrams}
            setTableParams={setTablePrams}
            startTransition={startTransition}
          />
        }
      />
    </div>
  );
};
