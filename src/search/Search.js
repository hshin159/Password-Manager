import React from 'react'
import './Search.css';

//https://codepen.io/liamj/pen/vYYLGZj

export default function Search() {
    return (
        <div className="search">
            <div class="form__group">
            <input type="text" class="form__input" id="name" placeholder="Search" required="" />
            {/* <label for="name" class="form__label">Search</label> */}
            </div>
        </div>
    )
}
