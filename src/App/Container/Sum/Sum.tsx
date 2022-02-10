import {IRowData} from "../../../Model/Model";

export function Sum(rows:IRowData[]){
   let total:number=0;
   rows.forEach((row)=> total +=row.itemPrice);
   return total
}