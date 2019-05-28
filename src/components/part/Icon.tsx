import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
    fontAwesomeIcon?: IconDefinition;
}

export class IconComponent extends React.PureComponent<IconProps> {
    public render() {
        if (this.props.fontAwesomeIcon) {
            return <FontAwesomeIcon icon={this.props.fontAwesomeIcon} fixedWidth />;
        }

        return null;
    }
}

export const Icon = IconComponent;
