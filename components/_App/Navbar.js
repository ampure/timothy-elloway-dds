import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = ({ servicesNav }) => {
    const [menu, setMenu] = React.useState(true);

    const toggleNavbar = () => {
        setMenu(!menu);
    };

    React.useEffect(() => {
        let elementId = document.getElementById('navbar');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                elementId.classList.add('is-sticky');
            } else {
                elementId.classList.remove('is-sticky');
            }
        });
        window.scrollTo(0, 0);
    });

    const classOne = menu
        ? 'collapse navbar-collapse'
        : 'collapse navbar-collapse show';
    const classTwo = menu
        ? 'navbar-toggler navbar-toggler-right collapsed'
        : 'navbar-toggler navbar-toggler-right';

    return (
        <div id="navbar" className="navbar-area sticky-top">
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button
                            onClick={toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link
                                        href="/about"
                                        activeClassName="active"
                                    >
                                        <a
                                            onClick={toggleNavbar}
                                            className="nav-link"
                                        >
                                            About
                                        </a>
                                    </Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="nav-link dropdown-toggle">
                                            Pages
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/appointment" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Appointment</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/departments" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Departments</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/testimonials" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/sign-up" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Sign Up</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/sign-in" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Sign In</a>
                                            </Link>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/faq" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">FAQ's</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/404" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/coming-soon" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/privacy-policy" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/terms-condition" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li> */}

                                <li className="nav-item">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link dropdown-toggle"
                                        >
                                            Services
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        {servicesNav?.map((node, index) => {
                                            return (
                                                <li
                                                    className="nav-item"
                                                    key={index}
                                                >
                                                    <Link
                                                        href={node.slug}
                                                        activeClassName="active"
                                                    >
                                                        <a
                                                            onClick={
                                                                toggleNavbar
                                                            }
                                                            className="nav-link"
                                                        >
                                                            {node.title}
                                                        </a>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>

                                {/* <li className="nav-item">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link dropdown-toggle"
                                        >
                                            Staff
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link
                                                href="/dentists"
                                                activeClassName="active"
                                            >
                                                <a
                                                    onClick={toggleNavbar}
                                                    className="nav-link"
                                                >
                                                    Dentists
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link
                                                href="/staff-details"
                                                activeClassName="active"
                                            >
                                                <a
                                                    onClick={toggleNavbar}
                                                    className="nav-link"
                                                >
                                                    Staff Details
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li> */}

                                <li className="nav-item">
                                    {/* <Link href="#">
                                        <a
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link dropdown-toggle"
                                        >
                                            Blog
                                        </a>
                                    </Link> */}
                                    <Link href="/blog">
                                        <a className="nav-link">Blog</a>
                                    </Link>

                                    {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link
                                                href="/blog"
                                                activeClassName="active"
                                            >
                                                <a
                                                    onClick={toggleNavbar}
                                                    className="nav-link"
                                                >
                                                    Blog
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link
                                                href="/blog-details"
                                                activeClassName="active"
                                            >
                                                <a
                                                    onClick={toggleNavbar}
                                                    className="nav-link"
                                                >
                                                    Blog Details
                                                </a>
                                            </Link>
                                        </li>
                                    </ul> */}
                                </li>

                                <li className="nav-item">
                                    <Link
                                        href="/contact"
                                        activeClassName="active"
                                    >
                                        <a
                                            onClick={toggleNavbar}
                                            className="nav-link"
                                        >
                                            Contact
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-srh">
                            <form>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="search"
                                    placeholder="Search..."
                                />

                                <button className="search-icon icon-search">
                                    <i className="icofont-search-1"></i>
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
