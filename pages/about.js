import React from 'react';
import Image from 'next/image';
import DefaultTemplate from '../components/_App/DefaultTemplate';
import PageBanner from '../components/Common/PageBanner';
import AppointmentFormTwo from '../components/Common/AppointmentFormTwo';

// data
import { getPage, getChildren, getAllPosts } from '../lib/api';
import image from 'next/image';
import BreadCrumbJsonLd from 'next-seo/lib/jsonld/breadcrumb';

const About = ({ about, contact, services }) => {
    return (
        <DefaultTemplate
            contact={contact}
            seo={about?.seo}
            servicesNav={services}
        >
            <PageBanner
                pageTitle={about?.customFields?.h1}
                homePageUrl="/"
                homePageText="Home"
                activePageText="About"
                bgImage="page-title-five"
            />

            <div className="Dentist-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="Dentist-details-item Dentist-details-left">
                                <div className="text-center mt-2">
                                    {about?.customFields?.headerimage?.sourceUrl ? (<Image
                                    src={about?.customFields?.headerimage?.sourceUrl}
                                    title={about?.customFields?.headerimage?.title}
                                    width={
                                        about?.customFields?.headerimage?.mediaDetails?.width
                                    }
                                    height={
                                        about?.customFields?.headerimage?.mediaDetails?.height
                                    }
                                    alt={
                                        about?.customFields?.headerimage?.mediaDetails
                                            ?.altText
                                    }
                                />):null}
                                </div>

                                <div className="Dentist-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: {contact?.phone}
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            {contact?.email}
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            {contact?.cidLink ? (
                                                <a
                                                    href={contact.cidLink}
                                                    target="_blank"
                                                >
                                                    {contact?.address}
                                                </a>
                                            ) : (
                                                <>{contact?.address}</>
                                            )}
                                        </li>
                                    </ul>
                                </div>

                                <div className="Dentist-details-work">
                                    <h3>Working hours</h3>
                                    <div className="appointment-item-two-right">
                                        <div className="appointment-item-content">
                                            <ul>
                                                {contact?.hours?.map((hours,idx)=>{
                                                    return (<li key={idx}>{hours.day}{' '}
                                                    <span>
                                                        {hours.hours}
                                                    </span></li>)
                                                })}
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="Dentist-details-item">
                                <div className="Dentist-details-right">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: about?.content,
                                        }}
                                        className="Dentist-details-biography"
                                    /> 

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-100">
                <AppointmentFormTwo services={services} />
            </div>

            </DefaultTemplate>
    );
};

export default About;

export const getStaticProps = async () => {
    const about = await getPage('about');
    const contact = await getPage('contact');
    const services = await getChildren('services');

    return {
        props: {
            about: about?.page ? about.page : {},
            contact: contact?.page ? contact.page?.contact : {},
            
            services: services?.page?.children?.nodes
                ? services?.page?.children?.nodes
                : {},
        },
    };
};