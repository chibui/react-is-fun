import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import Hiring from './Hiring';
import NotHiring from './NotHiring';

export class Library extends React.Component {
    static defaultProps = {
        books: [
            { author: "Chet Whitley", pages: 1000, title: "Tahoe Tales"}
        ]
    }


    // from react 16.8 function components can handle state.
    state = { 
        data: [],
        freeBookmark: false,
        hiring: true,
        loading: false,
        open: true
    };
    
    componentDidMount() {
        this.setState({loading:true});

        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}));
	}

	componentDidUpdate() {
		console.log("The component just updated")
    }
    
    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const { books } = this.props;

        return (
            <div>
                { this.state.hiring ? <Hiring /> : <NotHiring /> }
                { this.state.loading 
                    ? 'loading...'
                    : <div>
                        { this.state.data.map(product => 
                            <div key={ product.id }>
                                <h3>Library Product of the Week!</h3>
                                <h4>{ product.name }</h4>
                                {/* https://reactjs.org/docs/accessibility.html */}
                                <img alt={ product.name } src={ product.image } height={ 100 }/>
                            </div>    
                        )}
                    </div>
                }
                <h1>The Library is { this.state.open ? 'open' : 'closed'}</h1>

                <button onClick={this.toggleOpenClosed}>Change</button>

                {books.map( 
                    (book, i) => 
                        <Book 
                            author={ book.author }
                            freeBookmark= { this.state.freeBookmark }
                            pages={ book.pages }
                            key={ i }
                            title={ book.title } />
                )}
            </div>
        )
    }
}

Library.propTypes = {
    books: PropTypes.array
}

export default Library
