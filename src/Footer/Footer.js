import React from "react";
import './Footer.scss';

const Footer = () => {
    if (window.location.pathname === '/login') return null;
    return (
        <div className="footer">
            Version 0.0.0 © Copyright YEAR, The Nielsen Company. The Science Behind What’s Next™. All Rights Reserved. Privacy Policy. Terms of Use.
        </div>
    )
}

export default Footer