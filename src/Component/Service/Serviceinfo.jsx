import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Serviceinfocard from './Serviceinfocard';

const Serviceinfo = () => {

    const {id} = useParams()

    const cardinfo = useLoaderData()

    const info =  cardinfo?.find(info => info.id == id)

       console.log(info)
  
    return (
        <div className='mx-auto my-10 max-w-screen-xl px-5 lg:px-0 '>

{
    <Serviceinfocard info={info}></Serviceinfocard>
}

        </div>
    );
};

export default Serviceinfo;