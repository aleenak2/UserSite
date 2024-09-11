import React from 'react';
//import {Link} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';

const Home = () => {

    const headshot = {
        width: '25vw',
        height: 'auto',
        margin: '0px 40px',
        maxWidth: '600px',
    }

    const info = {
        flexDirection: 'column',
        textAlign: 'center',
        width: '125',
    }

    const section = {
        backgroundColor: 'whitesmoke',
        margin: '0px 15px',
    }

    return (
        <>
            <br></br>
            <div class="d-flex justify-content-center padding:2%">
                <img src="images/headshot.jpg" alt="Headshot Photo" style={headshot}/>
                <div style="align-self: center;">
                    <div class="d-flex justify-content-center" style={info}>
                            <h2>Aleena Khan | PhD Candidate</h2>
                            <h2>University of Illinois</h2>
                    </div>
                    <div>
                        <br></br>
                        <br></br>
                        <h4 style="color: rgb(0, 89, 255);text-decoration: underline;">Research Interests</h4>
                        <h5>American Politics</h5>
                        <h5>Identity Politics</h5>
                        <h5>Political Behavior</h5>
                        <h5>Political Psychology</h5>
                    </div>
                </div>
            </div>
            <br></br>
            <div style={section}>
                <h3><strong>Research Agenda</strong></h3>
            </div>
            <br></br>
            <br></br>
            <div style={section}>
                <h3><strong>Awards and Honors</strong></h3>
                <p></p>
                <h5>Rita and Leonard Ogren Award</h5>
            </div>
        </>

);
}

export default Home;