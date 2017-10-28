import React from 'react';
import {connect} from 'react-redux';
import ChannelTitle from './ChannelTitle';
import RssItem from './RssItem';

let RssRenderer = ({rssChannel}) => {
    let title = rssChannel ? <ChannelTitle channel={rssChannel}/> : null;
    let items = rssChannel ? rssChannel.items.map(item => <RssItem key={item.link} item={item}/>) : null;

    return (
        <div className='rss-channel'>
            {title}
            {items}
        </div>

    );
};

const mapStateToProps = state => {
    return {
        rssChannel: state.rssData
    }
};


RssRenderer = connect(mapStateToProps)(RssRenderer);
export default RssRenderer;
