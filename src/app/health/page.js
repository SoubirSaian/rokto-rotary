import React from 'react';

const Health = () => {
    return (
        <div className='w-[80%] mx-auto my-4'>
            <div>
                 <h2 className='text-center text-3xl text-white'>Eligiblity Authentication: Health</h2>
                <hr className='w-[60%] mx-auto h-1 bg-[#dab95c]' />
            </div>

            <div className='my-6'>
                <h2 className='text-center text-2xl font-semibold text-black'>At any age, Do you have any history of</h2>
                <hr className='w-[60%] mx-auto h-1 bg-[#dab95c]' />

                <div className='flex justify-around items-center px-[20%] my-4'>
                    <div>
                        <h2 className='text-2xl '>HEPATITIS B</h2>
                        <hr  className='w-full h-1 bg-[#dab95c]' />
                    </div>

                    <fieldset className='flex justify-around gap-12 mt-6'>
                    {/* <legend className="sr-only">Countries</legend> */}

                     

                        <div className="flex items-center mb-4">
                            <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium ">
                            YES
                            </label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium  ">
                            NO
                            </label>
                        </div>
                        
                    </fieldset>

                </div>

                <div className='flex justify-around items-center px-[20%] my-4'>
                    <div>
                        <h2 className='text-2xl '>HEPATITIS C</h2>
                        <hr  className='w-full h-1 bg-[#dab95c]' />
                    </div>

                    <fieldset className='flex justify-around gap-12 mt-6'>
                    {/* <legend className="sr-only">Countries</legend> */}

                     

                        <div className="flex items-center mb-4">
                            <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium ">
                            YES
                            </label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium  ">
                            NO
                            </label>
                        </div>
                        
                    </fieldset>

                </div>

            </div>

            <div>
                <h2 className='text-center text-3xl'>Do you have had any risk factors/ Behaviours associated with</h2>
                <hr className='w-[90%] mx-auto h-1 bg-[#dab95c]' />

                <div className='flex justify-around items-center px-[20%] my-4'>
                    <div>
                        <h2 className='text-2xl '>HIV/AIDS</h2>
                        <hr  className='w-full h-1 bg-[#dab95c]' />
                    </div>

                    <fieldset className='flex justify-around gap-12 mt-6'>
                    {/* <legend className="sr-only">Countries</legend> */}

                     

                        <div className="flex items-center mb-4">
                            <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium ">
                            YES
                            </label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium  ">
                            NO
                            </label>
                        </div>
                        
                    </fieldset>

                </div>
            </div>

            <div>
                <h2 className='text-center text-3xl' >Have you ever taken any medication to treat</h2>
                <hr className='w-[90%] mx-auto h-1 bg-[#dab95c]' />

                <div className='flex justify-around items-center px-[20%] my-4'>
                    <div>
                        <h2 className='text-2xl '>HIV Infections</h2>
                        <hr  className='w-full h-1 bg-[#dab95c]' />
                    </div>

                    <fieldset className='flex justify-around gap-12 mt-6'>
                    {/* <legend className="sr-only">Countries</legend> */}

                     

                        <div className="flex items-center mb-4">
                            <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium ">
                            YES
                            </label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium  ">
                            NO
                            </label>
                        </div>
                        
                    </fieldset>

                </div>
            </div>

            <div>
                <h2 className='text-center text-3xl '>are you taking any medication to prevent</h2>
                <hr className='w-[90%] mx-auto h-1 bg-[#dab95c]' />

                <div className='flex justify-around items-center px-[20%] my-4'>
                    <div>
                        <h2 className='text-2xl '>HIV Infection</h2>
                        <hr  className='w-full h-1 bg-[#dab95c]' />
                    </div>

                    <fieldset className='flex justify-around gap-12 mt-6'>
                    {/* <legend className="sr-only">Countries</legend> */}

                     

                        <div className="flex items-center mb-4">
                            <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium ">
                            YES
                            </label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium  ">
                            NO
                            </label>
                        </div>
                        
                    </fieldset>

                </div>
            </div>

            <button className='block ml-[70%]  px-8 py-2 text-2xl bg-[#dab95c] my-12'>Next</button>
        </div>
    );
};

export default Health;