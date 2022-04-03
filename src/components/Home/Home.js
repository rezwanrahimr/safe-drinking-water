import React from 'react';

const Home = () => {
    return (
        <div className='container'>
           <div className='row'>
               <div className='col-md-6 d-flex align-items-center'>
                   <div>
                   <h1 className='fw-bold text-primary '>SAFE DRINKING WATER</h1>
                    <h4 className='text-primary'>GET PUREIT RO EXPERIENCE FOR</h4>
                    <h4 className='text-primary'>15 DAYS WITHOUT BUYING</h4>
                    <h4 className='text-primary'>REGISTER NOW</h4>
                    <h5 className='text-primary'>FOR HOME TRIAL</h5>
                    <div>
                        <button className='p-2 rounded px-2 mt-2 bg-primary border-0 text-white'>Conditions Apply</button>
                    </div>
                   </div>
                   
                  
               </div>
               <div className='col-md-6'>
                   <img src="https://static-01.daraz.com.bd/p/18b4aa9268a6a1609e370de6f6d0e18b.jpg" alt="" />
               </div>
           </div>
        </div>
    );
};

export default Home;