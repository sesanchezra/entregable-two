import React from 'react'
import '../components/Loader.css'

const Loader = () => {
    return (
        <div className='loader'>
            <div class="lds-dual-ring"></div>
            <h1>
                <span class="let1">l</span>
                <span class="let2">o</span>
                <span class="let3">a</span>
                <span class="let4">d</span>
                <span class="let5">i</span>
                <span class="let6">n</span>
                <span class="let7">g</span>
            </h1>

        </div>
    )
}

export default Loader
