import React from 'react';
import DefaultTemplate from '../components/_App/DefaultTemplate';
import HeroSlider from '../components/Home/HeroSlider';
import AboutOurHospital from '../components/Home/AboutOurHospital';
import OurExpertise from '../components/Home/OurExpertise';
import Services from '../components/Home/Services';
import AboutUs from '../components/Home/AboutUs';
import VideoIntro from '../components/Common/VideoIntro';
import OurDentists from '../components/Common/OurDentists';
import Stats from '../components/Home/Stats';
import FeedbackSlider from '../components/Home/FeedbackSlider';
import LatestBlogPost from '../components/Blog/LatestBlogPost';
import NewsletterForm from '../components/Common/NewsletterForm';

// data
import {
    getPage,
    getChildren,
    getAllPosts,
    getVideoBlade,
    getAboutBlade,
} from '../lib/api';

const Index = ({
    homepage,
    contact,
    services,
    testimonials,
    latestBlogs,
    videoProps,
    aboutProps,
}) => {
    return (
        <DefaultTemplate
            contact={contact}
            seo={homepage?.seo}
            servicesNav={services}
        >
            <HeroSlider slides={homepage?.homepage?.heroslider} />
            {/*
            <MainBanner
                h1={homepage?.customFields?.h1}
                headercontent={homepage?.customFields?.headercontent}
                headerimage={homepage?.customFields?.headerimage}
            />
            <AboutOurHospital />
            <OurExpertise /> */}
            <Services
                services={services}
                header={homepage?.customFields?.servicesBladeHeader}
                count={8}
            />
            <div className="container pb-100">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        {/* <VideoIntro props={videoProps} /> */}

                        <div
                            dangerouslySetInnerHTML={{
                                __html: homepage?.content,
                            }}
                        />
                    </div>
                </div>
            </div>
            {/* <OurDentists />
            <div className="pb-100">
                <Stats />
            </div> */}
            <AboutUs props={aboutProps} />
            <FeedbackSlider testimonials={testimonials} />
            <LatestBlogPost posts={latestBlogs} />
            {/* <NewsletterForm /> */}
        </DefaultTemplate>
    );
};

export default Index;

export const getStaticProps = async () => {
    const home = await getPage('homepage');
    const contact = await getPage('contact');
    const services = await getChildren('services');
    const testimonials = await getPage('testimonials');
    const videoProps = await getVideoBlade();
    const aboutProps = await getAboutBlade();
    const latestPosts = await getAllPosts(3);

    return {
        props: {
            latestBlogs: latestPosts,
            homepage: home?.page ? home.page : {},
            contact: contact?.page ? contact.page?.contact : {},
            testimonials: testimonials?.page
                ? testimonials.page?.testimonials?.testimonials
                : {},
            videoProps: videoProps?.page ? videoProps.page?.videoTabs : {},
            aboutProps: aboutProps?.page ? aboutProps.page?.aboutList : {},
            services: services?.page?.children?.nodes
                ? services?.page?.children?.nodes
                : {},
        },
    };
};
