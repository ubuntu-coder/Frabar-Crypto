import { atom } from "recoil";

export const currencyMode = atom({
  key: "currencySymbol",
  default: {
    currency: "INR",
    symbol: "₹",
  },
});
