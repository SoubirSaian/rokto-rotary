import React from 'react';

const Forget = () => {
    return (
        <div className='my-36'>
            <form className='mx-auto w-[80%] md:w-[60%]  my-4'>

                <div className='border border-white px-4 py-6'>

                    <h2 className='text-center text-white text-2xl '>Retrieve Password</h2>
                    <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-2 my-4 items-center justify-items-center'>
                        <label className='text-xl md:text-3xl text-semibold' >Mobile No.</label>
                        <input className='outline-none border-2 border-[#dab95c] bg-[#df2926] px-4 py-2 rounded' type="number" />
                    </div>

                
                    <button className='block ml-[70%] w-[20%] my-3 pr-10 md:px-4 py-2 text-2xl font-semibold bg-[#dab95c] rounded'>Click</button>

                </div>


            </form>
        </div>
    );
};

export default Forget;