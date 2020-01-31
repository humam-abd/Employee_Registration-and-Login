import React from 'react';
import './App.css';
import Login from './Login';
import Axregister from './axioReg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as BR, Route } from 'react-router-dom';
import DetailWT from './GetWT';

class App extends React.Component {
    render() {
        return (
            <div className="bg">
                <BR>
                    <div >
                        <Route exact path='/' component={Login} /><br />
                        <Route exact path='/register' component={Axregister} /><br />
                        <Route exact path='/details' component={DetailWT} />
                    </div>
                </BR>
            </div>

        );
    }

}

export default App;
