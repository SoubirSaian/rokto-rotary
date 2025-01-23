import React from 'react';

const Register = () => {
    return (
        <div className='my-36'>
            <form className='mx-auto w-[60%]  my-4'>

                <div className='border border-white px-4 py-6'>

                    <h2 className='text-center text-white text-3xl '>Get Registered </h2>
                    <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >Mobile No.</label>
                        <input className='outline-none border-2 border-[#dab95c] bg-[#df2926] px-4 py-2 rounded' type="number" />
                    </div>

                
                    <button className='block ml-[65%] w-[20%] my-3 px-4 py-2 text-2xl font-semibold bg-[#dab95c] rounded'>Click</button>

                </div>


            </form>
        </div>
    );
};

export default Register;