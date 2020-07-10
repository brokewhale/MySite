import React from 'react';




// import styled from "styled-components";

function Intro() {


    return (


        <div className="intro">

            <h1 className='intro__title'>Frontend Developer</h1>
            <p className="intro__info">
                Hello, I'm Yusuf Kehinde, a front-end developer,
                I build websites, develop web and mobile applications.
        </p>
            <a href="mailto:yusufkehinde11@gmail.com"><button className='intro__btn'>HIRE ME</button></a>
            {/* <button onClick={themeToggler}>Switch Theme</button> */}

        </div>

    )
}
export default Intro