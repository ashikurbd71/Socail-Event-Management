
import Castomur from '../Castomur/Castomur';
import Banner from '../Component/Heading/Banner/Banner';
import Service from '../Component/Service/Service';
import Team from './Team';

const Home = () => {
    return (

        <>

        <div className='bg-[#141E46]'>
      
            <Banner></Banner>
        </div>

          <div className='my-10 mx-auto  max-w-screen-xl'>
            <Service></Service>

            <Team></Team>

            <Castomur></Castomur>
          </div>

        </>
    );
};

export default Home;