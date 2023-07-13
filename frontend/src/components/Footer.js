import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-mm">
                <div className="footer-link">
                    <div className="footer-link-div">
                        <h4>Footer</h4>
                        <a href="/home">
                            <p>home</p>
                        </a>
                        <a href="/about">
                            <p>about</p>
                        </a>
                        <a href="/register">
                            <p>register</p>
                        </a>
                    </div>
                    </div>
                    
                    <div className="footer-link-div">
                        <h4>company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    </div>
                    <div className="below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie</p></div></a>
                    </div>
                </div>
    )
}
export default Footer;