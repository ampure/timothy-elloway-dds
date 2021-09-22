import React from 'react';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Footer from './Footer';

import Head from 'next/head';

const DefaultTemplate = ({ children, contact, seo, servicesNav }) => {
    return (
        <React.Fragment>
            <Head>
                <title>{seo?.title}</title>
            </Head>
            <TopHeader contactinfo={contact} />
            <Navbar servicesNav={servicesNav} />
            {children}
            <Footer contactinfo={contact} />
        </React.Fragment>
    );
};

export default DefaultTemplate;
