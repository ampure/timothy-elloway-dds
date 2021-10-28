import React from 'react';

// templates
import User from '../../components/PageTemplates/User';

// data
import {
    getAllBios,
    getBio,
    getPage,
    getChildren,
    getAllPosts,
} from '../../lib/api';

const Bio = ({
    bio,
    contact,
    servicesNav,
    latestPosts,
}) => {
    // console.warn(pageOrPost);

    return (
        <User
            page={bio}
            contact={contact}
            servicesNav={servicesNav}
            latestPosts={latestPosts}
        />
    );
};

export default Bio;

export const getStaticPaths = async () => {
    const allPages = await getAllBios();

    return {
        paths: allPages?.users?.edges?.map(page=>`/bio/${page.node.slug}`),
        fallback: 'blocking',
    };
};

export async function getStaticProps({ params }) {
    const slug = params?.slug;
    const bio = await getBio(slug);
    const contact = await getPage('contact');
    const services = await getChildren('services');
    const latestPosts = await getAllPosts(3);
    

    return {
        props: {
            bio,
            latestPosts: latestPosts,
            contact: contact?.page ? contact.page?.contact : {},
            servicesNav: services?.page?.children?.nodes
                ? services?.page?.children?.nodes
                : {},
        },
    };
}
