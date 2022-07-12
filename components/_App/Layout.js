import React from 'react';
import Head from 'next/head';
import GoTop from './GoTop';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>TimothyElloway DDS - Dentist in Chico, CA</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="description" content="TimothyElloway" />
                <meta
                    name="og:title"
                    property="og:title"
                    content="TimothyElloway"
                ></meta>
                <meta name="twitter:card" content="TimothyElloway"></meta>
                <link
                    rel="canonical"
                    href="https://www.timothyellowayddsinc.com"
                ></link>
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
};

export default Layout;
