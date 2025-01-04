import { DataGrid } from "./data-grid";

export function Home(){
    return(
        <div className="container-fluid">
           <DataGrid caption="Employee Details" fields={['EmployeeId', 'Name', 'Salary']} data={[{EmployeeId:101, Name:'Samson', Salary: 45000}]} />
           <DataGrid caption="Products Details" fields={['Id', 'Name', 'Price', 'Stock']} data={[{Id:1, Name:'Samsung TV', Price:24000, Stock:'Availabe'}, {Id:2, Name:'Mobile', Price:12000, Stock:'Out of Stock'}]} />
        </div>
    )
}