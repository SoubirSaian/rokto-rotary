import React from 'react';

const Photo = () => {
    return (
        <div className='my-6'>
            <div className='w-[15%] mx-auto h-50 p-10 rounded-full border border-[#dab95c] bg-[#dab95c] cursor-pointer'>
                <label htmlFor="photo" className='text-3xl cursor-pointer' >
                    Photo <br />  Upload
                    <input id='photo' type="file" name='photo' className='hidden' />
                </label>
            </div>

            <h2 className='text-center text-3xl font-medium mt-6'>ENTER FULL NAME</h2>
            <p className='text-center text-sm text-white mb-6'>In according to the national identification</p>

            <div className='flex flex-col items-center my-6'>
                <input type="text" name="firstName" className='outline-none w-[40%] p-2 m-4 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='First Name'/>

                <input type="text" name="MiddleName" className='outline-none w-[40%] p-2 m-4 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='Middle Name'/>
                
                <input type="text" name="LastName" className='outline-none w-[40%] p-2 m-4 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='Last Name'/>
            </div>

            <div className='w-[80%] mx-auto border border-white px-12 py-3 my-6'>
                <fieldset className='flex justify-around gap-6 mt-6'>
                        {/* <legend className="sr-only">Countries</legend> */}

                        
                        <div className="flex items-center mb-4">
                            <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium ">
                            Smoker
                            </label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium  ">
                            Non-Smoker
                            </label>
                        </div>
                        
                </fieldset>
            </div>

            <div className='w-[80%] mx-auto flex flex-col items-center my-6'>
                <h2 className='text-3xl font-medium'>NATIONAL IDENTIFICATION NO</h2>
                <input type="number" name="nid" className='outline-none w-[60%] p-2 m-4 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='enter your nid here'/>

                <div className='flex justify-around items-center gap-8'>
                    <div className='w-180 h-130 p-5 rounded-[20px] border border-[#dab95c] bg-[#dab95c] cursor-pointer'>
                        <label htmlFor="photo" className='text-3xl cursor-pointer' >
                            Front Side <br />  Upload
                            <input id='photo' type="file" name='photo' className='hidden' />
                        </label>
                    </div>

                    <div className='w-180 h-130 p-5 rounded-[20px] border border-[#dab95c] bg-[#dab95c] cursor-pointer'>
                        <label htmlFor="photo" className='text-3xl cursor-pointer' >
                            Back Side <br />  Upload
                            <input id='photo' type="file" name='photo' className='hidden' />
                        </label>
                    </div>
                    
                </div>
            </div>

            <button className='block ml-[70%]  px-4 py-2 text-2xl bg-[#dab95c] my-12'>Next</button>
        </div>
    );
};

export default Photo;