import React from "react";
import { Link } from "react-router-dom";

function Links(){
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/ooga'>Ooga</Link>
            </li>
            <li>
                <Link to='/oogabooga'>OogaBooga</Link>
            </li>
        </ul>
    )
}


export default Links;