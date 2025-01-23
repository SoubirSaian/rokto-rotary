import React from 'react';

const Eligiblity = () => {
    return (
        <div className='w-[80%] mx-auto my-6'>

            <div className='my-6'>
                <h2 className='text-center text-3xl text-white'>
                    Eligiblity Authentication
                </h2>
                 <hr className=' h-1 bg-[#dab95c] mt-2 w-[50%] mx-auto' />   
            </div>

            <div className='my-8'>
                <h2 className='text-center text-3xl text-black mb-1'>
                   Birthday
                </h2>
                <hr className=' h-1 bg-[#dab95c] mb-6 w-[30%] mx-auto' /> 

                <input type="date" name="date" id="date" className='w-[50%] ml-[40%] px-32 py-2 text-2xl text-white outline-none border-b-2 border-[#dab95c] bg-[#df2926]' />
            </div>

            <div className='my-16'>
                <h2 className='text-center text-3xl text-black mb-1'>
                  Age
                </h2>
                <hr className=' h-1 bg-[#dab95c] mb-6 w-[30%] mx-auto' /> 

                <input type="text"  className='w-[50%] ml-[40%] px-32 py-2 text-2xl text-white outline-none border-b-2 border-[#dab95c] bg-[#df2926]' />
            </div>

            <div className='my-16'>
                <h2 className='text-center text-3xl text-black mb-1'>
                   Height
                </h2>
                <hr className=' h-1 bg-[#dab95c] mb-6 w-[30%] mx-auto' /> 

                <input type="number"  className='w-[50%] ml-[40%] px-32 py-2 text-2xl text-white outline-none border-b-2 border-[#dab95c] bg-[#df2926]' placeholder='minimum height 160cm' />
            </div>

            <div className='my-16'>
                <h2 className='text-center text-3xl text-black mb-1'>
                   Weight
                </h2>
                <hr className=' h-1 bg-[#dab95c] mb-6 w-[30%] mx-auto' /> 

                {/* <p>Kg</p> */}
                <input type="number" className='w-[50%] ml-[40%] px-32 py-2 text-2xl text-white outline-none border-b-2 border-[#dab95c] bg-[#df2926]' placeholder='minimum weight 68 Kg' />
            </div>

            <button className='block ml-[70%]  px-4 py-2 text-2xl bg-[#dab95c] my-12'>Next</button>
        </div>
    );
};

export default Eligiblity;