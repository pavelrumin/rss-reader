import React, {Component} from 'react';

class RssItem extends Component {
    render() {
        return (
            <div className='channel-item'>
                <h3><a href={this.props.item.link} target='_blank'>{this.props.item.title}</a></h3>
                <p dangerouslySetInnerHTML={{__html: this.props.item.description}}/>
                <hr/>
            </div>
        )
    }
}

export default RssItem;
