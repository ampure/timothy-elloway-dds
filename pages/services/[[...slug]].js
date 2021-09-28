import React from 'react';
import Image from 'next/image';
import DefaultTemplate from '../../components/_App/DefaultTemplate';
import PageBanner from '../../components/Common/PageBanner';
import TestimonialSlider from '../../components/Common/TestimonialSlider';
import LatestBlogPost from '../../components/Common/LatestBlogPost';

// data
import { getPage, getChildren } from '../../lib/api';

const ServicesChild = ({ service, contact, servicesNav }) => {
    return (
        <DefaultTemplate
            contact={contact}
            seo={service?.seo}
            servicesNav={servicesNav}
        >
            <PageBanner
                pageTitle={service?.customFields?.h1}
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services"
                bgImage="page-title-four"
            />

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="about-left">
                                    {/* <img src="/images/about1.jpg" alt="About" /> */}
                                    {service?.customFields?.headerimage ? (
                                        <Image
                                            className="banner-image"
                                            src={
                                                service?.customFields
                                                    ?.headerimage?.sourceUrl
                                            }
                                            title={
                                                service?.customFields
                                                    ?.headerimage?.title
                                            }
                                            width={
                                                service?.customFields
                                                    ?.headerimage?.mediaDetails
                                                    ?.width
                                            }
                                            height={
                                                service?.customFields
                                                    ?.headerimage?.mediaDetails
                                                    ?.height
                                            }
                                            alt={
                                                service?.customFields
                                                    ?.headerimage?.mediaDetails
                                                    ?.altText
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
                                        __html: service?.content,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TestimonialSlider />

            <LatestBlogPost />
        </DefaultTemplate>
    );
};

export default ServicesChild;

export const getStaticPaths = async () => {
    const allServices = await getChildren('services');

    return {
        paths: allServices?.page?.children?.nodes?.map((node) => node.uri),
        fallback: 'blocking',
    };
};

export const getStaticProps = async ({ params }) => {
    const service = await getPage(`/services/${params?.slug}`);
    const contact = await getPage('contact');
    const servicesNavItems = await getChildren('services');

    return {
        props: {
            service: service?.page ? service.page : {},
            slugs: params.slug || null,
            contact: contact?.page ? contact.page?.contact : {},
            // TODO FIGURE OUT THE SERVICES NAV!
            servicesNav: servicesNavItems,
        },
        revalidate: 600, // every X seconds, check for updates
    };
};
