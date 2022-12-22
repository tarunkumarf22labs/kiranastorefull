import {RootObject} from "../../../types/typeinterface"

export type Hometype = {
data: RootObject[];
  curretpage: number;
  handleclick: (id: number) => void; 
}
export type cardmodaltype = {
  close: () => void;
  show: boolean;
  modalval: RootObject;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleedit: (id: string) => void;
};