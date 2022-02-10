import { useState } from "react";
import{Iprops,IRowData,IFormData} from "../../Model/Model";
import *as yup from "yup";
import { Sum } from "./Sum/Sum";

export function Container(){
    const [current_sum, setSum]= useState<number | undefined>();
    const [items,setItems]=useState<IRowData[]>([]);
    const validation_schema=yup.object().shape({
        rows:yup.array()
        .of(
            yup.object().shape({
                itemtitle:yup.string(),
                itemPrice:yup.number().min(0)
            })
        )
        .required()
    });
    const action_submit=(values:IFormData)=>{
        let sum= Sum(values.rows);
        setSum(sum);
        let newList = [...items];
        newList.push({} as IRowData);
        setItems(newList)
    };
    const action_reset=()=>{
        setItems([]);
        setSum(0);
    };
    return{
        total:current_sum,
        form_data:{rows:items},
        action_reset,
        action_submit,
        validation_schema
    } as Iprops;
};