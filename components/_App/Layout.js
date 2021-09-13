import React from 'react';
import Head from 'next/head';
import GoTop from './GoTop';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>
                    TimothyElloway - React Next Medical & Dentists Template
                </title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta
                    name="description"
                    content="TimothyElloway - React Next Medical & Dentists Template"
                />
                <meta
                    name="og:title"
                    property="og:title"
                    content="TimothyElloway - React Next Medical & Dentists Template"
                ></meta>
                <meta
                    name="twitter:card"
                    content="TimothyElloway - React Next Medical & Dentists Template"
                ></meta>
                <link
                    rel="canonical"
                    href="https://TimothyElloway-react.envytheme.com/"
                ></link>
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
};

export default Layout;
