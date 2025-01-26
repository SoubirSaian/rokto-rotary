import React from 'react';

const Register = () => {
    return (
        <div className='my-20 md:my-36'>
            <form className='mx-auto w-[80%] md:w-[60%]  my-4'>

                <div className='border border-white px-6 md:px-4 py-8 md:py-6'>

                    <h2 className='text-center text-xl text-white md:text-3xl '>Get Registered </h2>
                    <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

                    <div className='flex-col md:flex gap-8 md:gap-4 justify-around items-center m-4'>
                        <label className='text-xl md:text-3xl text-semibold' >Mobile No.</label>
                        <input className='outline-none border-2 border-[#dab95c] bg-[#df2926] px-2 md:px-4 py-2 rounded' type="number" />
                    </div>

                
                    <button className='block ml-[40%] md:ml-[65%] w-[12%] md:w-[20%] my-3  px-16 md:px-4 py-2 text-2xl font-semibold bg-[#dab95c] rounded'>Click</button>

                </div>


            </form>
        </div>
    );
};

export default Register;