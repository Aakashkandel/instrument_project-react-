import { useFormik, setFieldValue } from 'formik';
import React, { useState } from 'react';
import { signUpSchema } from '../../../schemas';
import axios from '../../api/api';


const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    date: "",
    gender: "",
    state: "",
    district: "",
    city_area: "",



}

export default function Register() {

    const [selectedProvince, setSelectedProvince] = useState('');
    const [districts, setDistricts] = useState([]);


    
  
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            try {
                console.log("this is data", values);
                const response = await axios.post('/registerapi', JSON.stringify(values), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data); // Handle response from server
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    });
    







    const handleProvinceChange = (e) => {

        const province = e.target.value;
        setSelectedProvince(province);


        switch (province) {
            case 'koshi_province':
                setDistricts([
                    'Bhojpur',
                    'Dhankuta',
                    'Ilam',
                    'Jhapa',
                    'Khotang',
                    'Morang',
                    'Okhaldhunga',
                    'Pachthar',
                    'Sankhuwasabha',
                    'Solukhumbu',
                    'Sunsari',
                    'Taplejung',
                    'Terhathum',
                    'Udayapur'
                ]);
                break;
            case 'madhesh_province':
                setDistricts([
                    'Parsa',
                    'Bara',
                    'Rautahat',
                    'Sarlahi',
                    'Siraha',
                    'Dhanusha',
                    'Saptari',
                    'Mahottari'
                ]);
                break;

            case 'bagmati_province':
                setDistricts([
                    'Bhaktapur',
                    'Chitwan',
                    'Dhading',
                    'Dolakha',
                    'Kathmandu',
                    'Kavrepalanchok',
                    'Lalitpur',
                    'Makwanpur',
                    'Nuwakot',
                    'Ramechap',
                    'Rasuwa',
                    'Sindhuli',
                    'Sindhupalchok'
                ]);
                break;
            case 'gandaki_province':
                setDistricts([
                    'Baglung',
                    'Gorkha',
                    'Kaski',
                    'Lamjung',
                    'Manang',
                    'Mustang',
                    'Myagdi',
                    'Nawalpur',
                    'Parwat',
                    'Syangja',
                    'Tanahun'
                ]);
                break;
            case 'lumbini_province':
                setDistricts([
                    'Kapilvastu',
                    'Parasi',
                    'Rupandehi',
                    'Arghakhanchi',
                    'Gulmi',
                    'Palpa',
                    'Dang',
                    'Pyuthan',
                    'Rolpa',
                    'Eastern Rukum',
                    'Banke',
                    'Bardiya'
                ]);
                break;
            case 'karnali_province':
                setDistricts([
                    'Western Rukum',
                    'Salyan',
                    'Dolpa',
                    'Humla',
                    'Jumla',
                    'Kalikot',
                    'Mugu',
                    'Surkhet',
                    'Dailekh',
                    'Jajarkot'
                ]);
                break;
            default:
                setDistricts([
                    'Darchula',
                    'Bajhang',
                    'Bajura',
                    'Baitadi',
                    'Doti',
                    'Acham',
                    'Dadeldhura',
                    'Kanchanpur',
                    'Kailali'
                ]);
                break;
        }
    };
    return (
        <div>

            <div class="flex items-center justify-center p-12">

                <div class="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-5">
                            <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input type="text" name="name" id="name" placeholder="Full Name" value={values.name} onChange={handleChange} onBlur={handleBlur}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                           {errors.name && touched.name?(<p class="text-red-500">{errors.name}</p>):null} 
                        </div>
                        <div class="mb-5">
                            <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number" value={values.phone} onChange={handleChange} onBlur={handleBlur}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                           {errors.phone && touched.phone?(<p class="text-red-500">{errors.phone}</p>):null} 
                        </div>
                        <div class="mb-5">
                            <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" value={values.email} onChange={handleChange} onBlur={handleBlur}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                           {errors.email && touched.email?(<p class="text-red-500">{errors.email}</p>):null} 
                        </div>

                        <div class="mb-5">
                            <label for="password" class="mb-3 block text-base font-medium text-[#07074D]">
                                Password
                            </label>
                            <input type="password" name="password" id="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            {errors.password && touched.password?(<p class="text-red-500">{errors.password}</p>):null} 
                        </div>

                        <div class="mb-5">
                            <label for="cpassword" class="mb-3 block text-base font-medium text-[#07074D]">
                                Confirm Password
                            </label>
                            <input type="password" name="confirm_password" id="cpassword" placeholder="Confirm Your Password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            {errors.confirm_password && touched.confirm_password?(<p class="text-red-500">{errors.confirm_password}</p>):null} 
                        </div>


                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Date of birth(DOB)
                                    </label>
                                    <input type="date" name="date" id="date" value={values.date} onChange={handleChange} onBlur={handleBlur}
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                  {errors.date && touched.date?(<p class="text-red-500">{errors.date}</p>):null} 
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Gender
                                    </label>
                                    <select name="gender" id="gender" value={values.gender} onChange={handleChange} onBlur={handleBlur} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                        <option selected value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>

                                    </select>
                                    {errors.gender && touched.gender?(<p class="text-red-500">{errors.gender}</p>):null} 

                                </div>
                            </div>
                        </div>

                        <div class="mb-5 pt-3">
                            <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                                Address Details
                            </label>
                            <div class="-mx-3 flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <select name="state" id="state" value={values.state}
                                            onChange={(e) => {
                                                handleProvinceChange(e);
                                                handleChange(e);
                                            }}
                                            onBlur={handleBlur}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                            <option value="">Select State</option>
                                            <option value="koshi_province">Koshi Province</option>
                                            <option value="madhesh_province">Madhesh Province</option>
                                            <option value="bagmati_province">Bagmati Province</option>
                                            <option value="gandaki_province">Gandaki Province</option>
                                            <option value="lumbini_province">Lumbini Province</option>
                                            <option value="karnali_province">Karnali Province</option>
                                            <option value="sudurpaschim_province">Sudurpaschim Province</option>
                                        </select>
                                        {errors.state && touched.state?(<p class="text-red-500">{errors.state}</p>):null} 

                                    </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">


                                    <div className="mb-5">

                                        <select name="district" id="district" value={values.district} onChange={handleChange} onBlur={handleBlur}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                            <option value="">Select District</option>
                                            {districts.map(district => (
                                                <option key={district} value={district}>{district}</option>
                                            ))}
                                        </select>
                                        {errors.district && touched.district?(<p class="text-red-500">{errors.district}</p>):null} 
                                    </div>

                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <input type="text" name="city_area" id="state" placeholder="Enter City Area" value={values.city_area} onChange={handleChange} onBlur={handleBlur}
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                       {errors.city_area && touched.city_area?(<p class="text-red-500">{errors.city_area}</p>):null} 

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <button name="submit" type="submit"
                                class="hover:shadow-form w-full rounded-md bg-green-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}


