import { Button, Empty, Table } from "antd";

interface RowProps {
  index: number;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
}

type MyRowProps = RowProps & React.HTMLAttributes<HTMLElement>;

export const CustomTable = ({
  data,
  loading,
  columns,
  rowSelection,
  pagination,
  header,
  scroll,
  handleClickRow,
}: ITableData) => {
  return (
    <>
      <Table
        locale={{
          emptyText: () => (
            <Empty
              description="no data"
              className="text-gray-500"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
        dataSource={data}
        loading={loading}
        columns={columns}
        onRow={(record: { key?: string }, index) => {
          return {
            onClick: (e) => {
              handleClickRow && handleClickRow(record?.key);
            },
          };
        }}
        rowSelection={rowSelection}
        pagination={{
          defaultPageSize: 10,
          ...pagination,
          position: ["topCenter"],
        }}
        title={() => header}
        scroll={scroll}
      />
    </>
  );
};
