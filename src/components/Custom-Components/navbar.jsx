export function NavBar(props){
    return (
         <div className="container-fluid">
            <nav className={`d-flex justify-content-between p-2 border border-1 ${props.Theme}`} >
                <div>
                    <span className="fw-bold fs-5"> {props.BrandTitle} </span>
                </div>
                <div>
                    {
                        props.MenuItems.map(item=><span key={item} className="px-3"> {item}</span>)
                    }
                </div>
                <div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}