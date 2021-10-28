import React from 'react';
// import Image from 'next/image';
import DefaultTemplate from '../_App/DefaultTemplate';
import LatestBlogPost from '..//Blog/LatestBlogPost';

const DefaultPage = ({ page, contact, servicesNav, latestPosts }) => {
    console.warn(page)
    return (
        <DefaultTemplate
            contact={contact}
            seo={page?.seo}
            servicesNav={servicesNav}
        >
            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <h1>{page?.user?.name}</h1>

                        <div className="col-12">
                            <div className="about-item about-right">
                                <img
                                    src="/images/about-shape1.png"
                                    alt="About"
                                />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: page?.user?.description,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LatestBlogPost posts={latestPosts} />
        </DefaultTemplate>
    );
};

export default DefaultPage;
