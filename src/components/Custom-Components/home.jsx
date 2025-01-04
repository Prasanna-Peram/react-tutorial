import { NavBar } from "./navbar.jsx";

export function Home(){
    return(
        <div className="container-fluid">
            <h3>Amazon</h3>
            <NavBar Theme="bg-dark text-white" BrandTitle="Amazon" MenuItems={["Home", "Shop", "Contact", "Offers", "Sale"]} />
            <h3>Flipkart</h3>
            <NavBar Theme="bg-success text-white" BrandTitle="Flipkart" MenuItems={["Home", "Deals", "Electronics", "Fashion"]} />
        </div>
    )
}