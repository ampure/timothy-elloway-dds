import React from 'react';
import DefaultTemplate from '../components/_App/DefaultTemplate';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import GoogleMap from '../components/Contact/GoogleMap';
import Footer from '../components/_App/Footer';

// data
import { getPage, getChildren } from '../lib/api';

const Contact = ({ contact, servicesNav }) => {
    return (
        <DefaultTemplate
            contact={contact}
            seo={contact?.seo}
            servicesNav={servicesNav}
        >
            <PageBanner
                pageTitle="Contact Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact Us"
                bgImage="page-title-one"
            />

            <ContactInfo contact={contact} />

            <ContactForm />

            <GoogleMap contact={contact} />

            <Footer contactinfo={contact} />
        </DefaultTemplate>
    );
};

export default Contact;

export const getStaticProps = async () => {
    const contact = await getPage('contact');
    const servicesNavItems = await getChildren('services');

    return {
        props: {
            contact: contact?.page ? contact.page?.contact : {},
            servicesNav: servicesNavItems,
        },
    };
};
