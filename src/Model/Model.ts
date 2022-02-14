export interface Iprops{
 total:number,
 action_reset:Function,
 action_submit:Function,
 validation_schema:any,
 form_data:IFormData,
 initial_values:IFormData
}

export interface IFormData{
  rows:IRowData[]
}

export interface IRowData{
  itemtitle:string,
  itemPrice:number
}



// function Add<T>(a:T,b:T):T{
//   return a+b;
// }

// Add<string>("bt","ff")
// Add<number>(1,2)
