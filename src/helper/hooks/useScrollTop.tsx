import { FC, useEffect } from "react";

import { useLocation } from "react-router";

export const UseScrollTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, [pathname]);

  return null;
};
