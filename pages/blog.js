import React from 'react';
import Image from 'next/image';
import DefaultTemplate from '../components/_App/DefaultTemplate';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import moment from 'moment';

// data
import { getAllPosts, getPage, getChildren } from '../lib/api';

const Blog = (
    { allPosts: { edges, pageInfo } },
    blog,
    contact,
    servicesNav
) => {
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
                        {edges.map((post) => {
                            console.warn(post);
                            return (
                                <>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="blog-item">
                                            <div className="blog-top">
                                                <Link
                                                    href={`/blog/${post?.node.slug}`}
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
                                                        href={`/blog/${post?.node.slug}`}
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
                                                            href={`/blog/${post?.node.slug}`}
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
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img
                                                src="/images/blog/blog1.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                    </Link>
                                </div>

                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                In this hospital there are
                                                special surgeon.
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum is dolor sit amet, csectetur
                                        adipiscing elit, dolore smod tempor
                                        incididunt ut labore et....
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More{' '}
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img
                                                src="/images/blog/blog2.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                World AIDS Day, designated on 1
                                                December
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum is dolor sit amet, csectetur
                                        adipiscing elit, dolore smod tempor
                                        incididunt ut labore et....
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More{' '}
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img
                                                src="/images/blog/blog3.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                More than 80 clinical trials
                                                launch to test coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum is dolor sit amet, csectetur
                                        adipiscing elit, dolore smod tempor
                                        incididunt ut labore et....
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More{' '}
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img
                                                src="/images/blog/blog4.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                We always give the best from us
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum is dolor sit amet, csectetur
                                        adipiscing elit, dolore smod tempor
                                        incididunt ut labore et....
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More{' '}
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img
                                                src="/images/blog/blog5.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                Be aware about the coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum is dolor sit amet, csectetur
                                        adipiscing elit, dolore smod tempor
                                        incididunt ut labore et....
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More{' '}
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img
                                                src="/images/blog/blog6.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                No one find any medicines to
                                                prevent evolovirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum is dolor sit amet, csectetur
                                        adipiscing elit, dolore smod tempor
                                        incididunt ut labore et....
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More{' '}
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img
                                                src="/images/blog/blog7.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                Thailand is trying to make
                                                vaccine of coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum is dolor sit amet, csectetur
                                        adipiscing elit, dolore smod tempor
                                        incididunt ut labore et....
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More{' '}
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img
                                                src="/images/blog/blog8.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                Already 1932 people have died in
                                                China
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum is dolor sit amet, csectetur
                                        adipiscing elit, dolore smod tempor
                                        incididunt ut labore et....
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More{' '}
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 offset-md-3 offset-lg-0 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img
                                                src="/images/blog/blog9.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                30+ countries have affected by
                                                coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum is dolor sit amet, csectetur
                                        adipiscing elit, dolore smod tempor
                                        incididunt ut labore et....
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More{' '}
                                                    <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
    const servicesNavItems = await getChildren('services');

    return {
        props: {
            allPosts,
            blog: blog?.page ? blog.page : {},
            contact: contact?.page ? contact.page?.contact : {},
            servicesNav: servicesNavItems,
        },
        revalidate: 60,
    };
};
