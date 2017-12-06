import React from 'react';
import PropTypes from 'prop-types';

export default class Text__View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        };
        this.onBtnClick = this.onBtnClick.bind(this);
        this.onWordClick = this.onWordClick.bind(this);
        this.textAsWordElements = this.textAsWordElements.bind(this);
    }

    onBtnClick() {
        console.log(this.state.text.guid);
    }

    onWordClick(event) {
        let count = parseInt(event.target.dataset.count);
        console.log(count);
    }

    textAsWordElements() {
        let pieces = this.state.text.text.split(/([^а-яА-ЯёЁ]+)/g);
        let count = 0;
        pieces.forEach((piece, i) => {
            if (/[а-яА-ЯёЁ]/.test(piece)) {
                ++count;
                pieces[i] =
                    <span
                        className="text-word"
                        onClick={this.onWordClick}
                        data-count={count}
                        key={i}
                    >
                        {piece}
                    </span>
            }
        });
        return pieces;
    }

    render() {
        return (
            <div className="text-div">
                <h2 className="text-title">{this.state.text.title}</h2>
                <div className="text-text">{this.textAsWordElements()}</div>
                <div><input type="button" value="click" onClick={this.onBtnClick}/></div>
            </div>
        );
    }
}

Text__View.propTypes = {
    text: PropTypes.any.isRequired,
};