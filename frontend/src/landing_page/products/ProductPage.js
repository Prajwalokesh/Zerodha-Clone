import React from 'react';
import Hero1 from './Hero1';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <div>
            <Hero1 />
            <LeftSection 
                imageURL='Media/kite.png'
                productName='Kite'
                productDescription=''
                tryDemo='#'
                learnMore='#'
                googlePlay='#'
                appStore='#'
            />
            <RightSection 
            imageURL='Media/console.png'
                productName='Console'
                productDescription=''
                tryDemo='#'
                learnMore='#'
                googlePlay='#'
                appStore='#'/>
            <LeftSection 
                imageURL='Media/coin.png'
                productName='Coin'
                productDescription=''
                tryDemo='#'
                learnMore='#'
                googlePlay='#'
                appStore='#'
            />
            <RightSection 
            imageURL='Media/API.svg'
                productName='Kite Connect API'
                productDescription=''
                tryDemo='#'
                kiteConnect='#'
                googlePlay='#'
                appStore='#'
            />
            <LeftSection 
                imageURL='Media/varsity.png'
                productName='Varsity mobile'
                productDescription=''
                tryDemo='#'
                learnMore='#'
                googlePlay='#'
                appStore='#'
            />
            <p className='text-center mt-5 fs-5'>Want to know more about our technology stack? Check out the <a href='https://zerodha.tech' style={{textDecoration: 'none'}}>Zerodha.tech blog.</a></p>
            <Universe />
        </div>
     );
}

export default ProductPage;