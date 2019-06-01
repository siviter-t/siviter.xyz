import * as React from "react";
import styled from "framework/StyledComponents";

export const PostMetaContainer = styled.div`
    margin-top: 0.5em;
    margin-bottom: 1em;
`;

export interface PostMetaProps {
    date?: string;
    author?: string;
    tags?: string[];
}

export class PostMetaComponent extends React.PureComponent<PostMetaProps> {
    public render() {
        return (
            <PostMetaContainer>
                {this.props.date}
                {this.renderAuthor()}
                {this.renderTags()}
            </PostMetaContainer>
        );
    }

    private renderAuthor() {
        return !this.props.date ? this.props.author : ` • ${this.props.author}`;
    }

    private renderTags() {
        const tags = this.props.tags && this.props.tags.join(", ");
        if (!this.props.date && !this.props.author) return tags;
        return ` • ${tags}`;
    }
}

export const PostMeta = PostMetaComponent;
