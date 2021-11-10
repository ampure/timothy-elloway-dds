import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Image from 'next/image';

const LatestBlogPost = ({ posts: { edges, pageInfo } }) => {
    return (
        <div className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Latest Blogs</h2>
                </div>

                <div className="row">
                    {edges.map((post, index) => {
                        return (
                            <div
                                className="col-12 col-md-6 col-lg-4"
                                key={index}
                            >
                                <div className="blog-item">
                                    <div className="blog-top">
                                        {/* <Link
                                                href={`/blog/${post?.node.slug}`}
                                            > */}
                                        {post?.node?.blogCustomFields
                                            ?.featuredImageSmall?.sourceUrl ? (
                                            <Link href={`/${post?.node.slug}`}>
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
                                        ) : null}
                                    </div>

                                    <div className="blog-bottom">
                                        <h3>
                                            <Link href={`/${post?.node.slug}`}>
                                                <a>{post?.node?.title}</a>
                                            </Link>
                                        </h3>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: post?.node?.excerpt,
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LatestBlogPost;
