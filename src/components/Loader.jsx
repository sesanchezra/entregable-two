import React from 'react'
import '../components/Loader.css'

const Loader = () => {
    return (
        <div className='loader'>
            <div className="lds-dual-ring"></div>
            <h1>
                <span className="let1">l</span>
                <span className="let2">o</span>
                <span className="let3">a</span>
                <span className="let4">d</span>
                <span className="let5">i</span>
                <span className="let6">n</span>
                <span className="let7">g</span>
            </h1>

        </div>
    )
}

export default Loader
