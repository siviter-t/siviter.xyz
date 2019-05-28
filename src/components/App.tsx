import * as React from "react";
import { Layout } from "components/Layout";
import { Provider } from "react-redux";

import { configureStore } from "state/configureStore";
import { InitialState } from "state/InitialState";

import { Header } from "components/Header";

const store = configureStore(InitialState);

export class AppComponent extends React.PureComponent {
    public render() {
        return (
            <>
                <React.StrictMode>
                    <Provider store={store}>
                        <Header />
                        <Layout>{this.props.children}</Layout>
                    </Provider>
                </React.StrictMode>
            </>
        );
    }
}

const App = AppComponent;
export default App;
