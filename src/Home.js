import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className ="home_container">
                <img className="home_image" src =".\70524900-medical-vector-background-for-your-website-business-cards-brochures-.jpg" />
        
            <div className="home_row">
             <Product id="12321341"
            title="Paracetamol 500mg Tablet 10'S"
            price={40.96}
            rating={5}
            image="https://4.imimg.com/data4/AW/AE/MY-4092588/paracetamol-tablets-500x500.jpg"
            />
          <Product
            id="49538094"
            title="Fabiflu 400 Tablet"
            price={1040.0}
            rating={4}
            image="https://cdn01.pharmeasy.in/dam/products/Z12160/fabiflu-400mg-strip-of-17-tablets-box-front-1-1615990105.jpg?dim=240x240&dpr=1&q=100"
          />
            </div>
            <div className="home_row">
            <Product
            id="4903850"
            title="DR VAKU® Pulse Oximeter Fingertip LED Screen, Blood Oxygen Saturation Monitor Fingertip, Blood Oxygen Meter Finger Oximeter Finger with Pulse, O2 Monitor - Blue"
            price={1700}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Up6ayOQwS._SL1500_.jpg"
            />
          
          <Product
            id="23445930"
            title="Lifebuoy Alcohol Based Hand Sanitizer 500ml"
            price={200}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61HhZ5zvNsS._SL1500_.jpg"
          />  
            </div>
          <div className="home_row">
          <Product
            id="3254354345"
            title="ONSAFE Latex Medical Examination Disposable Powdered Hand Gloves -100 Pieces"
            price={719}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51qWLtBjbZL._UL1000_.jpg"
          />
            <Product
            id="90829332"
            title="Bildos SSMMS Fabric Disposable Mask with Super Spandex Elastic (Blue, Pack of 100)"
            price={250}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Hs8HGmvRS._UL1500_.jpg"
          />
          </div>
          <div className="home_row">
          <Product
            id="3254354345"
            title="Dr Ortho Elastic Crepe Bandage (8cm x 4mt, 2 Clips and Non Fraying Edges)"
            price={179.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61cOBpFV9VL._SL1001_.jpg"
          />
            <Product
            id="90829332"
            title="Dettol Liquid Disinfectant Cleaner for Home, Lime Fresh, 500ml"
            price={174.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61-rxQB%2BrSL._SL1000_.jpg"
          />
          </div>
          <div className="home_row">
          <Product
            id="3254354345"
            title="Crocin Advance 500mg Tablet 15'S
            Pain relief
            "
            price={15.48}
            rating={4}
            image="https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1600086778/cropped/oqc9kspkldl7wotd2ma1.jpg"
          />
            <Product
            id="90829332"
            title="Azithral-500 Tablet 5's"
            price={118.88}
            rating={4}
            image="https://newassets.apollo247.com/pub/media//catalog/product/a/z/azi0013_1.jpg"
          />
          </div>
          <div className="home_row">
          <Product
            id="3254354345"
            title="Dr Trust (USA) Waterproof Flexible Tip Digital Thermometer (White) "
            price={299.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61eT2Cpr6lL._SL1500_.jpg"
          />
            <Product
            id="90829332"
            title="Dr Trust Smart Dual Talking Automatic Digital Blood Pressure Monitor BP Machine"
            price={1999.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61tJ7bwv%2ByL._SL1500_.jpg"
          />
          </div>
        </div> 
      </div>
    );
}

export default Home


