import * as React from "react";

import { Header } from "components/Header";
import { PostList } from "components/blog/PostList";

export default class extends React.PureComponent {
    public render() {
        return (
            <>
                <Header slug="/blog" slugTitle="Blog" />
                <h1>Blog</h1>
                <PostList />
            </>
        );
    }
}
