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
                    <nav className="navbar navbar-expand-lg navbar-light ms-auto">
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
                            <ul className="navbar-nav ml-auto mx-none">
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

                                <li className="nav-item">
                                    <Link href="/services">
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
                                                            {node.title.replace(
                                                                /\sin.*/i,
                                                                ''
                                                            )}
                                                        </a>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/blog">
                                        <a className="nav-link">Blog</a>
                                    </Link>
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
                        {/* 
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
                        </div> */}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
