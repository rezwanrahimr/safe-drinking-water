import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hook/useReviews';
import './Home.css';

const Home = () => {
    const [review,setReview] = useReviews();
    return (
        <div className='container mb-5'>
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
           {/* review section */}
           <h2>Customar Review</h2>
           <div className='container review-itemss'>
             
             {
             review.slice(0,3).map(reviews => <div className='review-items ' key={reviews.id}>
              <div className='review-item my-5'>
                  <img className='user-img' src={reviews.picture} alt="" />
                  <h4>{reviews.name}</h4>
                  <h4>Rating: {reviews.rating} star</h4>
                  <p>{reviews.text}</p>
              </div>
              
             </div>)
         }
         
           </div>
           <button className='p-2 rounded px-3 py-1 mt-2 bg-primary border-0 '> <Link className='text-decoration-none text-white' to="/reviews">see all reviews</Link></button>
        </div>
    );
};

export default Home;