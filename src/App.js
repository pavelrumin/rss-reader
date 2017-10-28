import React, {Component} from 'react';
import {Col, Form} from 'react-bootstrap';
import './App.css';
import Loader from './components/Loader';
import RssRenderer from './components/RssRenderer';
import UrlInput from './components/UrlInput';
import AutoUpdater from './components/AutoUpdater';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Col xs={3}/>
                <Col xs={6}>
                    <h1>RSS Reader</h1>

                    <Form>
                        <UrlInput/>
                    </Form>

                    <Loader/>
                    <RssRenderer/>
                    <AutoUpdater/>

                </Col>
                <Col xs={3}/>
            </div>
        );
    }
}

export default App;
