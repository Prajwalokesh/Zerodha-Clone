import React from "react";

function LeftSection({ imageURL, productName, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-5 p-5 mt-2">
                <img src={imageURL}/>
            </div>
            <div className="col-2"></div>
            <div className="col-5 p-5 mt-5" style={{marginLeft: '-5px'}}>
                <h1 className="fs-3">{productName}</h1>
                <p style={{lineHeight: '1.9'}}>Our ultra-fast flagship trading platform with <br /> streaming market data, advanced charts, an <br /> elegant UI, and more. Enjoy the Kite <br /> experience seamlessly on your Android and <br /> iOS devices.</p>
                <div >
                    <a href={tryDemo} style={{textDecoration: 'none'}}>Try Demo  →</a>
                    <a href={learnMore} style={{ marginLeft: '60px', textDecoration: 'none' }}>Learn More  →</a>
                </div>
                <div className="mt-4">
                       <a href={googlePlay}><img src='Media/googlePlayBadge.svg' alt='Google Play' /></a>
                       <a href={appStore} style={{ marginLeft: '30px' }}><img src='Media/appStoreBadge.svg' alt='App Store' /></a>
                </div>
            </div>
        </div>
        </div>
  );
}
export default LeftSection;   // ✅ MUST export default
