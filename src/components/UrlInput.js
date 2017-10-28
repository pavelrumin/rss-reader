import React from 'react';
import {Button, Col} from "react-bootstrap";
import {FieldGroup} from "./FieldGroup";
import {enterUrl, loadRss} from '../actions';
import {connect} from 'react-redux';

let UrlInput = ({onClick, onChange, url}) => (
    <div className="input-url">
        <Col xs={10}>
            <FieldGroup
                id="formControlsUrl"
                type="text"
                label="Rss url"
                placeholder="Enter url"
                value={url}
                onChange={e => onChange(e.target.value)}
            />
        </Col>
        <Col xs={2} style={{lineHeight: '80px'}}>
            <Button bsStyle="primary" onClick={e => onClick()}>Load</Button>
        </Col>
    </div>
);

const mapStateToProps = state => {
    return {
        url: state.url
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(loadRss())
        },
        onChange: (url) => {
            dispatch(enterUrl(url))
        }
    }
};

UrlInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(UrlInput);

export default UrlInput;
