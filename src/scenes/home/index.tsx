import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Video from "@/assets/img_default/logovideo.mp4";
import { NavLink } from 'react-router-dom';

const Index = () => {
  return (





    <section className=' flex items-center justify-center mt-32 h-screen  md:m-2 '>
    <div className="flex flex-col items-center  justify-center md:flex-row md:items-center md:w-full md:h-screen ">

      <video autoPlay loop src={Video} className="w-full pl-12 md:w-1/2" />


      <motion.div className="flex flex-col  items-center gap-8 pt-6 px-16 md:w-1/2
      md:items-start"

      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}

      >
      <div className=''>

    </div>


        <h1 className="text-3xl font-bold mb-4 text-orange-1 text-4xl">
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Greetings, we are INSHOKU.',
        1000,
        'We make things.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"


        'We promote what matters.',
        1000
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}

    />
        </h1>
        <p className="text-lg mb-8   md:pr-32">We are an organization that engages in the creation and promotion of items we deem valuable.</p>
        <NavLink
         to={'/aboutUs'}
         >
        <button
    type="submit"
    className="mb-6  inline-block w-full rounded bg-white/10 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-beige-1 shadow-[0_4px_9px_-4px_#C3FBC6] transition duration-150 ease-in-out hover:bg-green-1 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] hover:text-black focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow- lg:mb-0 "
  >

    More about Us
  </button>
  </NavLink>

      </motion.div>




    </div>
    </section>
  );
};

export default Index;
