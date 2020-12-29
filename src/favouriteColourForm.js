import React from 'react';
export class FavouriteColourForm extends React.Component {
    
    state = { value: '' }
    
    newColour = e => {
        this.setState({ value: e.target.value })
    }

    submit = e => {
        console.log(`New Colour: ${this.state.value}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ this.submit }>
                <label>Favourite Colour:
                    <input 
                        onChange={ this.newColour }
                        type="color"/>
                    <button>Submit</button>
                </label>
            </form>
        )
    }
}
