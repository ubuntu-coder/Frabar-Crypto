import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import { Header, Loading } from "../common";

import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/config/react-query";

import { UseScrollTop } from "../../helper/hooks/useScrollTop";

const MainLayout = () => {
  return (
    <div className="app-container">
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <UseScrollTop />
          <>
            <Header />
            <Outlet />
          </>
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

export default MainLayout;
