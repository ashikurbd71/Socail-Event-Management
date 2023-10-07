import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillBackward } from "react-icons/ai";


const Serviceinfocard = ({info}) => {

    const { name, price, description, image,id ,details} = info
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-10">Event Details </h1>

<div className="card lg:card-side  bg-[#141E46]  shadow-xl">
<figure><img src={image} alt="Album" className='lg:w-[600px] w-full h-full'/></figure>
<div className="card-body">
<h2 className="card-title text-[#1AACAC]">{name}</h2>
<p className='text-[#fff] lg:w-[600px]'>{details}</p>
<div className="card-actions justify-end ">
<Link to={'/'}> <button className="btn px-8 btn-outline btn-success  "><AiFillBackward className='text-xl'></AiFillBackward> Back</button></Link>
 <Link to={'/contect'}> <button className="btn btn-outline btn-success px-8 ">
              Contect <BsFillTelephoneFill></BsFillTelephoneFill>
            </button></Link>
</div>
</div>
</div>
        </div>
    );
};

export default Serviceinfocard;