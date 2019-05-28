import * as React from "react";

import { Link } from "components/part/Link";

export default class extends React.Component {
    public render() {
        return (
            <>
                <h1>Hi people</h1>
                <p>Welcome to your new site.</p>
                <p>Now go build something great.</p>
                <Link to="/page-2/">Go to page 2</Link>
            </>
        );
    }
}
