import React from 'react';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Footer from './Footer';
import { NextSeo /* , ArticleJsonLd */ } from 'next-seo';
import Head from 'next/head';

const DefaultTemplate = ({ children, contact, seo, servicesNav }) => {
    return (
        <React.Fragment>
            <Head>
                <title>{seo?.title}</title>
            </Head>
            <NextSeo
                title={
                    seo?.title
                        ? seo?.title
                        : seo?.opengraphTitle
                        ? seo?.opengraphTitle
                        : ''
                }
                description={
                    seo?.metaDesc
                        ? seo.metaDesc
                        : seo?.opengraphDescription
                        ? seo.opengraphDescription
                        : seo?.excerpt
                }
                canonical={
                    seo?.canonical
                        ? seo.canonical
                        : `${process.env.FULL_URL}/${seo?.slug}/`
                }
                openGraph={{
                    type: seo?.opengraphType,
                    url: seo?.canonical,
                    title: seo?.opengraphTitle,
                    description: seo?.opengraphDescription,
                    images: [
                        {
                            url: seo?.opengraphImage?.sourceUrl
                                ? seo?.opengraphImage?.sourceUrl
                                : seo?.featuredImage?.node?.sourceUrl,
                            width: seo?.opengraphImage?.sourceUrl
                                ? 300
                                : seo?.featuredImage?.node?.mediaDetails?.width,
                            height: seo?.opengraphImage?.sourceUrl
                                ? 300
                                : seo?.featuredImage?.node?.mediaDetails
                                      ?.height,
                            alt: seo?.title,
                        },
                    ],
                }}
            />
            <TopHeader contactinfo={contact} />
            <Navbar servicesNav={servicesNav} />
            {children}
            <Footer contactinfo={contact} />
        </React.Fragment>
    );
};

export default DefaultTemplate;
