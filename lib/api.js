const API_URL = process.env.WP_API_URL;

/**
 * Fetch API
 * @param {url} url
 * @param {string} query
 * @param {Array} variables
 */
async function fetchAPI(url = API_URL, query, { variables } = {}) {
    // Set up some headers to tell the fetch call
    // that this is an application/json type
    const headers = { 'Content-Type': 'application/json' };

    // build out the fetch() call using the API_URL
    // environment variable pulled in at the start
    // Note the merging of the query and variables

    const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables }),
    });

    // error handling work
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        console.log('error details', query, variables);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

/**
 * Get all posts
 * @param {Number} count
 */
export async function getAllPosts(count = 20) {
    const data = await fetchAPI(
        API_URL,
        `
		query AllPosts {
			posts(first: ${count}, where: { orderby: { field: DATE, order: DESC}}) {
				edges {
					node {
						id
						date
						title
						slug
						excerpt
						categories {
							nodes {
								name
								link
								slug
							}
						}
						featuredImage {
							node {
								sourceUrl
							}
						}
						blogCustomFields {
							featuredImageSmall {
					          sourceUrl
					          mediaDetails {
					            height
					            width
					          }
					          altText
					        }
							featuredImageLarge {
					          sourceUrl
					          mediaDetails {
					            height
					            width
					          }
					          altText
					        }
						}
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
		`
    );

    return data?.posts;
}

/**
 * Get all posts for a page paginated
 * @param {Int} page
 * @param {Int} size
 */
export async function getPaginatedPosts(page, size) {
    let offset = page * size;
    if (page === 1) {
        offset = 0;
    }
    const data = await fetchAPI(
        API_URL,
        `
		query AllPosts {
			posts(where: { offsetPagination: { size: ${size}, offset: ${offset} } }) {
				pageInfo {
		            offsetPagination {
		                hasMore
		                hasPrevious
		                total
		            }
	        	},
				edges {
					node {
						id
						date
						title
						slug
						excerpt
						categories {
							nodes {
								name
								link
								slug
							}
						}
						featuredImage {
							node {
								sourceUrl
							}
						}
					}
				}
			}
		}
		`
    );

    return data?.posts;
}
/**
 * Get all posts exclude some categories
 * @param {Array} categoryExclude
 * @param {Int} page
 * @param {Int} size
 */
export async function getPaginatedPostsExcludeCats(
    categoryExclude,
    page,
    size
) {
    let offset = page * size;
    if (page === 1) {
        offset = 0;
    }
    const data = await fetchAPI(
        API_URL,
        `
		query AllPosts {
			posts(where: { offsetPagination: { size: ${size}, offset: ${offset} },
				categoryNotIn: "${categoryExclude}"}) {
				pageInfo {
		            offsetPagination {
		                hasMore
		                hasPrevious
		                total
		            }
	        	},
				edges {
					node {
						id
						date
						title
						slug
						excerpt
						
						featuredImage {
							node {
								sourceUrl
							}
						}
					}
				}
			}
		}
		`
    );

    return data?.posts;
}

/**
 * Get all posts for a category paginated
 * @param {string} category
 * @param {Int} page
 * @param {Int} size
 */
export async function getPaginatedPostsByCategory(category, page, size) {
    const categoryId = await fetchAPI(
        API_URL,
        `
		query GetCategory {
			categories(where: { slug: "${category}"}) {
				edges {
					node {
						id,
						categoryId
					}
				}
			}
		}
		`
    );

    let offset = page * size;
    if (page === 1) {
        offset = 0;
    }
    const data = await fetchAPI(
        API_URL,
        `
		query AllPosts {
			posts(where: { offsetPagination: { size: ${size}, offset: ${offset}}, 
				categoryIn: "${categoryId?.categories?.edges[0]?.node?.categoryId}" }) {
				pageInfo {
		            offsetPagination {
		                hasMore
		                hasPrevious
		                total
		            }
	        	},
				edges {
					node {
						id
						date
						title
						slug
						excerpt
						categories {
							nodes {
								name
								link
								slug
							}
						}
						featuredImage {
							node {
								sourceUrl
							}
						}
					}
				}
			}
		}
		`
    );

    return data?.posts;
}

export async function getAllPagesBySearchTerm(search = '') {
    const data = await fetchAPI(
        API_URL,
        `
		query AllPagesBySearchTerm {
		  pages(where: { search: "${search}"}) {
	        edges {
	          node {
	            id,
				date
				title
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
	          }
			  
	        }
			pageInfo {
				endCursor
				hasNextPage
			}
		  }
		}
		`
    );

    return data?.pages;
}

/**
 * Get all posts from a category
 * @param {string} category
 * @param {number} number
 */
export async function getCategoryName(category) {
    const categoryName = await fetchAPI(
        API_URL,
        `
		query GetCategory {
			categories(where: { slug: "${category}"}) {
				edges {
					node {
						id,
						categoryId,
						name
					}
				}
			}
		}
		`
    );
    return categoryName?.categories?.edges[0]?.node?.name;
}
/**
 * Get all posts from a category
 * @param {string} category
 * @param {number} number
 */
export async function getFromCategory(category, number) {
    const categoryId = await fetchAPI(
        API_URL,
        `
		query GetCategory {
			categories(where: { slug: "${category}"}) {
				edges {
					node {
						id,
						categoryId
					}
				}
			}
		}
		`
    );

    const data = await fetchAPI(
        API_URL,
        `
		query GetCategoryPosts {
			posts(first: ${number}, where: { categoryIn: "${categoryId?.categories?.edges[0]?.node?.categoryId}",
			 orderby: { field: DATE, order: DESC}}) {
				edges {
					node {
						id
						date
						title
						slug
						excerpt,
						content,
						featuredImage {
							node {
								sourceUrl
								mediaDetails {
									width
									height
								}
							}
                        }
						
                        categories {
							nodes {
								name
								link
                                slug
							}
						}
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
		`
    );
    if (data) {
        data.posts.categoryId =
            categoryId?.categories?.edges[0]?.node?.categoryId;
    }
    return data ? data.posts : null;
}

/**
 * Get all pages with slug to build
 */
export async function getAllPages() {
    const data = await fetchAPI(
        API_URL,
        `
			{
				pages(first: 100) {
					edges {
				      node {
				        slug
				        title
				        parent {
				          node {
				            slug
				            template {
				              templateName
				            }
				          }
				        }
				        template {
				          templateName
				        }
				        status
				        uri
				        customFields {
				          fieldGroupName
				          h1
				          headercontent
				        }
				      }
				    }
				}
			}
		`
    );

    return data;
}

/**
 * Get all posts with slug
 */
export async function getFirst25PostsWithSlug() {
    const data = await fetchAPI(
        API_URL,
        `
			{
				posts(first: 25) {
					edges {
						node {
							slug
						}
					}
					pageInfo {
						total
						hasNextPage
						endCursor
					}
				}
			}
		`
    );

    return data;
}

/**
 * Get post data by slug
 * @param {string} slug
 * @param {boolean} byId if we want to query by id instead of slug
 */
export async function getPost(slug, byId = false) {
    const data = await fetchAPI(
        API_URL,
        `
		fragment PostFields on Post {
			author {
		      node {
		        name
		        nicename
		        nickname
		      }
		    }
			categories {
		      nodes {
		        categoryId
		        name
		        link
		        slug
		      }
		    }
		    date
		    excerpt
		    featuredImage {
		      node {
		        id
		        slug
		        sourceUrl
		        title
				mediaDetails {
					width
					height
				}
		      }
		    }
			blogCustomFields {
				featuredImageSmall {
		          sourceUrl
		          mediaDetails {
		            height
		            width
		          }
		          altText
		        }
				featuredImageLarge {
		          sourceUrl
		          mediaDetails {
		            height
		            width
		          }
		          altText
		        }
			}
		    id
			postId
		    isPreview
		    slug
		    status
		    title
			seo {
		      canonical
		      metaDesc
		      metaKeywords
		      schema {
		        raw
		      }
		      title
		      metaRobotsNofollow
		      metaRobotsNoindex
		      opengraphImage {
		        sourceUrl(size: MEDIUM)
		        title
		      }
		      opengraphDescription
		      opengraphTitle
		      opengraphType
		      twitterDescription
		      twitterImage {
		        sourceUrl(size: MEDIUM)
		        title
		      }
		    }
		}
		query PostBySlug($id: ID!, $idType: PostIdType!) {
			post(id: $id, idType: $idType) {
				...PostFields
				content
			}
		}
	`,
        {
            variables: {
                id: slug,
                idType: byId ? 'DATABASE_ID' : 'SLUG',
            },
        }
    );

    return data;
}

/**
 * Get related posts
 * @param {number} postId {notIn: "1"}
 * @param {number} count
 * @param {Array} categoryArray {categoryIn: "1", "3"}
 *
 */
export async function getRelatedPosts(postId, count, categoryArray) {
    const data = await fetchAPI(
        API_URL,
        ` query GetRelatedPosts {
			posts(first: ${count}, where: {notIn: "${postId}", categoryIn: "${categoryArray}"}) {
		    edges {
		      node {
		        date
		        excerpt
		        featuredImage {
		          node {
		            id
		            slug
		            sourceUrl
		            title
		            mediaDetails {
		              width
		              height
		            }
		          }
		        }
				categories {
			      nodes {
			        categoryId
			        name
			        link
			        slug
			      }
			    }
		        id
				postId
		        isPreview
		        slug
		        status
		        title
		        
		      }
		    }
		  }
		}
		`
    );

    return data;
}
/**
 * Get post data by slug
 * @param {string} slug
 * @param {number} optionalId
 */
export async function getPage(slug, optionalId = null) {
    const theid = optionalId ? optionalId : slug;
    const idType = optionalId ? 'DATABASE_ID' : 'URI';
    const data = await fetchAPI(
        API_URL,
        `
		query getPage {
			page(id: "${theid}", idType: ${idType}) {
			parent {
	          node {
	            slug
	            template {
	              templateName
	            }
	          }
	        }
	        template {
	          templateName
	        }
	        status
		    content
		    date
		    featuredImage {
		      node {
		        id
		        slug
		        sourceUrl
		        title
				mediaDetails {
					width
					height
				}
		      }
		    }
		    id
		    isPreview
		    slug
		    status
		    title
			customFields {
		      fieldGroupName
		      h1
		      headercontent
			  headerimage {
		          altText
		          mediaDetails {
		            file
		            height
		            width
		          }
		          mediaItemUrl
		          sourceUrl
		          title
		        }
			}
			testimonials {
		      testimonials {
		        name
		        quote
		        image {
		          altText
		          mediaDetails {
		            width
		            height
		          }
		          title
		          sourceUrl
		        }
		      }
		    }
			contact {
		      address
		      email
		      facebook
		      hours {
		        day
		        hours
		      }
		      instagram
		      linkedin
		      name
		      phone
		      twitter
		    }
			seo {
		      title
		      canonical
		      metaDesc
		      metaKeywords
		      metaRobotsNofollow
		      metaRobotsNoindex
		      opengraphAuthor
		      opengraphDescription
		      opengraphModifiedTime
		      opengraphPublishedTime
		      opengraphPublisher
		      opengraphSiteName
		      opengraphTitle
		      opengraphType
		      opengraphUrl
		      schema {
		        articleType
		        pageType
		        raw
		      }
		      twitterDescription
		      twitterImage {
		        mediaDetails {
		          file
		        }
		        title
		      }
		    }
			}
		}
	`
    );
    return data;
}

/**
 * Get video blade
 */
export async function getVideoBlade() {
    const theid = 'blade-video';
    const idType = 'URI';
    const data = await fetchAPI(
        API_URL,
        `
		query getPage {
			page(id: "${theid}", idType: ${idType}) {
			
	        status
		    content
		    date

			videoTabs {
		      background {
		        mediaDetails {
		          width
		          height
		        }
		        sourceUrl
		      }
		      tabs {
		        content
		        header
		        title
		      }
		      youtubeVideoId
		    }
		}
			
		}
	`
    );
    return data;
}
/**
 * Get about blade
 */
export async function getAboutBlade() {
    const theid = 'blade-about';
    const idType = 'URI';
    const data = await fetchAPI(
        API_URL,
        `
		query getPage {
			page(id: "${theid}", idType: ${idType}) {
			
	        status
		    content
		    date

			aboutList {
		      image {
		        mediaDetails {
		          width
		          height
		        }
		        sourceUrl
		      }
		      list {
		        icon 
				title
				content
				}
		      title
		    }
		}
			
		}
	`
    );
    return data;
}

/**
 * Get children posts (use case: Services)
 * @param {string} slug
 *
 */
export async function getChildren(slug) {
    const data = await fetchAPI(
        API_URL,
        ` query GetChildren {
			page(id: "${slug}", idType: URI) {
		    children {
				nodes {
					slug
					uri
					
					... on Page {
			          id
			          title
					  card {
					      name
						  about
						  icon
						}
			        }
				}
			}
		  }
		}
		`
    );

    return data;
}

/**
 * Get all categories with slug
 */
export async function getAllCategoriesWithSlug() {
    const data = await fetchAPI(
        API_URL,
        `
		{
			categories(first: 100, where: {parent: 0}) {
				edges {
					node {
						termTaxonomyId
						name
				        slug
				        count
				        parentId
						uri
				        children(first: 25) {
				          edges {
				            node {
				              name
				              slug
				              uri
				            }
				          }
				        }
					}
				}
			}
		}
	`
    );
    return data?.categories;
}
