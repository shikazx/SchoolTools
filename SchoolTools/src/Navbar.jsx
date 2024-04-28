import { Route, Routes } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>
                <a href = "/"> SchoolTools </a>
            </h1>
            <div className = "links">
                <a href = "/"> Home</a>
                <a href = "/merge">PDF Merge</a>
                <a href = "/calculator"> Calculate Grades</a>
            </div>
        </nav>



    );
}
 




export default Navbar;