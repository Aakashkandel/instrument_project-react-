import React from 'react';
import { useState } from 'react';
import { useFormik } from "formik";
import axios from "../../api/api";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {userLogin,userLogout} from "../../state/action/SessionData"
import { Link, useNavigate} from 'react-router-dom';






const initialValues = {
    email: "",
    password: ""
}

export default function Login() {
    const dispatchh=useDispatch();
    const navigate=useNavigate();
   
    const dataredux=useSelector(state=>state.authenticate)

    if(dataredux.isLoggedin==true)
    {
       navigate('/indexloggedin');
    }

   


    const [formmessage,setformmessage]=useState('');



    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            try {
                const response = await axios.post('/loginapi', values);
                console.log(response.data); 


                localStorage.setItem("islog",true);

                dispatchh(userLogin(response.data.sessiondata.email,response.data.sessiondata._id,response.data.sessiondata.name));
                setformmessage(response.data.message);

              
                console.log(dataredux,"this is form");
               
                
            
                
                  
                       
            } catch (error) {
                if(error.response)
                {
                    console.log(error.response.data.message);
                    setformmessage(error.response.data.message);

                 

                }
                
                
            }
        }
    });

    const formSubmitHandle = (event) => {
        event.preventDefault();
        handleSubmit(event);
    }

    return (
        <div>
            <section className="bg-gray-50 bg-slate-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <h2 className="text-2xl font-bold text-gray-500">Instrument Marketplace</h2>
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={formSubmitHandle}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" value={values.email} onChange={handleChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                                    
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" value={values.password} onChange={handleChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <p className="text-red-600 ">{formmessage}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <Link to="/forgotpassword" className="text-sm font-medium text-gray-300 hover:underline hover:dark:text-blue-500">Forgot password?</Link>
                                </div>
                                <button type="submit" name="submit" className="w-full text-white bg-blue-600 hover:bg-blue-500 rounded p-1 ">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to="/register" className="text-sm font-medium text-gray-300 hover:underline hover:dark:text-blue-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
