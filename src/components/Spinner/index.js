import React from 'react';
import "./style.scss"
const Spinner = () => {
    return (
        <div className="loader">
            <div className="loader_animation">
                <div className="spinner"></div>
                <div className="tx-loading">
                    <span data-text-preloader="R" className="letters-loading">R</span>
                    <span data-text-preloader="E" className="letters-loading">E</span>
                    <span data-text-preloader="S" className="letters-loading">S</span>
                    <span data-text-preloader="T" className="letters-loading">T</span>
                    <span data-text-preloader="O" className="letters-loading">O</span>
                    <span data-text-preloader="R" className="letters-loading">R</span>
                    <span data-text-preloader="I" className="letters-loading">I</span>
                    <span data-text-preloader="A" className="letters-loading">A</span>
                </div>
            </div>
        </div>
    );
};

export default Spinner;