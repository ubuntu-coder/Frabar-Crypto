import { Link } from "react-router-dom";
import { Image } from "antd";
import Logo from "../../../assets/images/dolar.svg";

export const Header = () => {
  return (
    <header className="backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full  flex justify-between p-10 items-center">
        <Link to={"/"}>
          <div className="text-center  text-2xl flex items-center">
            <h1 className="underline decoration-6 decoration-orange-400 mr-2">
              FRABAR
            </h1>
            <Image src={Logo} width={25} alt="logo" />{" "}
          </div>
        </Link>
        <div className="flex items-center justify-end space-x-2"></div>
      </div>
    </header>
  );
};
