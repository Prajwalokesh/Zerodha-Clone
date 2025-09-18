import React from 'react';
function Team() {
    return (
        <div className='container'>
            <div className='row p-3 mt-3 border-top'>
                <h1 className='text-center '>People</h1>
            </div>
            <div className='row p-3 mt-2  text-muted' style={{fontSize: "1.1em" , lineHeight: "1.8"}}>
                <div className='col-6 p-2 text-center'>
                    <img src='Media/nithinKamath.jpg' alt='Team Image' style={{width: "50%", borderRadius: "100%"}}/>
                    <h4 className='mt-5'>Nithin Kamath</h4>
                    <h6 className='mt-3 text-muted'>Founder & CEO</h6>
                </div>
                <div className='col-6 p-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href="https://zerodha.com" style={{textDecoration: 'none' }}>Homepage</a> / <a href="https://tradingqna.com" style={{textDecoration: 'none' }}>TradingQnA</a> / <a href="https://twitter.com/nithinkamath" style={{textDecoration: 'none' }}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;