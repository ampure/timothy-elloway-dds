import React from 'react';
import Image from 'next/image';
import DefaultTemplate from '../components/_App/DefaultTemplate';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import moment from 'moment';

// data
import { getAllPosts, getPage, getChildren } from '../lib/api';

const Blog = ({
    allPosts: { edges, pageInfo },
    blog,
    contact,
    servicesNav,
}) => {
    return (
        <DefaultTemplate
            contact={contact}
            seo={blog?.seo}
            servicesNav={servicesNav}
        >
            <PageBanner
                pageTitle="Blog"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog"
                bgImage="page-title-four"
            />

            <div className="blog-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {edges.map((post, index) => {
                            return (
                                <>
                                    <div
                                        className="col-12 col-md-6 col-lg-4"
                                        key={index}
                                    >
                                        <div className="blog-item">
                                            <div className="blog-top">
                                                <Link
                                                    href={`/${post?.node.slug}`}
                                                >
                                                    <a>
                                                        <Image
                                                            src={
                                                                post?.node
                                                                    ?.blogCustomFields
                                                                    ?.featuredImageSmall
                                                                    ?.sourceUrl
                                                            }
                                                            title={
                                                                post?.node
                                                                    ?.blogCustomFields
                                                                    ?.featuredImageSmall
                                                                    ?.title
                                                            }
                                                            width={
                                                                post?.node
                                                                    ?.blogCustomFields
                                                                    ?.featuredImageSmall
                                                                    ?.mediaDetails
                                                                    ?.width
                                                            }
                                                            height={
                                                                post?.node
                                                                    ?.blogCustomFields
                                                                    ?.featuredImageSmall
                                                                    ?.mediaDetails
                                                                    ?.height
                                                            }
                                                            alt={
                                                                post?.node
                                                                    ?.blogCustomFields
                                                                    ?.featuredImageSmall
                                                                    ?.mediaDetails
                                                                    ?.altText
                                                            }
                                                        />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="blog-bottom">
                                                <h3>
                                                    <Link
                                                        href={`/${post?.node.slug}`}
                                                    >
                                                        <a>
                                                            {post?.node?.title}
                                                        </a>
                                                    </Link>
                                                </h3>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: post?.node
                                                            ?.excerpt,
                                                    }}
                                                />
                                                <ul>
                                                    <li>
                                                        <Link
                                                            href={`/${post?.node.slug}`}
                                                        >
                                                            <a>
                                                                Read More{' '}
                                                                <i className="icofont-long-arrow-right"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="icofont-calendar"></i>
                                                        {moment(
                                                            post?.node?.date
                                                        ).format('MMM D, YYYY')}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </DefaultTemplate>
    );
};

export default Blog;

export const getStaticProps = async () => {
    const allPosts = await getAllPosts(12); // 12 at a time?
    const blog = await getPage('blog');
    const contact = await getPage('contact');
    const services = await getChildren('services');

    return {
        props: {
            allPosts,
            blog: blog?.page ? blog.page : {},
            contact: contact?.page ? contact.page?.contact : {},
            servicesNav: services?.page?.children?.nodes
                ? services?.page?.children?.nodes
                : {},
        },
        revalidate: 60,
    };
};
