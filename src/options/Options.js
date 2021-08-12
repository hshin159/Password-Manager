import React from 'react'
import './Options.css';

export default function Options() {
    return (
        <div className="options">
            <div className="dropdown">Select One
                <div className="choices">
                    <div className="recentlyUsed">Recently Used</div>
                    <div className="alphabetical">Alphabetical</div>
                    <div className="reverseAlphabetical">Reverse Alphabetical</div>
                </div>
            </div>
            


            {/* <select className ="dropdown">
                <option value="recentlyUsed">Recently Used</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="reverseAlphabetical">Reverse Alphabetical</option>
            </select> */}
        </div>
    )
}
