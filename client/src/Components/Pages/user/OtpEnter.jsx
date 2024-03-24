import React, { useState, useEffect } from 'react';
import "../../Assets/css/Loader.css";
import { useFormik } from 'formik';
import axios from '../../api/api';
import { useNavigate } from 'react-router-dom';
const initialvalues = {
    otpCode: "",
    emailotp:""
}
const otpemail=sessionStorage.getItem("otpemail");
if(!otpemail)
{
    const navigate=useNavigate;
    navigate('/forgotpassord');
}

export default function OtpEnter() {
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(60);
    const [isTimerActive, setIsTimerActive] = useState(true);

    
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: initialvalues,
        onSubmit: async (values) => {
            try {
                const response = await axios.post('/forgotpasswordapi', values);
                console.log("this is response", response.data);
            }

            catch (error) {
                console.log("this is error message:" + error.response.data.message);
            }
        }
    })
    useEffect(() => {

        const countdown = () => {
            setTimeout(() => {
                if (timer > 0) {
                    setTimer(timer - 1);
                }
            }, 50);
        };


        if (isTimerActive && timer > 0) {
            countdown();
        }

        if (timer === 0) {
            setIsTimerActive(false);

        }
    }, [timer, isTimerActive]);


    const handleResendCode = () => {
        setIsTimerActive(true);
        setTimer(60);
      
    };



    return (
        <div>
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md mx-auto mt-24">
                <div className="flex flex-col space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
                    <p className="text-md md:text-xl">Enter the OTP we just sent you.</p>
                    <div className="loader"></div>
                    {isTimerActive ? (
                        <p className="text-sm">Resend code in: {timer} seconds</p>
                    ) : (

                        <form onSubmit={handleSubmit}>
                            <input type="hidden" value={otpemail} name="emailotp"/>
                        <button type="submit"  className="text-sm text-blue-600 underline" onClick={handleResendCode}>Resend Code</button>

                        </form>
                    )}
                </div>
                <div className="flex flex-col max-w-md space-y-5">
                    <input
                        type="text"
                        placeholder="OTP"
                        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                    />
                    {isLoading ? (<div class="loader"></div>) : (<button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                        Confirm
                    </button>)};
                </div>
            </div>
        </div>
    );
}
