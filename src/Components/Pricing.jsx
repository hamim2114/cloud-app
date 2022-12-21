import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const Pricing = () => {
    return (
        <section data-aos='fade-left' id='pricing' className='w-full'>
            <div data-aos='fade-up' className='h-[800px] w-full mix-blend-overlay absolute bg-slate-900'></div>

            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-white text-center py-8 text-slate-300'>
                    <h2 className='sm:text-3xl text-2xl uppercase font-bold'>Pricing</h2>
                    <h1 data-aos='zoom-out' className='sm:text-5xl text-4xl py-9 font-bold text-white'>The right price for your research.</h1>
                    <p data-aos='fade-up' className='sm:text-2xl text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit officiis odio minima fugiat reprehenderitipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div data-aos='fade-left' className='grid sm:grid-cols-2'>
                    <div className='bg-white text-slate-900 sm:m-9 m-4 p-8 rounded-xl shadow-2xl'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>basic</span>
                        <p className='sm:text-5xl text-3xl font-bold py-5'>$49 <span className='sm:text-xl text-sm'>/mo</span></p>
                        <p className='text-xl sm:mb-4 text-slate-500'>Lorem ipsum dolor sit amet consectetur</p>
                        <div data-aos='fade-left' className='text-xl'>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-green-600 '/>Lorem, ipsum dolor. </p>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-green-600 '/>Lorem, ipsum dolor. </p>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-green-600 '/>Lorem, ipsum dolor. </p>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-gray-200 '/>Lorem, ipsum dolor. </p>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-gray-200 '/>Lorem, ipsum dolor. </p>
                            <button className='w-full py-3 my-4'>Get Started</button>
                        </div>
                    </div>
                    <div data-aos='fade-left' className='bg-white text-slate-900 sm:m-9 m-4 p-8 rounded-xl shadow-2xl'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                        <p className='sm:text-5xl text-3xl font-bold py-5'>$89 <span className='sm:text-xl text-sm'>/mo</span></p>
                        <p className='text-xl sm:mb-4 text-slate-500'>Lorem ipsum dolor sit amet consectetur</p>
                        <div data-aos='fade-left' className='text-xl'>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-green-600 '/>Lorem, ipsum dolor. </p>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-green-600 '/>Lorem, ipsum dolor. </p>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-green-600 '/>Lorem, ipsum dolor. </p>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-green-600 '/>Lorem, ipsum dolor. </p>
                            <p className='flex sm:py-2 py-1'> <CheckIcon className='w-8 mr-5 text-green-600 '/>Lorem, ipsum dolor. </p>
                            <button className='w-full py-3 my-4'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;