import React, { useState, useEffect } from "react";
import UserNavbar from "../Navbar/UserNavbar";
import '../Assets/css/Index.css';
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const IndexLoggedin = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);
    const navigate=useNavigate();
    

    const reduxdata=useSelector(state=>state.authenticate);
   const flag=reduxdata.isLoggedin;
   console.log(flag);

   if (flag==false)
   {
        navigate('/login');
   }

    

    useEffect(() => {
        setSlides(document.querySelectorAll('.slide'));
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000);



        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.opacity = 1;
            } else {
                slide.style.opacity = 0;
            }

        return () => clearInterval(slideInterval);

        });
    }, [currentSlide,slides]);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

  

    return (
        <div className="flex w-auto">
            <ToastContainer/>
            <div>
                <UserNavbar />

            </div>

            <div class="w-screen ml-12">

                <div class="bg-blue-50 h-screen">
                    <div class="flex justify-between text-center mx-20 items-center">
                        <div class="text-green-600 text-2xl my-2 font-bold">Logo</div>
                        <div class="text-2xl font-bold">
                            <h2>Nepal Instrument</h2>
                        </div>
                        <div class="flex space-x-6">
                            <a href class="text-black text-2xl btn-hover"><ion-icon
                                name="notifications-outline"></ion-icon></a>

                            <a href
                                class="text-white text-center text-xl bg-red-600 btn-hover px-2 rounded-lg">Hotline<ion-icon
                                    name="call-outline"></ion-icon></a>

                        </div>
                        <div class="flex space-x-5 ">
                            <h2 className="text-xl font-bold text-purple-600 ">Welcome!<span className="text-blue-700 font-semibold  "> {reduxdata.userInfo.name}</span></h2>

                        </div>
                    </div>

                    <div>
                        <h2 class="text-3xl font-bold text-center mt-5 text-gray-600">Welcome to our music world!</h2>
                    </div>

                    <div class="flex   h-3/6 justify-center  ">

                        <div class="slide-container  w-4/12 h-76 my-10  ">
                            <div class="flex   slider ">
                                <div class="slide slide1 ">

                                    <img class="" src={image1} />

                                </div>
                                <div class="slide slide2"><img class=" " src={image2} /></div>
                                <div class="slide slide3"><img class="" src={image3} /></div>
                            </div>
                        </div>

                        <div class="textbox  w-7/12 my-10">
                            <div>
                                <p class="px-20 py-10 text-xl ">
                                    "Welcome to our instrument sanctuary, where passion and precision harmonize. Explore our
                                    curated collection, each instrument a testament to craftsmanship and musical expression.
                                    From classic melodies to modern tunes, discover the soulful resonance waiting to be
                                    unlocked in every finely crafted piece."</p>
                            </div>
                            <div class="mx-20">
                                <a class="bg-green-700 px-2 py-1 rounded front-semibold text-white" href="">Shop Now</a>
                            </div>
                        </div>

                    </div>




                    <div class="container mx-auto px-4 py-8">

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">


                            <div class="border rounded-lg p-6  shadow-md bg-green-200 ">
                                <h3 class="text-lg font-semibold text-gray-800 flex items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2v-2a2 2 0 0 0-2-2H6zm1 2h8v8H7V4zm8 10v2H5v-2h10zM8 8H6v6h2V8zm4 0h-2v6h2V8z" clip-rule="evenodd" />
                                    </svg>
                                    Free Delivery
                                </h3>
                                <p class="text-gray-600 mt-2">Get free delivery on all orders above $50. We ensure timely and secure delivery of your instruments.</p>
                            </div>


                            <div class="border rounded-lg p-6 bg-white shadow-md bg-yellow-200">
                                <h3 class="text-lg font-semibold text-gray-800">Genuine Products</h3>
                                <p class="text-gray-600 mt-2">We guarantee authentic and high-quality instruments sourced directly from trusted manufacturers.</p>
                            </div>


                            <div class="border rounded-lg p-6 shadow-md bg-purple-200">
                                <h3 class="text-lg font-semibold text-gray-800">Huge Saving</h3>
                                <p class="text-gray-600 mt-2">Enjoy exclusive discounts and offers on a wide range of instruments. Save big on your purchases!</p>
                            </div>


                            <div class="border rounded-lg p-6 shadow-md bg-blue-200">
                                <h3 class="text-lg font-semibold text-gray-800">Easy Return</h3>
                                <p class="text-gray-600 mt-2">Not satisfied with your purchase? No worries! We offer hassle-free returns and refunds within 30 days.</p>
                            </div>

                        </div>

                    </div>



                </div>




                <div class="container mx-auto px-4 py-8">

                    <div class="feature_product grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


                        <div class="border rounded-lg p-6 bg-white shadow-md">
                            <img src="image/image1.png" alt="Guitar" class="w-full h-48 object-cover mb-4" />
                            <h3 class="text-lg font-semibold text-gray-800">Guitar</h3>
                            <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="flex items-center mt-4">
                                <span class="text-gray-700 font-semibold">$200</span>
                                <button class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>


                        <div class="border rounded-lg p-6 bg-white shadow-md">
                            <img src="image/image2.png" alt="Flute" class="w-full h-48 object-cover mb-4" />
                            <h3 class="text-lg font-semibold text-gray-800">Flute</h3>
                            <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="flex items-center mt-4">
                                <span class="text-gray-700 font-semibold">$150</span>
                                <button class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>


                        <div class="border rounded-lg p-6 bg-white shadow-md">
                            <img src="image/image3.png" alt="Piano" class="w-full h-48 object-cover mb-4" />
                            <h3 class="text-lg font-semibold text-gray-800">Piano</h3>
                            <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="flex items-center mt-4">
                                <span class="text-gray-700 font-semibold">$500</span>
                                <button class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>


                        <div class="border rounded-lg p-6 bg-white shadow-md">
                            <img src="image/image4.png" alt="Drum" class="w-full h-48 object-cover mb-4" />
                            <h3 class="text-lg font-semibold text-gray-800">Drum</h3>
                            <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="flex items-center mt-4">
                                <span class="text-gray-700 font-semibold">$300</span>
                                <button class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                    </div>

                </div>




                <footer class="py-12 bg-gray-900 text-white">
                    <div class="container mx-auto">

                        <div class="flex justify-around  items-center mb-8">
                            <div class="flex items-center">
                                <img src="company_logo.png" alt="Company Logo" class="h-12 mr-4" />
                                <p class="text-lg">Instrument Nepal - Your Destination for Quality Instruments</p>
                            </div>


                            <ul class="grid grid-cols-3 gap-4">
                                <li><a href="#" class="hover:text-gray-400">Home</a></li>
                                <li><a href="#" class="hover:text-gray-400">Store</a></li>
                                <li><a href="#" class="hover:text-gray-400">Order</a></li>
                                <li><a href="#" class="hover:text-gray-400">Payment</a></li>
                                <li><a href="#" class="hover:text-gray-400">Profile</a></li>
                                <li><a href="#" class="hover:text-gray-400">Notification</a></li>
                                <li><a href="#" class="hover:text-gray-400">Message</a></li>
                                <li><a href="#" class="hover:text-gray-400">About</a></li>
                                <li><a href="#" class="hover:text-gray-400">Help</a></li>
                            </ul>
                        </div>


                        <div>&copy; 2024 Instrument Nepal. All rights reserved.</div>
                    </div>
                </footer>










            </div>

        </div>



    );
}
export default IndexLoggedin;