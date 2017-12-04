import React from 'react';
import PropTypes from 'prop-types';

export default class Text__View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        };
        this.onBtnClick = this.onBtnClick.bind(this);
        this.textAsWordElements = this.textAsWordElements.bind(this);
    }

    onBtnClick() {
        console.log(this.state.text.guid);
    }

    textAsWordElements() {
        return this.state.text.text.replace(/([а-яА-ЯёЁ]+)/g, "<span class=\"text-word\">$1</span>");
    }

    render() {
        return (
            <div className="text-div">
                <h2 className="text-title">{this.state.text.title}</h2>
                <div className="text-text" dangerouslySetInnerHTML={{__html: this.textAsWordElements()}}/>
                <div><input type="button" value="click" onClick={this.onBtnClick}/></div>
            </div>
        );
    }
}

Text__View.propTypes = {
    text: PropTypes.any.isRequired,
};