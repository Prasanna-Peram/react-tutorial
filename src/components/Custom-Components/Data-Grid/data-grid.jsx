export function DataGrid(props){
    return(
        <div className="container-fluid">
            <table className="table table-hover caption-top">
                <caption>{props.caption}</caption>
                <thead>
                    <div>
                        <button data-bs-target="#AddNew" data-bs-toggle="modal" className="btn btn-primary"> + New</button>
                        <div className="modal fade" id="AddNew">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>Add New {props.caption} </h3>
                                </div>
                                <div className="modal-body">
                                    <dl>
                                        {
                                            props.fields.map(field=>
                                                <div key={field}>
                                                    <dt>{field}</dt>
                                                    <dd><input type="text" name={field} /></dd>
                                                </div>
                                            )
                                        }
                                    </dl>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <tr>
                        {
                            props.fields.map(field=><th key={field}> {field} <div className="dropdown d-inline"> <button data-bs-toggle="dropdown" data-bs-target="#menu" className="btn dropdown-toggle" ></button> <ul className="dropdown-menu" id="menu"> <li className="dropdown-item"> <span className="bi bi-sort-alpha-down"></span> Sort Ascending </li> <li className="dropdown-item"> <span className="bi bi-sort-alpha-up"></span> Sort Descending </li> </ul> </div> </th>)
                        }
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(item=>
                            <tr key={item}> 
                                {
                                    Object.keys(item).map(key => <td key={key}> {item[key]} </td> )
                                }
                                <td> <button className="btn btn-warning bi bi-pen-fill"></button> <button className="btn btn-danger bi bi-trash-fill"></button> </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
