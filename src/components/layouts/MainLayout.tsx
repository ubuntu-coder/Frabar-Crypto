import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import { Header, PageLoading } from "../common";

import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/config/react-query";

import { UseScrollTop } from "../../helper/hooks/useScrollTop";
import { RecoilRoot } from "recoil";
import { ConfigProvider } from "antd";

const MainLayout = () => {
  return (
    <div className="min-h-[100vh] bg-gray-100 w-full  transition-all duration-700">
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ConfigProvider>
            <Suspense fallback={<PageLoading />}>
              <UseScrollTop />
              <>
                <Header />
                <Outlet />
              </>
            </Suspense>
          </ConfigProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
};

export default MainLayout;
