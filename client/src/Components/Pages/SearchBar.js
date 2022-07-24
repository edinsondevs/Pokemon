import React from 'react'

function SearchBar() {
    return (
        <div className="cmp-searchbar">
            <input className="cmp-searchbar" type="text" placeholder="Enter ingredient.." />
            {/* {console.log(name)}; */}
            <button className="btn-searchbar" >Search</button>
        </div>
    );
}

export default SearchBar;