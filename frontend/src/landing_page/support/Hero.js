import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5  mb-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='#' style={{color:'white', textDecoration:'none'}}>Track Tickets</a>
            </div>
            <div className='row p-5 mt-5 mb-5' >
                <div className='col-6 p-5' id='supportSearch'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mt-3 mb-3' placeholder='Eg. how do I activate F&O, why is my order getting rejected..'/><br />
                    <div>
                    <a href='#' style={{color:'white',marginRight: "20px"}}>Track account Opening</a>
                    <a href='#' style={{color:'white',marginRight: "20px"}}>Track segment activation</a>
                    <a href='#' style={{color:'white',marginRight: "20px"}}>Intraday<br />margins</a>
                    <a href='#' style={{color:'white'}}>Kite user manual</a>
                    </div>
                </div>
                <div className='col-6 p-5'>
                    <h1>Featured</h1>
                    <ol style={{lineHeight:'2'}}>
                        <li><a href='#' style={{color:'white'}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href='#' style={{color:'white'}}>Latest intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
                
        </section>
     );
}

export default Hero;