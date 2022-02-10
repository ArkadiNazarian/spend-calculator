import { Sum } from "./Sum";

describe("sum",()=>{
    it("test the sum", ()=>{
        let total = Sum([{itemPrice:8, itemtitle:""}]);
        expect(total).toBe(8);
    });
});
