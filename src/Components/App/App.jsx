import { useState } from "react";
import Plan from "../Plan/Plan";
import './App.css'


export default function App(){
    let [pricing,setPricing] = useState(0)
    return(
        <>
        <main className="container">
            <header className="pricing">
                <h1>Our Pricing</h1>
                <div className="toogle">
                    <p>Monthly</p>
                    <div>
                        <input type="checkbox" id="switch" />
                        <label htmlFor="switch" onClick={event => pricing === 0 ? setPricing(1) : setPricing(0)}>Toggle</label>
                    </div>
                    <p>Annually</p>
                </div>
            </header>
            <main>
                <Plan MorY={pricing} name={'Basic'} price={{monthly : 19.99 ,yearly : 199.99}} features={['500 GB Storage','2 Users Allowed','Send up to 3 GB']}  />
                <Plan id={'Professional'} MorY={pricing} name={'Professional'} price={{monthly : 24.99 ,yearly : 249.99}} features={['1 TB Storage','5 Users Allowed','Send up to 10 GB']}  />
                <Plan MorY={pricing} name={'Master'} price={{monthly : 39.99 ,yearly : 399.99}} features={['2 TB Storage','10 Users Allowed','Send up to 20 GB']}  />
            </main>

        </main>
    </>)
}