import * as React from "react";
import { graphql } from "gatsby";

import { Header } from "components/Header";
import { PostTitle } from "components/blog/PostTitle";
import { PostMeta } from "components/blog/PostMeta";
import { PostContent } from "components/blog/PostContent";

export const BlogPostQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                author
                date
                tags
                draft
                useMathJax
                useCodePen
            }
            fields {
                slug
            }
            html
        }
    }
`;

interface BlogPostData {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string;
                author: string;
                date: string;
                tags: string[];
                draft: boolean;
                useMathJax: boolean;
                useCodePen: boolean;
            };
            fields: {
                slug: string;
            };
            html: string;
        };
    };
}

const MathJaxConfig = {
    tex2jax: {
        inlineMath: [["$", "$"], ["\\(", "\\)"]],
        displayMath: [["$$", "$$"], ["\\[", "\\]"]],
        processEscapes: true
    },
    TeX: {
        equationNumbers: {
            autoNumber: "AMS"
        }
    }
};

export class BlogPost extends React.PureComponent<BlogPostData> {
    public componentDidMount() {
        this.appendMathJax();
        this.appendCodePen();
    }

    public render() {
        const { frontmatter, fields, html } = this.props.data.markdownRemark;
        return (
            <>
                <Header slug={fields.slug} slugTitle={frontmatter.title} />
                <PostTitle>{frontmatter.title}</PostTitle>
                <PostMeta date={frontmatter.date} author={frontmatter.author} tags={frontmatter.tags} />
                <PostContent dangerouslySetInnerHTML={{ __html: html }} />
            </>
        );
    }

    private appendMathJax() {
        if (!this.props.data.markdownRemark.frontmatter.useMathJax) return;

        const config = document.createElement("script");
        config.type = "text/x-mathjax-config";
        config.innerText = `MathJax.Hub.Config(${JSON.stringify(MathJaxConfig)})`;
        document.body.appendChild(config);

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";
        script.async = true;
        document.body.appendChild(script);
    }

    private appendCodePen() {
        if (!this.props.data.markdownRemark.frontmatter.useCodePen) return;

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://static.codepen.io/assets/embed/ei.js";
        script.async = true;
        document.body.appendChild(script);
    }
}

export default BlogPost;
