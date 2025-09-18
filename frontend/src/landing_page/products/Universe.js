import React from "react";

function Universe() {
  return (
    <div className="container">
        <div className="row text-center mt-5" style={{margin:'0' , padding:'0'}}>
            <h4 className="mt-5">The Zerodha Universe</h4>
            <p className="mt-3 fs-6 text-muted text-small">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="col-4 p-3 mt-4" style={{margin:'0' , padding:'0'}}>
                <img src='media/zerodhaFundhouse.png'  width={200} height={50}/>
                <p className="text-small text-muted mt-3 mt-3 fs-6">Our asset management venture<br />
                   that is creating simple and transparent index <br />
                   funds to help you save for your goals.</p>
            </div>
            <div className="col-4 p-4 mt-4" style={{margin:'0' , padding:'0'}}>
                <img src='media/sensibull-logo.svg' height={40} />
                <p className="text-small text-muted mt-3 fs-6">Options trading platform that lets you<br />
                   create strategies, analyze positions, and examine<br />
                  data points like open interest, FII/DII, and more.
                </p>
            </div>
            <div className="col-4 p-4 mt-4" style={{margin:'0' , padding:'0'}}>
                <img src='media/tijori.svg' height={60} />
                <p className="text-small text-muted mt-3 fs-6">Investment research platform <br />
                   that offers detailed insights on stocks, <br />
                   sectors, supply chains, and more.</p>
            </div>
            <div className="col-4 p-4" style={{margin:'0' , padding:'0'}}>
                <img src='media/streakLogo.png' height={60} />
                <p className="text-small text-muted mt-3 fs-6">Systematic trading platform <br />
                              that allows you to create and backtest <br />
                              strategies without coding.</p>
            </div>
            <div className="col-4 p-4" style={{margin:'0' , padding:'0'}}>
                <img src='media/smallcaseLogo.png' height={60} />
                <p className="text-small text-muted mt-3 fs-6">Thematic investing platform <br />
                     that helps you invest in diversified <br />
                     baskets of stocks on ETFs.</p>
            </div>
            <div className="col-4 p-4" style={{margin:'0' , padding:'0'}}>
                <img src='media/dittoLogo.png' height={60} />
                <p className="text-small text-muted mt-3 fs-6">Personalized advice on life <br />
                           and health insurance. No spam <br />
                          and no mis-selling.</p>
            </div>
            <div><button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{width:"17%" , margin: "0 auto"}}>Signup for free</button></div>
    
        </div>
        </div>
  );
}

export default Universe;   // ✅ MUST export default
