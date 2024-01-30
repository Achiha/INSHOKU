import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const handleContextMenu = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  e.preventDefault(); // Prevent the default context menu behavior
};

const NotFound = (props: Props) => {
  return (

<div className=' h-screen'>
    <div className="bg-blackblack text-orange-2 flex flex-col items-center justify-center  h-full ">


      <div className=" flex items-center mb-4">
        <h2 className="text-6xl font-extrabold">
          4
        </h2>
        <div className="w-16 h-auto mx-2">
          <img
            src="./src/assets/img_default/eye-sm.png"
            alt="0"
            className="max-w-full h-auto mt-3"
            onContextMenu={handleContextMenu} // Add the event handler here
          />
        </div>
        <h2 className="text-6xl font-extrabold">
          4
        </h2>
      </div>
      <h3 className="text-3xl font-bold mb-6 text-center">
        Page not Found
      </h3>
      <p className="text-gray-300 text-center max-w-md">
        The page you are looking for does not exist. <br/>It might have been moved
        or deleted.
      </p>
      <p className="mt-9">
        <Link
          to="/"
          className= " text-sm bg-green-1 text-bk-black hover:bg-blackblack  hover:text-orange-1 py-2 px-4 transition duration-300 ease-in-out rounded-md font-bold"
        >
          Go to Homepage
        </Link>
      </p>
    </div>
    </div>
  );
};

export default NotFound;
