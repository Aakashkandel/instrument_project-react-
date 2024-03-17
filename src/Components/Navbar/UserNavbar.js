import React, { useRef } from 'react';

const UserNavbar = () => {
    const element = useRef(null);

    const smoothTransition = (element, width, duration) => {
        const initialWidth = element.style.width || "auto";
        element.style.transition = `width ${duration}ms ease-in-out`;
        element.style.width = width;
        setTimeout(() => {

        }, duration);
    };

    return (
        <div
            className="bg-slate-900 w-14 h-screen py-10 overflow-hidden fixed z-10"
            onMouseOver={() => smoothTransition(element.current, '360px', 300)}
            onMouseOut={() => smoothTransition(element.current, '50px', 300)}
            onFocus={() => smoothTransition(element.current, '360px', 300)}
            onBlur={() => smoothTransition(element.current, '50px', 300)}
            ref={element}
        >
            <div>
                <ul class="list-none">
                    <li
                        class=" text-white py-2 my-2 flex hover:bg-white hover:text-black ">
                        <div> <ion-icon class="text-2xl px-4"
                            name="home-outline"></ion-icon></div>
                        <div class="cursor-pointer w-full"> <a class="text-xl mx-3  font-bold" href>Home</a></div>
                    </li>
                    <li
                        class="flex-1 text-white hover:bg-white hover:text-black py-2 my-2 flex">
                        <div>
                            <ion-icon class="text-2xl px-4"
                                name="person-outline"></ion-icon>
                        </div>
                        <div class="cursor-pointer w-full"  >
                            <a class="text-xl mx-3 font-bold" href>Shop</a>
                        </div>
                    </li>
                    <li
                        class=" text-white hover:bg-white hover:text-black py-2 my-2 flex  ">
                        <div> <ion-icon class="text-2xl px-4" name="cube-outline"></ion-icon></div>
                        <div class=" cursor-pointer w-full"> <a class="text-xl mx-3 font-bold" href>  Product  </a></div>
                    </li>
                    <li
                        class=" text-white hover:bg-white hover:text-black py-2 my-2 flex">
                        <div><ion-icon class="text-2xl px-4" name="cart-outline"></ion-icon></div>
                        <div class=" cursor-pointer w-full"> <a class="text-xl mx-3 font-bold" href>Cart</a></div>
                    </li>
                    <li
                        class=" text-white hover:bg-white hover:text-black py-2 my-2 flex">
                        <div> <ion-icon class="text-2xl px-4" name="chatbubble-outline"></ion-icon></div>
                        <div class=" cursor-pointer w-full"><a class="text-xl mx-3 font-bold" href>
                            Message</a></div>
                    </li>

                    <li
                        class=" flex-1 text-white hover:bg-white hover:text-black py-2 my-2 flex">
                        <div> <ion-icon class="text-2xl px-4"
                            name="information-circle-outline"></ion-icon></div>
                        <div class=" cursor-pointer w-full"><a class="text-xl mx-3 font-bold overflow-hidden"
                            href>Notification</a></div>
                    </li>


                    <li
                        class=" flex-1 text-white hover:bg-white hover:text-black py-2 my-2 flex">
                        <div> <ion-icon class="text-2xl px-4" name="person-circle-outline"></ion-icon></div>
                        <div class=" cursor-pointer w-full"><a class="text-xl mx-3 font-bold overflow-hidden"
                            href>Profile</a></div>
                    </li>

                    <li
                        class=" flex-1 text-white hover:bg-white hover:text-black py-2 my-2 flex">
                        <div> <ion-icon class="text-2xl px-4"
                            name="information-circle-outline"></ion-icon></div>
                        <div class=" cursor-pointer w-full"><a class="text-xl mx-3 font-bold overflow-hidden"
                            href>Help</a></div>
                    </li>

                    <li
                        class="  text-white hover:bg-white hover:text-black py-2 my-2 flex">

                        <div> <ion-icon class="text-2xl px-4"
                            name="log-in-outline"></ion-icon></div>
                        <div class=" cursor-pointer w-full">
                            <a class="text-xl mx-3 font-bold" href>Logout</a>

                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
}
export default UserNavbar;