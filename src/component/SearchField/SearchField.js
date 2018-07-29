import React from 'react';
import './SearchField.css';

class SearchField extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let text = e.target.value;
        this.props.onChange(text);
    }

    handleClick() {
        this.props.searchCard();
        this.inputTitle.value = '';
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.handleClick();
        }
    }

    render() {
        return (
            <div className="header">
                <h1 className="header__title">Make this (deck) Great!</h1>
                <input 
                    className="header__input" 
                    ref={el=> this.inputTitle = el} 
                    type="text" 
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} 
                    placeholder="Enter card name here!" 
                />
                <button 
                    className="header__submit" 
                    type="submit" 
                    onClick={this.handleClick}
                >Search</button>
            </div>
        )
    }
    
}

export default SearchField;