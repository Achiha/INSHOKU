import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence and motion

import { items } from './data.tsx';

interface CardProps {
  setSelected: (item: any) => void;
  item: any;
  selected: {
    id: string;
    url: string;
    title: string;
    tags: string[];
    description: string;
  } | null;
}

const Card = ({ setSelected, item}: CardProps) => { // Add 'selected' to the destructured props
  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.5}}
    transition={{duration: 2}}
    variants={{
      hidden: {
        opacity: 0,

      },
      visible: {
        opacity: 1,

      },
    }}// Increase the duration to slow down the animation
      className='flex flex-col justify-center items-center w-full text-center' // Change the class to flex-col and add items-center
      onClick={() => {
        setSelected(item);
      }}
      onContextMenu={handleContextMenu}
    >
      <motion.img
        whileHover={{ scale: 0.98, transition: { duration: 0.12 } }}
        src={item.url}
        alt="Item Image"
        whileTap={{ scale: 1.11, transition: { duration: 0.3 } }}
        className='w-auto image-full mb-32 cursor-pointer  max-h-[600px] rounded-lg'
        layoutId={`card-${item.id}`}
      />
      {/* <h3 className="text-sm my-4 mb-32">{item.title}</h3> Add this line to display the title */}
    </motion.div>
  );
};

interface ListProps {
  setSelected: (item: any) => void;
}

const List = ({ setSelected }: ListProps) => {
  return (
    <div className='px-4 mt-32'>
      <h1 className='text-center tracking-widest font-sans mt-8 pr-8 text-3xl'>IMAGES</h1>

      <div className='columns-2 md:columns-3 mt-28 md:px-12 xl:columns-4 xl:gap-10 gap-x-16'>
        {items.map((item: any) => (
          <AnimatePresence key={item.id}>
            <Card setSelected={setSelected} item={item} selected={null} /> // Pass 'selected' prop as null
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default List;
