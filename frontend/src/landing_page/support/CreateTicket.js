import React from 'react';
function CreateTicket() {
    return ( 
        <>
      <h4 className='mt-4' style={{paddingLeft: '110px'}}>To create a ticket, select a relevant topic</h4>
      <div className='container mt-4'>
       <div className='row'>
        <div className='col-4 mt-4' style={{ fontFamily: 'Arial, sans-serif' , lineHeight: '2.5' }}>
            <h4 className='mb-4'><i className="fa-solid fa-circle-plus fa-xs" ></i> Account Opening</h4>
            <a href='#' style={{textDecoration: 'none'}}>Online Account Opening</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Offline Account Opening</a><br /> 
            <a href='#' style={{textDecoration: 'none'}}>Company,Partnership and HUF Account Opening</a><br />
            <a href='#' style={{textDecoration: 'none'}}>NRI Account Opening</a> <br />
            <a href='#' style={{textDecoration: 'none'}}>Charges at Zerodha</a> <br />
            <a href='#' style={{textDecoration: 'none'}}>Account Opening Form</a> <br />
            <a href='#' style={{textDecoration: 'none'}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a> <br />
            <a href='#' style={{textDecoration: 'none'}}>Getting Started</a>
        </div>
        <div className='col-4 mt-4' style={{ fontFamily: 'Arial, sans-serif' , lineHeight: '2.5' }}>
            <h4 className='mb-4'><i className="fa-solid fa-user fa-xs"></i> Your Zerodha Account</h4>
            <a href='#' style={{textDecoration: 'none'}}>Login Credentials</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Account Modification and Segment Addition</a><br />
            <a href='#' style={{textDecoration: 'none'}}>DP ID and bank details</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Your Profile</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Transfer and conversion of shares</a>
        </div>
        <div className='col-4 mt-4' style={{ fontFamily: 'Arial, sans-serif' , lineHeight: '2.5' }}>
            <h4 className='mb-4'><i className="far fa-chart-bar fa-xs fix-chart"></i> Your Zerodha Account</h4>
            <a href='#' style={{textDecoration: 'none'}}>Margin/leverage, Product and Order types</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Kite Web and Mobile</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Trading FAQs</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Corporate Actions</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Sentinel</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Kite API</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Pi and other platform</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Stockreports+</a><br />
            <a href='#' style={{textDecoration: 'none'}}>GTT</a>
        </div>
       </div>
       <div className='row'>
        <div className='col-4 mt-4' style={{ fontFamily: 'Arial, sans-serif' , lineHeight: '2.5' }}>
            <h4 className='mb-4'><i class="fa-regular fa-credit-card"></i> Funds</h4>
            <a href='#' style={{textDecoration: 'none'}}>Adding Funds</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Fund Withdrawal</a><br />
            <a href='#' style={{textDecoration: 'none'}}>eMandates</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Adding Bank Accounts</a>
        </div>
        <div className='col-4 mt-4' style={{ fontFamily: 'Arial, sans-serif' , lineHeight: '2.5' }}>
            <h4 className='mb-4'><i class="fa-solid fa-circle-notch"></i> Console</h4>
            <a href='#' style={{textDecoration: 'none'}}>Reports</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Ledger</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Portfolio</a><br />
            <a href='#' style={{textDecoration: 'none'}}>60 Day Challenge</a><br />
            <a href='#' style={{textDecoration: 'none'}}>IPO</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Referral Program</a>
        </div>
        <div className='col-4 mt-4' style={{ fontFamily: 'Arial, sans-serif' , lineHeight: '2.5' }}>
            <h4 className='mb-4'><i class="fa-regular fa-circle"></i> Coin</h4>
            <a href='#' style={{textDecoration: 'none'}}>Understanding Mutual Funds</a><br />
            <a href='#' style={{textDecoration: 'none'}}>About Coin</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Buying and Selling through Coin</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Starting an SIP</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Managing your Portfolio</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Coin App</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Moving to Coin</a><br />
            <a href='#' style={{textDecoration: 'none'}}>Government Securities</a><br />
        </div>
       </div>
      </div>
        </>
     );
}

export default CreateTicket;