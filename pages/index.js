import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/Home/MainBanner';
import AboutOurHospital from '../components/Home/AboutOurHospital';
import OurExpertise from '../components/Home/OurExpertise';
import Services from '../components/Home/Services';
import AboutUs from '../components/Home/AboutUs';
import VideoIntro from '../components/Common/VideoIntro';
import OurDoctors from '../components/Common/OurDoctors';
import Stats from '../components/Home/Stats';
import FeedbackSlider from '../components/Home/FeedbackSlider';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import NewsletterForm from '../components/Common/NewsletterForm';
import Footer from '../components/_App/Footer';

// data
import { getPage } from '../lib/api';

const Index = ({ homepage }) => {
    console.warn('homepagedata', homepage);
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
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
            <OurDoctors />
            <div className="pb-100">
                <Stats />
            </div>
            <FeedbackSlider />
            <LatestBlogPost />
            <NewsletterForm />
            <Footer />
        </React.Fragment>
    );
};

export default Index;

export const getStaticProps = async () => {
    const data = await getPage('homepage');

    return {
        props: {
            homepage: data?.page ? data.page : {},
        },
    };
};
