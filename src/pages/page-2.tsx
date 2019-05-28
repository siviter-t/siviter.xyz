import * as React from "react";

import { Link } from "components/part/Link";

export default class extends React.PureComponent {
    public render() {
        return (
            <>
                <div>
                    <h1>Hi from the second page</h1>
                    <p>Welcome to page 2</p>
                    <Link to="/">Go back to the homepage</Link>
                </div>
            </>
        );
    }
}
