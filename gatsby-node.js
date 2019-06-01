const path = require("path");

function getSlug(node, getNode) {
    const parent = getNode(node.parent);
    if (!parent || parent.internal.type !== `File`) {
        throw new Error("Could not find parent file node");
    }

    const parsedPath = path.parse(parent.relativePath);
    return `/${parent.sourceInstanceName}/${parsedPath.name}`;
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = getSlug(node, getNode);
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogPost = path.resolve(`./src/templates/blogPost.tsx`);

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            author
                            date
                            tags
                        }
                        fields {
                            slug
                        }
                        html
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const slug = node.fields.slug;
            createPage({
                path: slug,
                component: blogPost,
                context: {
                    slug: slug
                }
            });
        });
    });
};
