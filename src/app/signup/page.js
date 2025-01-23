import React from 'react';
import Image from 'next/image';

import touchId from  '@/assets/fingerprint.png';
import faceId from  '@/assets/faceId.png';

const Signup = () => {
    return (
        <div>

            <h1 className='text-center text-white text-3xl'>Get Registered</h1>
            <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

            <form className='mx-auto w-[60%]  my-4'>

                <div className='border border-white px-2 py-3'>

                    <h2 className='text-center text-white text-2xl '>Sign In</h2>
                    <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >Mobile No.</label>
                        <input className='outline-none border-2 border-[#dab95c] bg-[#df2926] px-4 py-2 rounded' type="number" />
                    </div>

                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >Password</label>
                        <input className='outline-none border-2 border-[#dab95c] bg-[#df2926] px-4 py-2 rounded' type="password" />
                    </div>

                </div>

                <button className='block mx-auto w-[20%] my-3 px-4 py-2 text-2xl font-semibold bg-[#dab95c] rounded'>Click</button>

            </form>

            {/* biometric sign in  */}
            <div className='border-2 border-white w-[60%] mx-auto my-8 p-8'>
                <h2 className='text-center text-white text-2xl '>Sign In through</h2>
                <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

                <div className='mt-12 flex justify-around items-start gap-3'>
                    <Image  height={250} src={touchId} alt='img' />
                    <Image height={250} src={faceId} alt='img' />
                </div>
            </div>
        </div>
    );
};

export default Signup;