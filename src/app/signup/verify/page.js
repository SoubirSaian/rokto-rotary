"use client"
import React, { useState } from 'react';


const VerifyPage = () => {
    const [otp,setOtp] = useState(new Array(6).fill(''));

    const handleChange = (e,indx) => {
        // e.preventDefault(); 
        if(isNaN(e.target.value)) return false;

        setOtp([...otp.map((data,index) => (index === indx) ? e.target.value : data )]);

        if(e.target.value && e.target.nextSibling){
            e.target.nextSibling.focus();
        }
    }

    return (
        <div className='mb-18'>

            <h1 className='text-center text-[#dab95c] text-3xl'>Please insert the SIX digit Code <br /> sent to your mobile no. *******7890</h1>
            <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

            <form className='mx-auto w-[60%]  my-12'>

                <div className='border border-white px-2 py-3'>

                    <h2 className='text-center text-white text-2xl '>Verification & Password</h2>
                    <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

                    {/* otp enter section */}
                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >6 Digit <br /> Code</label>

                        <div>
                            {
                                otp.map((data,index) => {
                                    return <input key={index} type="text"className='outline-none border-b-2 border-[#dab95c] bg-[#df2926] w-[25px] m-3' value={data} maxLength={1} onChange={(e) => handleChange(e,index)} />
                                })
                            }
                            

                            <button className='block ml-[60%]  px-2 py-1 text-2xl border border-[#dab95c] hover:bg-[#dab95c] rounded' onClick={() => alert(otp.join(''))}>Resend</button>
                            {/* <button className='block mx-auto w-[20%] my-3 px-4 py-2 text-2xl font-semibold bg-[#dab95c] rounded'>Resend</button> */}
                        </div>

                    </div>
                    
                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >Password</label>
                        <input className='outline-none border-2 border-[#dab95c] bg-[#df2926] px-4 py-2 rounded' type="password" />
                    </div>


                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >Re-type <br /> Password</label>
                        <input className='outline-none border-2 border-[#dab95c] bg-[#df2926] px-4 py-2 rounded' type="password" />
                    </div>

                </div>

                <button className='block mx-auto w-[20%] my-3 px-4 py-2 text-2xl font-semibold bg-[#dab95c] rounded'>Click</button>

            </form>

            
        </div>
    );
};

export default VerifyPage;