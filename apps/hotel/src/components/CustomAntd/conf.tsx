import { TablePaginationConfig } from "antd";
import PaginationNextButton from "./PaginationNextButton";
import PaginationPrevButton from "./PaginationPrevButton";

export const paginationConfig: TablePaginationConfig = {
  nextIcon: <PaginationNextButton />,
  prevIcon: <PaginationPrevButton />,
  position: ["bottomCenter"],
};
