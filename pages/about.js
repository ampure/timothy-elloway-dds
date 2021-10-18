import React from 'react';
import Image from 'next/image';
import DefaultTemplate from '../components/_App/DefaultTemplate';
import PageBanner from '../components/Common/PageBanner';
import OurExpertise from '../components/Home/OurExpertise';
import Services from '../components/Home/Services';
import FeedbackSlider from '../components/Home/FeedbackSlider';
import LatestBlogPost from '../components/Blog/LatestBlogPost';

// data
import { getPage, getChildren, getAllPosts } from '../lib/api';

const About = ({ about, contact, services, latestBlogs, testimonials }) => {
    return (
        <DefaultTemplate
            contact={contact}
            seo={about?.seo}
            servicesNav={services}
        >
            <PageBanner
                pageTitle="About"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About"
                bgImage="page-title-one"
            />

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="about-left">
                                    {/* <img src="/images/about1.jpg" alt="About" /> */}
                                    <Image
                                        className="banner-image"
                                        src={
                                            about?.customFields?.headerimage
                                                ?.sourceUrl
                                        }
                                        title={
                                            about?.customFields?.headerimage
                                                ?.title
                                        }
                                        width={
                                            about?.customFields?.headerimage
                                                ?.mediaDetails?.width
                                        }
                                        height={
                                            about?.customFields?.headerimage
                                                ?.mediaDetails?.height
                                        }
                                        alt={
                                            about?.customFields?.headerimage
                                                ?.mediaDetails?.altText
                                        }
                                    />
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
                                        __html: about?.content,
                                    }}
                                />
                                {/* <ul>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Browse Our Website
                                    </li>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Choose Service
                                    </li>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Send Messege
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="counter-area counter-bg counter-area-four">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-patient-bed"></i>
                                <h3 className="counter">850</h3>
                                <p>Patients Beds</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-people"></i>
                                <h3>
                                    <span className="counter">25000</span>+
                                </h3>
                                <p>Happy Patients</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-Dentist-alt"></i>
                                <h3 className="counter">750</h3>
                                <p>Dentists & Nurse</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-badge"></i>
                                <h3 className="counter">18</h3>
                                <p>Year Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OurExpertise />

            <Services services={services} />

            <FeedbackSlider testimonials={testimonials} />

            <LatestBlogPost posts={latestBlogs} />
        </DefaultTemplate>
    );
};

export default About;

export const getStaticProps = async () => {
    const about = await getPage('about');
    const contact = await getPage('contact');
    const services = await getChildren('services');
    const latestPosts = await getAllPosts(3);
    const testimonials = await getPage('testimonials');

    return {
        props: {
            latestBlogs: latestPosts,
            about: about?.page ? about.page : {},
            contact: contact?.page ? contact.page?.contact : {},
            testimonials: testimonials?.page
                ? testimonials.page?.testimonials?.testimonials
                : {},
            services: services?.page?.children?.nodes
                ? services?.page?.children?.nodes
                : {},
        },
    };
};
