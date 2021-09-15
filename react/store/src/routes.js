import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Store from './pages/loja/index';
import Error from './pages/error/index';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Store} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    );
}