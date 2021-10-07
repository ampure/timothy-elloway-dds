import React from 'react';
import Image from 'next/image';
import DefaultTemplate from '../_App/DefaultTemplate';
import TestimonialSlider from '../Common/TestimonialSlider';
import LatestBlogPost from '..//Blog/LatestBlogPost';

const DefaultPage = ({ page, contact, servicesNav, latestPosts }) => {
    return (
        <DefaultTemplate
            contact={contact}
            seo={page?.seo}
            servicesNav={servicesNav}
        >
            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="about-left">
                                    {/* <img src="/images/about1.jpg" alt="About" /> */}
                                    {page?.customFields?.headerimage ? (
                                        <Image
                                            className="banner-image"
                                            src={
                                                page?.customFields?.headerimage
                                                    ?.sourceUrl
                                            }
                                            title={
                                                page?.customFields?.headerimage
                                                    ?.title
                                            }
                                            width={
                                                page?.customFields?.headerimage
                                                    ?.mediaDetails?.width
                                            }
                                            height={
                                                page?.customFields?.headerimage
                                                    ?.mediaDetails?.height
                                            }
                                            alt={
                                                page?.customFields?.headerimage
                                                    ?.mediaDetails?.altText
                                            }
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-item about-right">
                                <img
                                    src="/images/about-shape1.png"
                                    alt="About"
                                />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: page?.content,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TestimonialSlider />

            <LatestBlogPost posts={latestPosts} />
        </DefaultTemplate>
    );
};

export default DefaultPage;
