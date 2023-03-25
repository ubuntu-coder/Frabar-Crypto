interface ICoin {
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  id: string;
}

interface IHeaderTable {
  tablePrams: ITableParams;
  setTableParams: React.Dispatch<React.SetStateAction<ITableParams>>;
  startTransition: React.TransitionStartFunction;
}

interface ITableParams {
  currencyMode: TCurrencyMode;
  search: string;
}

type TCurrencyMode = "USD" | "INR";

interface ITableData {
  columns: Array<object>;
  data?: Array<object>;
  rowSelection?: object;
  loading?: boolean;
  pagination?: object;
  header?: React.ReactNode;
  scroll?:
    | ({
        x?: string | number | true | undefined;
        y?: string | number | undefined;
      } & {
        scrollToFirstRowOnChange?: boolean | undefined;
      })
    | undefined;
  handleClickRow?: (key?: string) => void;
}
