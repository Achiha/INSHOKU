import React, { useState, Dispatch, SetStateAction } from 'react';
import List from '@/components/List';
import Modal from '@/components/Modal';

interface GalleryLayoutProps {}

interface ModalProps {
  selected: any; // replace 'any' with the actual type of 'selected'
  setSelected: Dispatch<SetStateAction<any>>; // replace 'any' with the actual type of 'selected'
}

const GalleryLayout: React.FC<GalleryLayoutProps> = () => {
  const [selected, setSelected] = useState<null | any>(null);

  return (
    <div className='h-auto w-full bg-black'>
      <div className='flex justify-center items-center px-2'>
        <Modal selected={selected} setSelected={setSelected} />
        <List setSelected={setSelected} />
        {/* useState to contain gallery images and music */}
        {/* useEffect to fetch images and music from firebase */}
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default GalleryLayout;
