
import { TypeAnimation } from 'react-type-animation';



const Shop = () => {
  return (






<section className=' flex items-center justify-center h-screen ustify-center mt-32   '>


<div className="container   md:px-12">

<h1 className='text-center tracking-widest font-sans mt-8 pr-8 text-3xl mb-12'>Shop
</h1>


<h2 className='text-green-1 text-3xl text-center mb-12 leading-relaxed'>
<TypeAnimation
sequence={[
// Same substring at the start will only be typed out once, initially
'Comming soon.',
1000,

]}
wrapper="span"
speed={30}
style={{ fontSize: '2em', display: 'inline-block' }}
repeat={Infinity}
/>
</h2>


</div>
</section>


  );
};

export default Shop;
