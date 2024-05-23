import React, { useEffect, useState } from 'react'
import VendorNavbar from '../Navbar/VendorNavbar'
import Vendorheaders from './Vendorheaders'
import esewa from "../Assets/esewa.png"
import "../Assets/css/Inputfield.css"

export default function AddProduct() {
    const [btnhidden,setBtnhidden]=useState(false);
    const [wyear,setYear]=useState('');
    const [wmonth,setMonth]=useState('');

    const btnHandler=(e)=>{
        e.preventDefault();
        setBtnhidden(true)
    }

    const warrentyValue=(e)=>{
        const yearvalue=e.target.value;
        console.log(yearvalue);
        setYear(yearvalue);

    }

    const cancelHandler=(e)=>{
        e.preventDefault();
        setYear('');
        setBtnhidden(false);

    }

    return (
        <div>
            <div className="flex overflow-hidden ">
                <div >
                    <VendorNavbar />


                </div>

                <div>
                    <Vendorheaders />
                    <div>
                        <div className='md:col-span-2 w-screen ml-12  px-4'>

                            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add Product</h1>
                                <form encype="multipart/form-data" >
                                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="productname">Product Name <span className='text-red-400 text-xl '>*</span></label>
                                            <input id="productname" name="productname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                        </div>
                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="shorttitle">Short Title</label>
                                            <input id="shorttitle" type="text" name="shorttitle" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                        </div>

                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="regularprice">Regular Price  <span className='text-red-400 text-xl '>*</span></label>
                                            <input id="regularprice" type="Number" name="regularprice" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                        </div>

                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="salesprice">Sales Price  <span className='text-red-400 text-xl '>*</span></label>
                                            <input id="salesprice" type="Number" name="salesprice" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                        </div>






                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="stock">Stock  <span className='text-red-400 text-xl '>*</span></label>
                                            <input id="stock" type="Number" name="stock" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                        </div>
                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Select Category  <span className='text-red-400 text-xl '>*</span></label>
                                            <select name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                                <option>Computer</option>
                                                <option>Mobile</option>
                                                <option>Electronic</option>
                                                <option>Household</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Visibility  <span className='text-red-400 text-xl '>*</span></label>
                                            <select name="visibility" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                                <option>Public</option>
                                                <option>Private</option>

                                            </select>
                                        </div>


                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Description <span className='text-red-400 text-xl '>*</span></label>
                                            <textarea id="textarea" name="description" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                                        </div>

                                        <div>
                                           {btnhidden===false?( <button onClick={btnHandler}
                                                className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
                                                <span className="ml-2">Click for Warrenty</span>
                                            </button>):(
                                                <div className=' border-2 border-gray-300 border-dashed rounded-md p-4'>
                                                <div>
                                                    <label className="text-white dark:text-gray-200" htmlFor="wyear">Warrenty Period</label>
                                                    <input id="wyear" type="Number" value={wyear} onChange={warrentyValue} name="warrentyyear" placeholder='ex.1 year' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                                </div>

                                                <div>
                                                    <label className="text-white dark:text-gray-200" htmlFor="wmonth">Select Month </label>
                                                    <select name="wmonth" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                                        <option>Select Month</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                        <option>11</option>
                                                        <option>12</option>
                                                        <option>None</option>
                                                    </select>

                                                    <button onClick={cancelHandler} className='bg-gray-300 font-bold text-black px-2 rounded-md hover:bg-purple-700 hover:text-gray-300 my-3 '>Cancel</button>
                                                </div>



                                            </div>

                                            )}
                                            
                                        </div>

                                        <div>
                                        <label className="text-white dark:text-gray-200" htmlFor="esewaid">Esewa Id for Receive payment  <span className='text-red-400 text-xl '>*</span></label>
                                        <div className='flex  items-center'>
                                            <div className='w-1/12  mx-2'>
                                                <img src={esewa} alt="" />
                                            </div>
                                            <div>
                                            <input id="salesprice" type="Number" name="esewaid" placeholder='ex.9800000000' className=" appearance-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />

                                            </div>
                                        </div>

                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white">
                                                Image  <span className='text-red-400 text-xl '>*</span>
                                            </label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                            <span className="">Upload a file</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                        <p className="pl-1 text-white">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-white">
                                                        PNG, JPG, GIF up to 10MB
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Publish</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
