import { Alert, Space, Spin } from "antd";

export function PageLoading() {
  return (
    <div className="flex flex-col mt-20 items-center justify-cente mx-auto w-[200px] h-[200px]">
      <Space>
        <Spin size="large">
          <div className="content" />
        </Spin>
      </Space>
    </div>
  );
}
