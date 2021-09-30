import React from 'react';
import DefaultTemplate from '../../components/_App/DefaultTemplate';
// import PageBanner from '../../components/Common/PageBanner';
// import CommentForm from '../../components/Blog/CommentForm';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import LatestBlogPost from '../../components/Blog/LatestBlogPost';
import moment from 'moment';

// data
import {
    getPost,
    getPage,
    getChildren,
    getAllCategoriesWithSlug,
    getAllPosts,
} from '../../lib/api';

const BlogDetails = ({
    blog,
    contact,
    servicesNav,
    categories,
    latestPosts,
}) => {
    console.warn(latestPosts);
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
                                            <a href="/blog">
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

export async function getServerSideProps({ params }) {
    const page = params?.slug;
    const contact = await getPage('contact');
    const services = await getChildren('services');
    const categories = await getAllCategoriesWithSlug();
    const blog = await getPost(`${page}`);
    const latestPosts = await getAllPosts(3);

    return {
        props: {
            categories,
            blog: blog?.post,
            latestPosts: latestPosts,
            contact: contact?.page ? contact.page?.contact : {},
            servicesNav: services?.page?.children?.nodes
                ? services?.page?.children?.nodes
                : {},
        },
    };
}
