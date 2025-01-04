import React from "react";
import axios from "axios";
import { SideBar } from "./side-bar";

export class Product1 extends React.Component
{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="container-fluid">
                <header className="mt-4">
                    <SideBar title="Shopper." navitems={['Home','Shop','Blog', 'Page', 'Contact']}></SideBar>
                </header>
            </div>
        )
    }
}
