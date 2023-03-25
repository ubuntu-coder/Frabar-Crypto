import { atom } from "recoil";

export const currencyMode = atom({
  key: "currencyMode",
  default: {
    currency: "INR",
    symbol: "₹",
  },
});
