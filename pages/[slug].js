import React from 'react';
import DefaultTemplate from '../components/_App/DefaultTemplate';
import BlogSidebar from '../components/Blog/BlogSidebar';
import LatestBlogPost from '../components/Blog/LatestBlogPost';
import moment from 'moment';

// templates
import Services from '../components/PageTemplates/Services';
import Blog from '../components/PageTemplates/Blog';
import DefaultPage from '../components/PageTemplates/DefaultPage';

// data
import {
    getPost,
    getPage,
    getChildren,
    getAllCategoriesWithSlug,
    getAllPosts,
    getAllPages,
    getFirst25PostsWithSlug,
} from '../lib/api';

const BlogDetails = ({
    pageOrPost,
    contact,
    servicesNav,
    categories,
    latestPosts,
}) => {
    // console.warn(pageOrPost);

    if (pageOrPost?.parent?.node?.slug === 'services') {
        return (
            <Services
                service={pageOrPost}
                contact={contact}
                servicesNav={servicesNav}
                latestPosts={latestPosts}
            />
        );
    }

    if (pageOrPost?.postId) {
        return (
            <Blog
                blog={pageOrPost}
                contact={contact}
                servicesNav={servicesNav}
                latestPosts={latestPosts}
                categories={categories}
            />
        );
    }

    return (
        <DefaultPage
            page={pageOrPost}
            contact={contact}
            servicesNav={servicesNav}
            latestPosts={latestPosts}
        />
    );
};

export default BlogDetails;

export const getStaticPaths = async () => {
    const first25Posts = await getFirst25PostsWithSlug();
    const allPages = await getAllPages();

    const postSlugsFromApiCall = first25Posts?.posts?.edges.map(
        ({ node }) => `/${node.slug}`
    );

    //TODO: this isn't scalable. bad idea
    const excluded = [
        'about',
        'blog',
        'contact',
        'testimonials',
        'services',
        'homepage',
    ]; //exclude these from slug since we build them by themselves.
    const includedPages = allPages?.pages?.edges.filter(({ node }) => {
        if (!excluded.includes(node.slug)) return node;
        else return false;
    }); //uri?
    const pageSlugs = includedPages?.map(({ node }) => `/${node.slug}`);

    // console.warn(pageSlugs);

    return {
        paths: postSlugsFromApiCall.concat(pageSlugs),
        fallback: 'blocking',
    };
};

export async function getStaticProps({ params }) {
    let pageOrPost = {};
    const slug = params?.slug;
    const contact = await getPage('contact');
    const services = await getChildren('services');
    const categories = await getAllCategoriesWithSlug();
    const post = await getPost(`${slug}`);
    const page = await getPage(`${slug}`);
    const servicePage = await getPage(`/services/${slug}`);
    pageOrPost = post?.post
        ? post.post
        : page?.page
        ? page.page
        : servicePage?.page
        ? servicePage.page
        : {};
    const latestPosts = await getAllPosts(3);

    return {
        props: {
            categories,
            pageOrPost,
            latestPosts: latestPosts,
            contact: contact?.page ? contact.page?.contact : {},
            servicesNav: services?.page?.children?.nodes
                ? services?.page?.children?.nodes
                : {},
        },
    };
}
