import * as React from "react";
import { Helmet } from "react-helmet-async";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const FontAwesomeStylesheet: React.FC = () => (
    <Helmet>
        <style type="text/css">{dom.css()}</style>
    </Helmet>
);
