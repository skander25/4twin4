import {Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {

  return (

    <Navbar>
            <NavLink 
                to="home" 
                style={({ isActive }) => ({color:isActive? "gray": "black"})}
            >
                MyStore
            </NavLink>
            &nbsp;
            <NavLink 
                to="products"
                style={({ isActive }) => ({color:isActive? "gray": "black"})}

            >
                Products
            </NavLink>
        </Navbar>
    
  );
}

export default NavigationBar;