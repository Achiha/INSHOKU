
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
const AboutUs = () => {
  return (


       <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=" h-auto  w-full "
            >





      <section className=' flex items-center justify-center mt-32 px-16  '>


        <div className="container  md:px-12">

       <h1 className='text-center tracking-widest font-sans mt-8 pr-8 text-3xl mb-12'>ABOUT
      </h1>


      <h2 className='text-green-1 text-3xl text-center mb-12 leading-relaxed'>
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
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
       </h2>
       <br />
        <br />  <br />



       <h3 className=' font-bold text-2xl mb-6 text-center'>#1 Most products would be better off not existing. </h3>
        <p  className='mb-6 text-md'>Sadly, most products and services worldwide handle many issues, such as environmental impact, unfair labor practices, exploitation of non-human animals, and consumer dependency.

        <br />
        <br />


        While we do not categorize ourselves as anti-capitalist, it is challenging to disregard the detrimental consequences that most profit-driven goods and services have on society. These ongoing problems disproportionately advantage the suppliers, prompting the argument that we would be "better off without them," if not for the financial gains of the vendors.
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 className='font-bold text-2xl mb-6 text-center'>#2 Problematic Lack of Responsibility in Advertising. </h3>

        The advertising industry, which usually acts as a financially compensated supporter for vendors, seldom dares to question the established order unless presented with obvious cases of discrimination or other issues that may not be in their favor. It commonly functions as a medium that lacks critical evaluation, merely magnifying product sales and adding to broader societal challenges. The efforts of individuals striving to create a positive impact are frequently eclipsed by the influence of corporate advertising giants.
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 className='font-bold text-2xl mb-6 text-center'>#3 What We Do </h3>
        INSHOKU regards this situation as a challenge and is committed to contributing to its resolution. We are a team that has united to promote specific content at a cost-effective rate. Our membership comprises individuals who possess expertise in diverse fields, including composers, graphic designers, photographers, cartoonists, chefs, programmers, and more.

        <br /><br />
        While we prioritize "moral" values, we acknowledge the existence of other important values. The world is filled with a multitude of fascinating, humorous, delectable, and other captivating things.
        <br /><br />
        <br /><br />
        <br />
        <br />

        *While INSHOKU's activities are confined in scope, you can establish contact with specific members through the contact page.






        </p>







      </div>
</section>

</motion.div>

  );
};

export default AboutUs;
