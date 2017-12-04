import React from 'react';
import PropTypes from 'prop-types';

export default class Text__View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        };
        this.onDoneBtnClick = this.onDoneBtnClick.bind(this);
    }

    onDoneBtnClick() {
        console.log(this.state.text.guid);
    }

    render() {
        return (
            <div className="text-div">
                <h2 className="text-title">{this.state.text.title}</h2>
                <div className="text-text">{this.state.text.text}</div>
                <div><input type="button" value="click" onClick={this.onDoneBtnClick}/></div>
            </div>
        );
    }
}

Text__View.propTypes = {
    text: PropTypes.any.isRequired,
};