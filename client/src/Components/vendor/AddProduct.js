import React, { useEffect, useState } from 'react'
import VendorNavbar from '../Navbar/VendorNavbar'
import Vendorheaders from './Vendorheaders'
import esewa from "../Assets/esewa.png"
import axios from '../api/api';
import "../Assets/css/Inputfield.css"

import { useFormik, Formik } from 'formik';
import ProductSchema from '../../schemas/ProductSchema'

export default function AddProduct() {
    const [btnhidden, setBtnhidden] = useState(false);
    const [error, seterror] = useState(null);
    const [Filess, setFile] = useState(null);

    
    

    const btnHandler = (e) => {
        e.preventDefault();
        setBtnhidden(true);
    };
   

    const initialValues = {
        product_name: "",
        title: "",
        regular_price: "",
        sales_price: "",
        stock: "",
        category: "",
        visibility: "",
        description: "",
        warrenty_year: "",
        warrenty_month: "",
        image: "",
        status:btnhidden,
        token:""
        
    };

 


    const { values, errors, handleBlur, touched, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: ProductSchema,
        onSubmit: async (values) => {
            if(btnhidden==false)
                {
                    values.warrenty_month="";
                    values.warrenty_year="";
                }
                values.token=localStorage.getItem('token');

            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                formData.append(key, value);
            });
            formData.append('image', Filess);
            formData.append('status',btnhidden);
            try {
                seterror(null);
                const response = await axios.post('productuploadsapi',formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'x-access-token':localStorage.getItem('token'),
                    },
                });
                console.log(response);
            } catch (error) {
                console.error('Error:', error);
                const receiveerror = error.response.data.message;

                seterror(receiveerror);

            }
        }
    });

    
 

    const cancelHandler = (e) => {
        e.preventDefault();
    
        setBtnhidden(false);
    };

    const filevalidate = (e) => {
        e.preventDefault();
        if (!e.target.files[0]) {

            return true;
        }
        setFile(e.target.files[0]);
    };





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
                                <form onSubmit={handleSubmit} enctype="multipart/form-data" >
                                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="productname">Product Name <span className='text-red-400 text-xl '>*</span></label>
                                            <input id="productname" value={values.product_name} onChange={handleChange} onBlur={handleBlur} name="product_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            {errors.product_name && touched.product_name ? (<p className="text-red-500">{errors.product_name}</p>) : null}
                                        </div>
                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="shorttitle">Short Title</label>
                                            <input id="shorttitle" value={values.title} onChange={handleChange} onBlur={handleBlur} type="text" name="title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            {errors.title && touched.title ? (<p className="text-red-500">{errors.title}</p>) : null}
                                        </div>

                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="regularprice">Regular Price  <span className='text-red-400 text-xl '>*</span></label>
                                            <input id="regularprice" value={values.regular_price} onChange={handleChange} onBlur={handleBlur} type="Number" name="regular_price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            {errors.regular_price && touched.regular_price ? (<p className="text-red-500">{errors.regular_price}</p>) : null}
                                        </div>

                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="salesprice">Sales Price  <span className='text-red-400 text-xl '>*</span></label>
                                            <input id="salesprice" value={values.sales_price} onChange={handleChange} onBlur={handleBlur} type="Number" name="sales_price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            {errors.sales_price && touched.sales_price ? (<p className="text-red-500">{errors.sales_price}</p>) : null}
                                        </div>






                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="stock">Stock  <span className='text-red-400 text-xl '>*</span></label>
                                            <input id="stock" value={values.stock} onChange={handleChange} onBlur={handleBlur} type="Number" name="stock" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            {errors.stock && touched.stock ? (<p className="text-red-500">{errors.stock}</p>) : null}
                                        </div>
                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="category">Select Category  <span className='text-red-400 text-xl '>*</span></label>
                                            <select name="category" value={values.category} onChange={handleChange} onBlur={handleBlur} id="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                                <option value="computer">Computer</option>
                                                <option value="mobile">Mobile</option>
                                                <option value="electronic">Electronic</option>
                                                <option value="household">Household</option>
                                            </select>
                                            {errors.category && touched.category ? (<p className="text-red-500">{errors.category}</p>) : null}
                                        </div>

                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Visibility  <span className='text-red-400 text-xl '>*</span></label>
                                            <select name="visibility" value={values.visibility} onChange={handleChange} onBlur={handleBlur} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                                <option>Public</option>
                                                <option>Private</option>

                                            </select>
                                            {errors.visibility && touched.visibility ? (<p className="text-red-500">{errors.visibility}</p>) : null}
                                        </div>


                                        <div>
                                            <label className="text-white dark:text-gray-200" htmlFor="description">Description <span className='text-red-400 text-xl '>*</span></label>
                                            <textarea id="description" name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                                            {errors.description && touched.description ? (<p className="text-red-500">{errors.description}</p>) : null}
                                        </div>

                                        <div>
                                           
                                               
                                        {btnhidden===false?( <button onClick={btnHandler}
                                                className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
                                                <span className="ml-2">Click for Warrenty</span>
                                            </button>):(
                                            
                                                <div className=' border-2 border-gray-300 border-dashed rounded-md p-4'>
                                                    <div>
                                                        <label className="text-white dark:text-gray-200" htmlFor="wyear">Warrenty Period</label>
                                                        <input id="wyear" type="Number" value={values.warrenty_year} onChange={handleChange} name="warrenty_year" onBlur={handleBlur} placeholder='ex.1 year' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                                        {errors.warrenty_year && touched.warrenty_year ? (<p className="text-red-500">{errors.warrenty_year}</p>) : null}
                                                    </div>

                                                    <div>
                                                        <label className="text-white dark:text-gray-200" htmlFor="wmonth">Select Month </label>
                                                        <select name="warrenty_month" value={values.warrenty_month} onChange={handleChange} onBlur={handleBlur} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
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
                                                        {errors.warrenty_month && touched.warrenty_month ? (<p className="text-red-500">{errors.warrenty_month}</p>) : null}


                                                       
                                                    </div>



                                                </div>
                                            )};

                                         
                                        </div>

                                        {/*<div>
                                             <label className="text-white dark:text-gray-200" htmlFor="esewaid">Esewa Id for Receive payment  <span className='text-red-400 text-xl '>*</span></label>
                                        <div className='flex  items-center'>
                                            <div className='w-1/12  mx-2'>
                                                <img src={esewa} alt="" />
                                            </div>
                                            <div>
                                            <input id="salesprice" type="Number" name="esewaid" placeholder='ex.9800000000' className=" appearance-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />

                                            </div>
                                        </div> 

                                        </div>*/}
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
                                                            <input value={values.image} onChange={(event) => {
                                                                filevalidate(event);
                                                                handleChange(event);
                                                            }} onBlur={handleBlur} id="file-upload" name="image" type="file" />
                                                        </label>
                                                        <p className="pl-1 text-white">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-white">
                                                        PNG, JPG, GIF up to 3MB
                                                    </p>
                                                    <p>
                                                        {errors.image && touched.image ? (<p className="text-red-500">{errors.image}</p>) : null}
                                                    </p>
                                                    <p>
                                                        {error != null ? (<p className="text-red-500">{error}</p>) : null}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <input className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600" name="submit" value="Publish" type="submit" />
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
