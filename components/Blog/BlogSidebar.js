import React from 'react';

const BlogSidebar = ({ categories }) => {
    return (
        <div className="blog-details-item">
            {/* <div className="blog-details-search">
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                    />
                    <button type="submit" className="btn blog-details-btn">
                        <i className="icofont-search-1"></i>
                    </button>
                </form>
            </div> */}

            {/* <div className="blog-details-recent">
                <h3>Recent Blogs</h3>
                <ul>
                    <li>
                        <img src="/images/blog/blog1.jpg" alt="Recent" />
                        <a href="/blog-details">
                            World AIDS Day, designated on 1 December.
                        </a>
                        <ul>
                            <li>
                                <a href="/blog">
                                    <i className="icofont-businessman"></i>{' '}
                                    Admin
                                </a>
                            </li>
                            <li>
                                <i className="icofont-calendar"></i> Jan 03,
                                2020
                            </li>
                        </ul>
                    </li>
                   
                </ul>
            </div> */}

            {/* <div className="blog-details-category">
                <h3>Category</h3>
                <ul>
                    <li>
                        <a href="/blog">Health Care</a>
                    </li>
                    <li>
                        <a href="/blog">Medical science</a>
                    </li>

                </ul>
            </div> */}

            <div className="blog-details-tags">
                <h3>Categories</h3>
                <ul>
                    {categories?.edges?.map((category, index) => {
                        return (
                            <li className="" key={index}>
                                <a
                                    href={`/blog/category/${category.node.slug}`}
                                >
                                    {category.node.name}
                                </a>
                                {/* 
                                {category.node.children.edges.length > 0 ? (
                                    <FontAwesomeIcon icon={faAngleDown} />
                                ) : (
                                    ''
                                )}
                                <ul className="Blog__Categories-Children hide font-light">
                                    {category.node.children.edges.map(
                                        (child, index) => {
                                            return (
                                                <li key={index} className="h4">
                                                    <Link href={child.node.uri}>
                                                        <>{child.node.name}</>
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul> */}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BlogSidebar;
