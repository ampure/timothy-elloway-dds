import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AppointmentFormTwo from '../components/Common/AppointmentFormTwo';
import Footer from '../components/_App/Footer';

// data
import { getPage, getChildren, getAllPosts } from '../lib/api';

const About = ({ about, contact, services, latestBlogs, testimonials }) => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />

            <PageBanner
                pageTitle="Dr. Sarah Taylor (Neurosurgeon)"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Dentist Details"
                bgImage="page-title-five"
            />

            <div className="Dentist-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="Dentist-details-item Dentist-details-left">
                                <img
                                    src="/images/dentists/Dentist3.jpg"
                                    alt="Dentist"
                                />

                                <div className="Dentist-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +07 554 332 322
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            hello@TimothyElloway.com
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            4th Floor, 408 No Chamber
                                        </li>
                                    </ul>
                                </div>

                                <div className="Dentist-details-work">
                                    <h3>Working hours</h3>
                                    <div className="appointment-item-two-right">
                                        <div className="appointment-item-content">
                                            <ul>
                                                <li>
                                                    Monday{' '}
                                                    <span>
                                                        9:00 AM - 8:00 PM
                                                    </span>
                                                </li>
                                                <li>
                                                    Tuesday{' '}
                                                    <span>
                                                        9:00 AM - 8:00 PM
                                                    </span>
                                                </li>
                                                <li>
                                                    Wednesday{' '}
                                                    <span>
                                                        9:00 AM - 8:00 PM
                                                    </span>
                                                </li>
                                                <li>
                                                    Sunday{' '}
                                                    <span>
                                                        9:00 AM - 8:00 PM
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="Dentist-details-item">
                                <div className="Dentist-details-right">
                                    <div className="Dentist-details-biography">
                                        <h3>Dr. Sarah Taylor (Neurosurgeon)</h3>
                                        <p>
                                            MBBS in Neurology, PHD in
                                            Neurosurgeon
                                        </p>
                                    </div>

                                    <div className="Dentist-details-biography">
                                        <h3>Biography</h3>

                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in
                                            reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit
                                            anim id est laborum.
                                        </p>

                                        <p>
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae
                                            ab illo inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed
                                            quia consequuntur magni dolores eos
                                            qui ratione voluptatem sequi
                                            nesciunt.
                                        </p>

                                        <p>
                                            But I must explain to you how all
                                            this mistaken idea of denouncing
                                            pleasure and praising pain was born
                                            and I will give you a complete
                                            account of the system, and expound
                                            the actual teachings of the great
                                            explorer of the truth, the
                                            master-builder of human happiness.
                                            No one rejects, dislikes, or avoids
                                            pleasure itself, because it is
                                            pleasure, but because those who do
                                            not know how to pursue pleasure
                                            rationally encounter consequences
                                            that are extremely painful.
                                        </p>

                                        <p></p>
                                    </div>

                                    <div className="Dentist-details-biography">
                                        <h3>Education</h3>
                                        <ul>
                                            <li>
                                                PHD Degree in Neurology at
                                                University of UCLan School of
                                                Medicine Preston (2006)
                                            </li>
                                            <li>
                                                Master of Neurosurgery at
                                                University of University of
                                                Exeter Medical School Exeter
                                                (2002)
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="Dentist-details-biography">
                                        <h3>Experience</h3>
                                        <p>
                                            At vero eos et accusamus et iusto
                                            odio dignissimos ducimus qui
                                            blanditiis praesentium voluptatum
                                            deleniti atque corrupti quos dolores
                                            et quas molestias excepturi sint
                                            occaecati cupiditate non provident,
                                            similique sunt in culpa.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-100">
                <AppointmentFormTwo />
            </div>

            <Footer />
        </React.Fragment>
    );
};

export default About;

export const getStaticProps = async () => {
    const about = await getPage('about');
    const contact = await getPage('contact');
    const services = await getChildren('services');
    const latestPosts = await getAllPosts(3);
    const testimonials = await getPage('testimonials');

    return {
        props: {
            latestBlogs: latestPosts,
            about: about?.page ? about.page : {},
            contact: contact?.page ? contact.page?.contact : {},
            testimonials: testimonials?.page
                ? testimonials.page?.testimonials?.testimonials
                : {},
            services: services?.page?.children?.nodes
                ? services?.page?.children?.nodes
                : {},
        },
    };
};
