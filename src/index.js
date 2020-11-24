import React from 'react';
import ReactDom from 'react-dom';

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Everyone</h1>
            </div>
        )
    }
};

ReactDom.render(<Message />, document.getElementById('root'));