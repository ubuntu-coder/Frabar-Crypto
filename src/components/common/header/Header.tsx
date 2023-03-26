import { Link } from "react-router-dom";
import { Image, Select } from "antd";
import Logo from "../../../assets/images/dolar.svg";
import { CURRENCY_MODE, CURRENCY_SYMBOL } from "../../../helper/constant";
import { useRecoilState } from "recoil";
import { currencyMode } from "../../../shared/CurrencyMode";

export const Header = () => {
  const [cryptoMode, setCryptoMode] = useRecoilState(currencyMode);

  return (
    <header className="backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full  flex justify-between p-10 items-center">
        <Link to={"/"}>
          <div className="text-center  text-2xl flex items-center">
            <h1 className="underline decoration-6 decoration-orange-400 mr-2">
              FRABAR
            </h1>
            <Image
              src={Logo}
              width={25}
              alt="logo"
              className="hidden md:inline"
            />{" "}
          </div>
        </Link>
        <Select
          options={CURRENCY_MODE}
          className="w-full  md:w-[160px] text-[14px] headerTableSelect status-select-input "
          size="large"
          showSearch
          defaultValue={CURRENCY_MODE[0]}
          style={{ fontSize: "10px !important" }}
          onChange={(option: { value: string; label: React.ReactNode }) => {
            const value = option.toString();
            setCryptoMode({
              currency: value,
              symbol:
                value == "INR" ? CURRENCY_SYMBOL.INR : CURRENCY_SYMBOL.USD,
            });
          }}
        />
      </div>
    </header>
  );
};
