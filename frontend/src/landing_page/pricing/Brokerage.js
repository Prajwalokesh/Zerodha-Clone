import React from 'react';
function Brokerage() {
    return ( 
       <div className='container p-5'>
        <div className='row text-center'>
            <div className='col-7'>
                <h5 style={{color:'#387ED1'}}>Brokerage calculator</h5>
                <ul className='mt-5 ' style={{ fontSize: '13px', listStylePosition: 'outside', textAlign: 'left', paddingLeft: '25px' }}>
                    <li className='mt-3 text-muted' >Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order</li>
                    <li className='mt-3 text-muted'>Digital contract notes will be sent via email</li>
                    <li className='mt-3 text-muted'>Physical copies of contract notes ,if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li className='mt-3 text-muted'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower)</li>
                    <li className='mt-3 text-muted'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower)</li>
                    <li className='mt-3 text-muted'>If the account is in debt balance , any order placed will be charged ₹40 per executed order instead of ₹20 per executed order</li>
                </ul>
            </div>
            <div className='col-5'>
                <h5 style={{color:'#387ED1'}}>List of charges</h5>
            </div>
        </div>
       </div>
     );
}

export default Brokerage;