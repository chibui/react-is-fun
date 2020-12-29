import React from 'react';
import { render } from 'react-dom';

let BookList = [
    { title: "Hunger" },
    { author: "Ernest Hemingway", pages: 260},
    { author: "Zadie Smith", pages: 480, title: "White Teech"},
    { author: "Kurt Vonnegut", pages: 304, title: "Cat's Cradle"}
]

const Book = ({author="Unknown author", freeBookmark, pages="Unknown", title="No title provided"}) => {
    return (
        <section>
            <h2>{ title }</h2>
            <p>By: { author }</p>
            <p>Pages: { pages } pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'} </p>
        </section>
    )
}

const Hiring = () => {
    return (
        <div>
            <p>The Library is hiring. Go to www.library.com/jobs for more.</p>
        </div>
    )
}

const NotHiring = () =>
    <div>
        <p>The Library is not hiring. Check back later for more info.</p>
    </div>

class Library extends React.Component {
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

// class FavouriteColourForm extends React.Component {
    
//     state = { value: '' }
    
//     newColour = e => {
//         this.setState({ value: e.target.value })
//     }

//     submit = e => {
//         console.log(`New Colour: ${this.state.value}`);
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={ this.submit }>
//                 <label>Favourite Colour:
//                     <input 
//                         onChange={ this.newColour }
//                         type="color"/>
//                     <button>Submit</button>
//                 </label>
//             </form>
//         )
//     }
// }

render(
    <Library books={ BookList }/>, 
    // <FavouriteColourForm />,
    document.getElementById('root')
);