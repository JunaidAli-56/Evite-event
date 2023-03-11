import React from "react";
import { Link } from "react-router-dom";
import svg from './svg'
const Footer = (props) => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer>
                <div className="container-fluid bg-primary text-white">
                    <div className="row footer-lower pt-5">
                        <Link className="navbar-brand mb-3" to="/">
                            <img src="https://static1.squarespace.com/static/58c9e16237c5813452abfd18/t/5ad632391ae6cf3660bdf4d0/1523987004984/pink.png" alt="Bootstrap" width="40" height="40" />
                        </Link>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-contact px-3">
                            <h4>Evite</h4>
                            <ul>

                                <li>

                                </li>
                                <li className="text-start">
                                    <span className="text-center">
                                        Event planners must also have excellent communication and interpersonal skills to work with clients, vendors, and other event staff. They need to be able to handle unexpected situations and problem-solve quickly to ensure the event goes off without a hitch.
                                    </span>
                                </li>
                                <li><Link to="">evite@example.com</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-info">
                            <h5>information</h5>
                            <ul>
                                <li>
                                    <li><Link>Terms of Service</Link></li>
                                    <li><Link>Shipping Policy</Link></li>
                                    <li><Link>Refund Policy</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Blogs</Link></li>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-acc">
                            <h5>account</h5>
                            <ul>
                                <li>
                                    <li><Link>Size Chat</Link></li>
                                    <li><Link>About us</Link></li>
                                    <li><Link>Contact</Link></li>
                                    <li><Link>Search</Link></li>
                                    <li><Link>Faq</Link></li>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-quickLinks">
                            <h5>quick links</h5>
                            <ul>
                                <li>
                                    <li><Link>Smart Watches</Link></li>
                                    <li><Link>Headphones</Link></li>
                                    <li><Link>Accessories</Link></li>
                                    <li><Link>Laptops</Link></li>
                                    <li><Link>Tablets</Link></li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row icon-row">
                        <div className="col py-3">
                            <ul>
                                <li><Link><i className="bi bi-facebook"></i></Link></li>
                                <li><Link><i className="bi bi-skype"></i></Link></li>
                                <li><Link><i className="bi bi-youtube"></i></Link></li>
                                <li><Link><i className="bi bi-twitter"></i></Link></li>
                                <li><Link><i className="bi bi-pinterest"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row copyright-row pt-4">
                        <hr />
                        <div className="row d-flex justify-content-between">
                            <div className="col-4 col-sm-6 ps-3 py-4">
                                <p> &copy; {year} - All Right Reserved.</p>
                            </div>
                            <div className="col-4 pay-icon d-flex justify-content-end pe-3 pt-4">
                                {svg.map((props, i) => {
                                    return (
                                        <div className="px-1" key={i}>
                                            {props.image}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
