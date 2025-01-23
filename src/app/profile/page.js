"use client"

import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className='w-[60%] mx-auto flex flex-col items-center my-12'>
                    <div>
                        <h2 className='text-2xl text-white'>Blood Group</h2>
                        <hr className='w-[100%] h-1 bg-[#dab95c]' />
                    </div>

                <fieldset className='flex justify-around gap-12 mt-6'>
                    {/* <legend className="sr-only">Countries</legend> */}

                    <div className="flex items-center mb-4">
                        <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />

                        <label htmlFor="country-option-1" className="block ms-2  text-3xl font-medium text-black dark:text-gray-300">
                        O
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium text-black dark:text-gray-300">
                       A
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium text-black dark:text-gray-300">
                        B
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium text-black dark:text-gray-300">
                        AB
                        </label>
                    </div>

                     

                     
                </fieldset>

            </div>

            {/* rh factor radio */}
            <div className='w-[80%] mx-auto flex flex-col items-center my-12'>
                    <div>
                        <h2 className='text-2xl text-white'>RH Factor</h2>
                        <hr className='w-full h-1 bg-[#dab95c]' />
                    </div>

                <fieldset className='flex justify-around gap-12 mt-6'>
                    {/* <legend className="sr-only">Countries</legend> */}

                    <div className="flex items-center mb-4">
                        <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />

                        <label htmlFor="country-option-1" className="block ms-2  text-3xl font-medium  ">
                         Positive
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium ">
                          Negative
                        </label>
                    </div>
                    
                </fieldset>

            </div>

            {/* Account type */}
            <div className='w-[60%] mx-auto flex flex-col items-center my-12'>
                    <div>
                        <h2 className='text-2xl text-white'>Account Type</h2>
                        <hr className='w-[100%] h-1 bg-[#dab95c]' />
                    </div>

                <fieldset className='flex justify-around gap-12 mt-6'>
                    {/* <legend className="sr-only">Countries</legend> */}

                     

                    <div className="flex items-center mb-4">
                        <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-2" className="block ms-2 text-3xl font-medium ">
                          DONOR
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium  ">
                         FINDER
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="country-option-3" type="radio" name="countries" value="Spain" className="w-4 h-4 border-[#dab95c] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="country-option-3" className="block ms-2 text-3xl font-medium">
                         UNIFIED
                        </label>
                    </div>
                     
              </fieldset>

            </div>

            {/* TOGGLE BUTTON SECTION */}
            <div className='w-[80%] mx-auto border border-white px-2 py-4'>
                <h2 className='text-center text-3xl font-semibold'>I agree to donate</h2>
                <hr className='w-[60%] mx-auto bg=[#dab95c]' />

                <div className='flex justify-around gap-3 mt-6'>
                    
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div className="relative w-11 h-6 bg-gray-200   peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                        </div>

                        <span className=" text-2xl font-medium text-gray-900  ">Whole Blood</span>
                    </label>
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div className="relative w-11 h-6 bg-gray-200   peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                        </div>

                        <span className=" text-2xl font-medium text-gray-900  ">Plasma</span>
                    </label>
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div className="relative w-11 h-6 bg-gray-200   peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                        </div>

                        <span className=" text-2xl font-medium text-gray-900  ">Platelets</span>
                    </label>
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div className="relative w-11 h-6 bg-gray-200   peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                        </div>

                        <span className=" text-2xl font-medium text-gray-900  ">RBCs</span>
                    </label>

 

 

                </div>
            </div>

            <button className='block ml-[70%]  px-4 py-2 text-2xl bg-[#dab95c] my-12'>Next</button>
        </div>
    );
};

export default Profile;