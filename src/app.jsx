import React from 'react';
import ReactDOM from 'react-dom';
import Text from './text.js';
import Text__View from './text__view.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: new Text({
                text: 'sample text'
            })
        };
    }

    render() {
        let template = <Text__View text={this.state.text}/>;
        return (
            <div className="app-div">
                {template}
            </div>
        );
    }
}

App.propTypes = {};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);