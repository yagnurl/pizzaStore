import React from 'react'

function About() {
    return (
        <>
            <div className="container">
                <h1 className="ls-2 mt-5 px-5 pt-5 text-primary">ABOUT PIZZA </h1>
                <h3 className="ls-2 mt-0 p-5">
                    This project is created because the developer of the project is fall in 💓 with pizza

                </h3>


                <ul className='fs-20 p-5 ls-2 list-unstyled'>
                    <li className="fbold fs-30">In this project:</li>
                    <li>React.js is used to build :)</li>
                    <li>React Router Dom is used to navigate the links</li>
                    <li> React Bootstrap is used to make a better UI.</li>
                    <li> Font Awesome is used for icons </li>
                    <li>Google Fonts is used for this awesome font </li>

                </ul>
            </div>

        </>
    )
}
export default About