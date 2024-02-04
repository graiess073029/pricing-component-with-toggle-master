/* eslint-disable strict */
'use strict'
import './Plan.css'

export default function Plan({id,name,price,features,MorY}){
    return (
        <section id={id} className="plan">
            <header className="name">
                <h3>{name}</h3>
                <p>$ <span>{MorY === 0 ? price.monthly : price.yearly}</span> </p>

            </header>
            <main className="featuresPrice">
                <ul>
                    {features.map(feature => <li><p>{feature}</p></li>  )}
                </ul>
            </main>
            <footer className="learn">
                <button>LEARN MORE</button>
            </footer>
        </section>
    )
}