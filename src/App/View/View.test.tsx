import { fireEvent, render, screen } from "@testing-library/react";
import { View } from "./View";
import {IFormData} from "../../Model/Model";

describe("View",()=>{
    it("add",()=>{
        // arrange
        let mock_action_reset=()=>{
        }
        let mock_action_submit=(values:IFormData)=>{
             console.log(values)
        }
        render (<View initial_values={{rows:[]}} total= {6} action_reset={mock_action_reset} action_submit={mock_action_submit} form_data={{rows:[{itemPrice:6,itemtitle:""}]}} validation_schema/>)
        // act
        const btn_add = screen.getByTestId<HTMLButtonElement>("btn-add");
        fireEvent(btn_add, new MouseEvent("click"));
        // assert
        const span_message = screen.getByTestId<HTMLSpanElement>("span-message");
        expect(span_message.innerHTML).toBeDefined();
    })
})