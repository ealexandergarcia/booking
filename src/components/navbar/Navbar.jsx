import "./navbar.css";

const Navbar =()=>{
    return(
        <div className="navBar">
            <div className="navContainer">
                <span className="logo">Edaxbooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar