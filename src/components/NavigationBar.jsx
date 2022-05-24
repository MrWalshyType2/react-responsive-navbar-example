import React, { useState } from "react";
import { Link } from 'react-router-dom';
import NavigationLink from "./NavigationLink";

function NavigationBar(props) {

    // state to track whether the nav bar is toggled or not, styling is in the App.css file
    // - false is a closed toggle menu, true is a open toggle menu
    const [toggled, setToggled] = useState(false);

    // use to toggle the menu state
    function toggleMenu(event) {
        setToggled(previousState => {
            return !previousState;
        });
    }

    return (
        <nav id="navbar">
            {/* normal link as it is not for navigation */}
            <Link id='toggle' to="#" onClick={toggleMenu}>MENU</Link>

            {/* navigation links take a prop of toggled to state whether they are visible or not when the toggle menu is active on small displays */}
            <NavigationLink to="/" value="Home" toggled={toggled} />
            <NavigationLink to="/about" value="About" toggled={toggled} />
        </nav>
    )
}

export default NavigationBar;