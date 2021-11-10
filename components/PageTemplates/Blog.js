import React from 'react';
import DefaultTemplate from '../_App/DefaultTemplate';
import BlogSidebar from '../Blog/BlogSidebar';
import LatestBlogPost from '../Blog/LatestBlogPost';
import moment from 'moment';

const BlogDetails = ({
    blog,
    contact,
    servicesNav,
    categories,
    latestPosts,
}) => {
    // console.warn(blog);
    return (
        <DefaultTemplate
            contact={contact}
            seo={blog?.seo}
            servicesNav={servicesNav}
        >
            {/* <PageBanner
                pageTitle={`${blog?.title}`}
                homePageUrl="/blog"
                homePageText="Blog"
                activePageText={`${blog?.title}`}
                bgImage="page-title-four"
            /> */}

            <div className="blog-details-area pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-item">
                                <div className="blog-details-img">
                                    {blog?.blogCustomFields
                                        ?.featuredImageLarge ? (
                                        <Image
                                            src={
                                                blog?.blogCustomFields
                                                    ?.featuredImageLarge
                                                    ?.sourceUrl
                                            }
                                            title={
                                                blog?.blogCustomFields
                                                    ?.featuredImageLarge?.title
                                            }
                                            width={
                                                blog?.blogCustomFields
                                                    ?.featuredImageLarge
                                                    ?.mediaDetails?.width
                                            }
                                            height={
                                                blog?.blogCustomFields
                                                    ?.featuredImageLarge
                                                    ?.mediaDetails?.height
                                            }
                                            alt={
                                                blog?.blogCustomFields
                                                    ?.featuredImageLarge
                                                    ?.mediaDetails?.altText
                                            }
                                        />
                                    ) : (
                                        <></>
                                    )}
                                    <h2>{blog?.title}</h2>

                                    <ul>
                                        <li>
                                            <a
                                                href={`/bio/${blog?.author?.node?.slug}`}
                                            >
                                                <i className="icofont-businessman"></i>{' '}
                                                {blog?.author?.node?.name}
                                            </a>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            {moment(blog?.date).format(
                                                'MMM D, YYYY'
                                            )}
                                        </li>
                                    </ul>

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: blog?.content,
                                        }}
                                    />
                                </div>

                                {/* <div className="blog-details-previous">
                                    
                                    <div className="prev-next">
                                        <ul>
                                            <li>
                                                <a href="#">Previous</a>
                                            </li>
                                            <li>
                                                <a href="#">Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>

                            {/* <CommentForm /> */}
                        </div>

                        <div className="col-lg-4">
                            <BlogSidebar categories={categories} />
                        </div>
                    </div>
                </div>
            </div>

            <LatestBlogPost posts={latestPosts} />
        </DefaultTemplate>
    );
};

export default BlogDetails;
