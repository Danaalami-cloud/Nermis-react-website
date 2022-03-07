import React from 'react';
import '../App.css'

const Hero = () => {
    return (
        <div className="overlay" id="home">
            <section className="intro">
                <div className="content">
                    <h1> Welcome to Nermis</h1>
                    <h4> Botanical Blends.Natural Skin Food</h4>
                    {/* <h1> Natural Skin Food</h1> */}
                </div>
            </section>
        </div>
    );
}

export default Hero;