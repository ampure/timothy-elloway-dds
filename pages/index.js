import React from 'react';
import DefaultTemplate from '../components/_App/DefaultTemplate';
import MainBanner from '../components/Home/MainBanner';
import AboutOurHospital from '../components/Home/AboutOurHospital';
import OurExpertise from '../components/Home/OurExpertise';
import Services from '../components/Home/Services';
import AboutUs from '../components/Home/AboutUs';
import VideoIntro from '../components/Common/VideoIntro';
import OurDentists from '../components/Common/OurDentists';
import Stats from '../components/Home/Stats';
import FeedbackSlider from '../components/Home/FeedbackSlider';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import NewsletterForm from '../components/Common/NewsletterForm';

// data
import { getPage, getChildren } from '../lib/api';

const Index = ({ homepage, contact, servicesNav, testimonials }) => {
    return (
        <DefaultTemplate
            contact={contact}
            seo={homepage?.seo}
            servicesNav={servicesNav}
        >
            <MainBanner
                h1={homepage?.customFields?.h1}
                headercontent={homepage?.customFields?.headercontent}
                headerimage={homepage?.customFields?.headerimage}
            />
            <AboutOurHospital />
            <OurExpertise />
            <Services />
            <AboutUs />
            <VideoIntro />
            <OurDentists />
            <div className="pb-100">
                <Stats />
            </div>
            <FeedbackSlider testimonials={testimonials} />
            <LatestBlogPost />
            <NewsletterForm />
        </DefaultTemplate>
    );
};

export default Index;

export const getStaticProps = async () => {
    const home = await getPage('homepage');
    const contact = await getPage('contact');
    const servicesNavItems = await getChildren('services');
    const testimonials = await getPage('testimonials');

    return {
        props: {
            homepage: home?.page ? home.page : {},
            contact: contact?.page ? contact.page?.contact : {},
            testimonials: testimonials?.page
                ? testimonials.page?.testimonials?.testimonials
                : {},
            servicesNav: servicesNavItems,
        },
    };
};
