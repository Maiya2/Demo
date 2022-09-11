import React from 'react'
import image from "./../image/anny.jpg"
export const FlipCards = () => {
    return (
        <div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={image} alt="Avatar" className='image-styling'></img>
                    </div>
                    <div class="flip-card-back">
                        <h1>Hafiza Sumaiya Abdul Majeed</h1>
                        <p>web development App  development</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
