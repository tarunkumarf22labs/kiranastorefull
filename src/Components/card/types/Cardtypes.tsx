import {RootObject} from "../../../types/typeinterface"
export type Cardtypes = {
value : RootObject , 
handleDelete : (id : string) =>  void        ,
handleModal :  ( value : RootObject) => void ,
click : number ,
// handleClick : ( index : number  ) => void  ,
id :  number , 
setclick :  React.Dispatch<React.SetStateAction<number>>
}