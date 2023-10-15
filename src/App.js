import React from 'react';
import Me from './me.jpg'

function App(props) {
    return (
        <div className='bg-gray-100'>
            <div className='lg:flex lg:justify-center pt-10 pl-10'>
                <div className='w-1/2'>
                    <span className='bg-gray-300 border-blue-600 text-blue-600 rounded-full px-4 py-1 text-sm font-semibold mr-2'>
                        ReactJs
                    </span>
                    <span className='bg-gray-300 border-blue-600 text-blue-600 rounded-full px-4 py-1 text-sm font-semibold'>
                        Tailwindcss
                    </span>
                </div>
            </div>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <div className='flex justify-center mb-4'>
                        <img className='rounded-full w-44 h-44' src={Me} alt="Zulzario Zaeri" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-2xl font-bold mr-1'>
                            Zulzario Zaeri
                        </h1>
                        <svg className="w-4 h-4 -rotate-12 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"/>
                            <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"/>
                        </svg>
                    </div>
                    <div className='text-sm text-center mb-4 font-semibold text-slate-800'>
                        Web Developer | Blogger
                    </div>
                    <div className='text-slate-600 px-8 mb-10 flex justify-center'>
                        <div className='lg:w-1/2'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, soluta perferendis. Quidem porro tempora illo aspernatur eum perferendis quam molestias!
                        </div>
                    </div>
                    <div className='mb-4 flex justify-center'>
                        <a className='bg-gradient-to-r from-blue-600 from-10% to-pink-600 to-90% flex justify-center items-center text-white px-8 py-2.5 text-sm rounded-full' href="https://www.instagram.com/ryotwell" target="_blank" rel="noopener noreferrer">
                            Instagram
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center pb-10 text-xs text-slate-400'>
                Build with <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mx-1 text-red-600">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg> By <a href="ryodev.my.id/" target="_blank" rel="noopener noreferrer"><span className='font-semibold ml-1 text-blue-600'>Ryo Otwell</span></a>
            </div>
        </div>
    );
}

export default App;