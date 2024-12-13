import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-center text-2xl text-white'>Optional Record</h2>
            <hr className='w-[60%] mx-auto h-1 bg-[#dab95c] mb-6' />

            <div>
                <h2 className='text-center text-2xl font-medium'>Gender</h2>
                <hr className='w-[40%] mx-auto h-1 bg-[#dab95c]' />

                <fieldset className='flex justify-center gap-12 my-6'>
                    {/* <legend className="sr-only">Countries</legend> */}

                     

                    <div className="flex items-center mb-4">
                        <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium ">
                          Female
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium  ">
                        Male
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium">
                         Rather Not Say
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium">
                         Custom
                        </label>
                    </div>
                     
                </fieldset>

            </div>

            <div className='my-6'>
                <h2 className='text-center text-2xl font-medium'>Occuption</h2>
                <hr className='w-[40%] mx-auto h-1 bg-[#dab95c] my-3' />

                <input type="text" name="nid" className='block outline-none w-[50%] mx-auto p-2 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='occupation drop down menu'/>
            </div>

            <div className='my-6'>
                <h2 className='text-center text-2xl font-medium'>Organization</h2>
                <hr className='w-[40%] mx-auto h-1 bg-[#dab95c] my-3' />

                <input type="text" name="nid" className='block outline-none w-[50%] mx-auto p-2 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='enter organization name'/>
            </div>

            <h2 className='text-center text-2xl font-medium mt-6'>Social Messengers</h2>
            <hr className='w-[40%] mx-auto h-1 bg-[#dab95c] my-3' />
            <div className='flex flex-col items-center my-3'>
                <input type="text" name="firstName" className='outline-none w-[40%] p-2 m-2 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='Whats app'/>
                <input type="text" name="MiddleName" className='outline-none w-[40%] p-2 m-2 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='Facebook'/>
                <input type="text" name="LastName" className='outline-none w-[40%] p-2 m-2 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='Discord'/>
                <input type="text" name="LastName" className='outline-none w-[40%] p-2 m-2 border-2 border-[#dab95c] bg-[#df2926] rounded' placeholder='Telegram'/>
            </div>

            <div className='flex justify-around gap-12 my-6'>
                <button className='block  px-4 py-2 text-2xl bg-[#dab95c]'>Skip</button>
                <button className='block  px-4 py-2 text-2xl bg-[#dab95c]'>Next</button>
            </div>
        </div>
    );
};

export default page;