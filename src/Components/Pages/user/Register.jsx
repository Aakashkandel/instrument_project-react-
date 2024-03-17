import React, { useState } from 'react';

export default function Register() {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [districts, setDistricts] = useState([]);

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
            // Add cases for other provinces
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
                    <form>
                        <div class="mb-5">
                            <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input type="text" name="name" id="name" placeholder="Full Name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="mb-5">
                            <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div class="mb-5">
                            <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div class="mb-5">
                            <label for="password" class="mb-3 block text-base font-medium text-[#07074D]">
                                Password
                            </label>
                            <input type="password" name="password" id="password" placeholder="Enter Password"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>


                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Date of birth(DOB)
                                    </label>
                                    <input type="date" name="date" id="date"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                    <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Gender
                                    </label>
                                    <select name="gender" id="gender" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                        <option selected value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>

                                    </select>
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
                                        <select name="state" id="state" value={selectedProvince} onChange={handleProvinceChange}
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
                                    </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">


                                    <div className="mb-5">

                                        <select name="district" id="district"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                            <option value="">Select District</option>
                                            {districts.map(district => (
                                                <option key={district} value={district}>{district}</option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <input type="text" name="state" id="state" placeholder="Enter City Area"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                        <div>
                            <button
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


