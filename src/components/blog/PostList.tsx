import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Link } from "components/part/Link";
import { PostListItem } from "components/blog/Post";
import { PostListTitle } from "components/blog/PostTitle";
import { PostMeta } from "components/blog/PostMeta";
import { PostExcerpt } from "components/blog/PostContent";

const PostListQuery = graphql`
    query PostListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 256)
                    frontmatter {
                        title
                        author
                        date
                        tags
                    }
                }
            }
        }
    }
`;

interface PostData {
    node: {
        fields: {
            slug: string;
        };
        excerpt: string;
        frontmatter: {
            title: string;
            author: string;
            date: string;
            tags: string[];
        };
    };
}

interface PostListData {
    allMarkdownRemark: {
        edges: PostData[];
    };
}

export class PostListComponent extends React.PureComponent {
    public render() {
        return (
            <StaticQuery
                query={PostListQuery}
                render={(data: PostListData) => (
                    <>
                        {data.allMarkdownRemark.edges.map((post, index) => {
                            return (
                                <PostListItem key={index}>
                                    <PostListTitle>
                                        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
                                    </PostListTitle>
                                    <PostMeta
                                        date={post.node.frontmatter.date}
                                        author={post.node.frontmatter.author}
                                        tags={post.node.frontmatter.tags}
                                    />
                                    <PostExcerpt>
                                        {post.node.excerpt}
                                        &nbsp;
                                        <Link to={post.node.fields.slug}>Read more</Link>.
                                    </PostExcerpt>
                                </PostListItem>
                            );
                        })}
                    </>
                )}
            />
        );
    }
}

export const PostList = PostListComponent;
