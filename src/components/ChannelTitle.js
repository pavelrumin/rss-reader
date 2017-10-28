import React, {Component} from 'react';

class ChannelTitle extends Component {
    render() {
        return (
            <div className='channel-title'>
                <h2>{this.props.channel.title}</h2>
                <p>{this.props.channel.description}</p>
                <hr/>
            </div>
        )
    }
}

export default ChannelTitle;
