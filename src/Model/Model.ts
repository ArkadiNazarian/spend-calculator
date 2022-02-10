export interface Iprops{
 total:number,
 action_reset:Function,
 action_submit:Function,
 validation_schema:any,
 form_data:IFormData
}

export interface IFormData{
  rows:IRowData[]
}

export interface IRowData{
  itemtitle:string,
  itemPrice:number
}