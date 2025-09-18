import React from "react";

function RightSection({ imageURL, productName, kiteConnect,tryDemo, learnMore}) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6 " style={{marginTop: '150px' , paddingLeft: '150px'}}>
                <h1 className="fs-3 mb-3">{productName}</h1>
                <p style={{lineHeight: '1.9'}}>The central dashboard for your Zerodha<br />account. Gain insights into your trades and <br />investments with in-depth reports and <br />visualisations.</p>
                <div>
                    <a href={kiteConnect} style={{textDecoration: 'none' }}>Kite Connect →</a>
                </div>
            </div>
            <div className="col-6" style={{paddingRight: '300px'}}>
                <img src={imageURL}/>
        </div>
        </div>
        </div>
  );
}

export default RightSection;   // ✅ MUST export default
