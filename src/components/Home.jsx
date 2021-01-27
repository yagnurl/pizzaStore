import React from 'react'
import { Navbar } from 'react-bootstrap'
import "../App.css"
import Gallery from './Gallery'
function Home() {
    return (
        <>
            <div className="row parallax" />
            <div className="container-fluid">

                <div className=" mt-5 mb-5 col-sm-12">
                    <h1 className="text-center">Fresh & High Quality ingredients used everyday
</h1>
                    <p className="text-center col-sm-6 offset-sm-3 arial">The Pizza Store is a local, family-owned business based out of Placentia, CA. Providing world class italian pizza and many popular dishes for over 30 years to the local residents of Orange County. We use the freshest and high quality ingredients for all of our dishes. According to local customers, The Pizza Store is one of the best-class pizza restaurants in the area.
</p>
                    <p className="text-center col-sm-6 offset-sm-3 arial">Please Visit our Menu to see our awesome pizzas!</p>
                </div>
            </div>


            <Gallery className="mb-5 pb-5" />
        </>
    )
}

export default Home