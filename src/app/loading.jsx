import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center ">
          <HashLoader color="#ad46ff" />
          {/* <span className="text-yellow-500 font-extrabold 
          text-7xl">Global Loading...</span> */}
        </div>
        </div>
    );
};

export default loading;