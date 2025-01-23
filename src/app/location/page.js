"use client"

import React, { useState } from 'react';
import { Country, State, City }  from 'country-state-city';



const Location = () => {
    
    // console.log(Country.getAllCountries()[0]);
    // console.log(Country.getAllCountries())
    // console.log(State.getAllStates())

    const [selectedCountry, setSelectedCountry] = useState('');

    const [states, setStates] = useState([]);

    const [cities, setCities] = useState([]);

    const allCountries = Country.getAllCountries(); // it's an Array


    const handleCountryChange = (e) => {
        const countryCode = e.target.value 
        setSelectedCountry(countryCode)
        setCities([])

        const fetchedStates = State.getStatesOfCountry(countryCode)
        setStates(fetchedStates)
    }


    const handleStateChange = (e) => {
        const stateCode = e.target.value

        const fetchedCities = City.getCitiesOfState(selectedCountry, stateCode)
        setCities(fetchedCities)
    }
    

    return (
        <div className='my-4'>
            
            <h2 className='text-center text-[#dab95c] text-3xl '>You are successfully signed in</h2>
            <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

            <form className='mx-auto w-[60%]  my-4'>

                <div className='border border-white px-2 py-3'>

                    <h2 className='text-center text-white text-2xl '>Your current location</h2>
                    <hr className='mx-auto w-[40%] h-1 bg-[#dab95c]' />

                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >Country</label>
                        <select className='w-[40%] outline-none border-2 border-[#dab95c] bg-[#df2926] px-12 py-3 rounded' value={selectedCountry} onChange={handleCountryChange}> 
                            <option value="">Select Country</option>
                            { 
                            allCountries.map((country) => (
                                <option 
                                    key={country.isoCode} 
                                    value={country.isoCode}
                                    className='text-black'
                                >

                                    {country.name}

                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >State</label>
                        <select className='w-[40%] outline-none border-2 border-[#dab95c] bg-[#df2926] px-12 py-3 rounded' onChange={handleStateChange} disabled={!states.length}> 
                            <option value="">Select State</option>
                            {
                                states.map((state) => (
                                    <option 
                                        key={state.isoCode}
                                        value={state.isoCode}
                                        className='text-black'
                                    >
                                        {state.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='flex justify-around items-center my-4'>
                        <label className='text-3xl text-semibold' >City</label>
                        <select className='w-[40%] outline-none border-2 border-[#dab95c] bg-[#df2926] px-12 py-3 rounded' disabled={!cities.length}> 
                            <option value="">Select City</option>
                            {
                                cities.map((city) => (
                                    <option
                                        key={city.name}
                                        value={city.name}
                                        className='text-black'
                                    >
                                        {city.name}
                                    </option>
                            ))}
                        </select>
                    </div>
                     

                    <div className='flex justify-around items-center my-4'>
                        <label htmlFor='language' className='text-3xl text-semibold' >Language</label>
                        
                        <select  className='w-[40%] outline-none border-2 border-[#dab95c] bg-[#df2926] px-12 py-3 rounded' id="language">
                            <option>Select language</option>
                            <option value="bangla">Bangla</option>
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                        </select>
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

export default Location;