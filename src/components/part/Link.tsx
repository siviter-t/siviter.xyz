import * as React from "react";
import { default as GatsbyLink } from "gatsby-link";

export interface LinkProps {
    to: string;
}

export class LinkComponent extends React.PureComponent<LinkProps> {
    public render() {
        return <GatsbyLink to={this.props.to}>{this.props.children}</GatsbyLink>;
    }
}

export const Link = LinkComponent;
