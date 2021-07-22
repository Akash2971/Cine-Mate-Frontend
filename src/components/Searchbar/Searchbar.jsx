import React, { Component } from 'react';
import "./Searchbar.css"
class Searchbar extends Component {
    state = { searchTerm : "" }
    
    handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        this.btn.click();
      }
    };

    render() { 
        return ( 
            <>
                <form>
                    <div className="wrap">
                        <div className="search">
                        <input
                            type="text"
                            className="searchTerm"
                            placeholder="Movie Name"
                            onChange = {this.props.change}
                            onKeyPress={this.handleKeypress}
                        ></input>
                        <button 
                            type="submit" 
                            className="searchButton" 
                            onClick={this.props.click}
                            ref={node => (this.btn = node)} >
                            <i className="fa fa-search"></i>
                        </button>
                        </div>
                    </div>
            </form>
            </>
         );
    }
}
 
export default Searchbar;