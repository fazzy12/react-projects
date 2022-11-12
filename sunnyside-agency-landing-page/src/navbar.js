import React from "react";

export default function Navbar() {
    return (
        <div>
            <div className="nav-container">
                <img src='../images/logo.svg' alt="logo icon" className="nav--logo" />
                <nav>
                    <ul className="nav--items">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#"> Services</a>
                        </li>
                        <li>
                            <a href="#"> Projects</a>
                        </li>
                    </ul>
                </nav>
                <button className="nav--button">Contact</button>
            </div>
        </div>
    );
}