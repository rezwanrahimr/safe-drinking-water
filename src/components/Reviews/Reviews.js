import React from 'react';
import useReviews from '../../Hook/useReviews';
import './Reviews.css';


const Reviews = () => {
 const [review,setReview] = useReviews();
    return (
        <div>
           
         {
             review.map(reviews => <div className='review-items ' key={reviews.id}>
              <div className='review-item my-5'>
                  <img src={reviews.picture} alt="" />
                  <h4>{reviews.name}</h4>
                  <h4>Rating: {reviews.rating} star</h4>
                  <p>{reviews.text}</p>
              </div>
             </div>)
         }
        </div>
    );
};

export default Reviews;