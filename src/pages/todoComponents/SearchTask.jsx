import React from 'react'

export const SearchTask = ({ searchList, setSearchlist }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder='Search Task' value={searchList} onChange={(e) => setSearchlist(e.target.value)} />
        </form>
    );
}

