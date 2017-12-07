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
        this.onWordOver = this.onWordOver.bind(this);
        this.textAsWordElements = this.textAsWordElements.bind(this);
    }

    onBtnClick() {
        console.log(this.state.text.guid);
    }

    onWordClick(event) {
        let count = parseInt(event.target.dataset.count);
        console.log(count);
    }

    onWordOver(event) {
        let count = parseInt(event.target.dataset.count);
        $('.text-text > span').each((i, iElement) => {
            $(iElement).addClass('text-item-hover');
            if (parseInt(iElement.dataset.count) >= count) {
                return false;
            }
        });
    }

    onWordLeave(event) {
        $('.text-item-hover').each((i, iElement) => {
            iElement.classList.remove('text-item-hover');
        });
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
                        onMouseOver={this.onWordOver}
                        onMouseLeave={this.onWordLeave}
                        data-count={count}
                        key={i}
                    >
                        {piece}
                    </span>
            } else {
                pieces[i] =
                    <span
                        className="text-other"
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