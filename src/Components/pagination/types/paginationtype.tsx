import {} from "../../../types/typeinterface";

export type Paginationtypeprops = {
  totalpost: number;
  postperpage: number;
  handleclick: (page: number) => void;
};
