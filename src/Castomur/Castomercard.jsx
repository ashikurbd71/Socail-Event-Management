import React from 'react';

const Castomercard = ({comment}) => {

      const{image_url,comment_text,customer_name} = comment
    return (
        <div>
          
          <div className="w-full ">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full border-2 border-[#141E46] shadow-lg"
              src={image_url}
              alt="Bonnie image"
            />
            <div className="rating mb-3">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
            <h5 className="mb-1 text-xl font- font-semibold text-[#1AACAC] dark:text-white">
             {customer_name}
            </h5>
            
            <span className="text-sm text-center font-me font-medium px-3 text-black dark:text-gray-400">
          {comment_text}
            </span>
           
          </div>
        </div>
  
        </div>
    );
};

export default Castomercard;