import React from "react";

export class MountClassDemo extends React.Component
{
    constructor(){
        super()
        this.state = {
            ProductName: "Samsung TV",
            Cities : ["Delhi", "Hyd"],
            Rating: {Rate:4.2}
        }
    }
    componentDidMount() {
        this.setState({
            ProductName : 'Samsung LED TV',
            Rating: {Rate: 4.9}
        })
    }
    render(){
        return(
            <div className="container-fluid">
            <h3>Product Class Component</h3>
            <dl>
                <dt>Product Name</dt>
                <dd>{this.state.ProductName}</dd>
                <dt>Cities</dt>
                <dd>
                    {
                        this.state.Cities.map(city=> <li key={city}>{city}</li>)
                    }
                </dd>
                <dt>Rating</dt>
                <dd>
                    {this.state.Rating.Rate}
                </dd>
            </dl>
        </div>
        )
    }
}