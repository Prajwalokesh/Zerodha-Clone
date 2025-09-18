import React from 'react';
function Hero() {
    return ( 
         <div className='container'>
            <div className='p-5 mt-5 '>
                <h1 className=' text-center' style={{fontFamily:'Arial, sans-serif' , fontSize: '30px' , fontWeight: '400'}}>Charges</h1>
                <h4 className=' text-center fs-5 mt-2'style={{color: '#9B9B9B'}} >List of all charges and taxes</h4>
            </div>
            <div className='row p-5 mt-5'>
                <div className='col-4 p-5'>
                    <img src='Media/pricingEquity.svg'  height={200} style={{marginLeft: '50px'}}/>
                    <h1 className='mt-5 fs-2 text-center'>Free equity delivery</h1>
                    <p className='text-center mt-4 text-muted' style={{fontSize: '17px'}}>All equity delivery investments (NSE, BSE),<br />are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='Media/intradayTrades.svg' height={200} style={{marginLeft: '50px'}}/>
                    <h1 className='mt-5 fs-2 text-center'>Intraday & F&O</h1>
                    <p className='text-center mt-4 text-muted' style={{fontSize: '17px'}}>Flat ₹ 20 or 0.03% (whichever is lower) per<br />executed order on intraday trades across<br />equity, currency, and commodity trades. Flat <br />₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='Media/pricingMF.svg' height={200} style={{marginLeft: '50px'}}/>
                    <h1 className='mt-5 fs-2 text-center'>Free direct MF</h1>
                    <p className='text-center mt-4 text-muted' style={{fontSize: '17px'}}>All direct mutual fund investments are<br />absolutely free — ₹ 0 commissions & DP<br />charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;