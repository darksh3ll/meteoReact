import React, { Component } from 'react'
import "./SearchBar.css"

class SearchBar extends Component {
    render () {
        return (
            <div className="input">
                <form>
                    <input
                    type="texte"
                    placeholder="Search"
                    onChange={this.props.handleChange}
                    value={this.props.value}
                    />
                </form>
                <button onClick={this.props.start}>GO</button>
            </div>
        )
    }
}

export default SearchBar