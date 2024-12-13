import React from 'react';

const page = () => {
    return (
        <div className='my-4'>
            <h2 className='text-center text-[#dab95c] text-3xl '>You are successfully signed in</h2>
            <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

            <form className='mx-auto w-[60%]  my-4'>

                <div className='border border-white px-2 py-3'>

                    <h2 className='text-center text-white text-2xl '>Your current location</h2>
                    <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >City, Country</label>
                        <input className='outline-none border-2 border-[#dab95c] bg-[#df2926] px-4 py-2 rounded' type='text' />
                    </div>

                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >Language</label>
                        <input className='outline-none border-2 border-[#dab95c] bg-[#df2926] px-4 py-2 rounded' type="text" />
                    </div>

                </div>

                <button className='block ml-[70%] w-[20%] my-3 px-4 py-2 text-2xl font-semibold bg-[#dab95c] rounded'>Change</button>

            </form>

            <div className='w-[60%] mx-auto flex flex-col justify-center items-center'>
                <h2 className='  text-white text-2xl '> City Partners: Rday Club </h2>
                <hr className=' w-[40%]  h-1 bg-[#dab95c]' />

                <div className='grid grid-cols-2 gap-x-48 gap-y-6 my-9'>
                    <div>
                        <h3 className='text-2xl text-white font-semibold'>Dhaka Midtown</h3>
                        <p className='text-1xl text-white'>D3281, Bangladesh</p>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-semibold'>Dhaka Midtown</h3>
                        <p className='text-1xl text-white'>D3281, Bangladesh</p>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-semibold'>Dhaka Midtown</h3>
                        <p className='text-1xl text-white'>D3281, Bangladesh</p>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-semibold'>Dhaka Midtown</h3>
                        <p className='text-1xl text-white'>D3281, Bangladesh</p>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-semibold'>Dhaka Midtown</h3>
                        <p className='text-1xl text-white'>D3281, Bangladesh</p>
                    </div>
                    <div>
                        <h3 className='text-2xl text-white font-semibold'>Dhaka Midtown</h3>
                        <p className='text-1xl text-white'>D3281, Bangladesh</p>
                    </div>
                </div>

                <div className='flex flex-col items-center my-6'>

                    <h2 className='text-center text-white text-2xl '>City Stimulatos: Rotaract Club</h2>
                    <hr className=' w-[40%] h-1 bg-white' />

                    <div className='mt-7'>
                        <h3 className='text-2xl text-white font-semibold'>Dhaka Midtown</h3>
                        <p className='tect-center text-1xl text-white'>D3281, Bangladesh</p>
                    </div>

                    <div className='mt-3 mb-6'>
                        <h3 className='text-2xl text-white font-semibold'>Daffodil International University</h3>
                        <p className='text-center text-1xl text-white'>D3281, Bangladesh</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;