import React from 'react';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Footer from './Footer';

import Head from 'next/head';

const DefaultTemplate = ({ children, contact, seo }) => {
    return (
        <React.Fragment>
            <Head>
                <title>{seo?.title}</title>
            </Head>
            <TopHeader contactinfo={contact} />
            <Navbar />
            {children}
            <Footer contactinfo={contact} />
        </React.Fragment>
    );
};

export default DefaultTemplate;
