import React from "react";
import { Link } from 'react-router-dom';

function NavigationLink({ to, value, toggled }) {

    return (
        // change class name based on whether the navigation menu containing the link is toggled open or not
        <Link className={toggled ? "show nav-link" : "nav-link"} 
              to={to}>
            {value}
        </Link>
    )
}

export default NavigationLink;