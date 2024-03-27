import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const TopNav = () => {
    return (
        <>
            <div className='bg-black text-white font-kumbh'>
                <div className='max-w-[1600px] flex justify-between mx-auto text-[15px] pt-5 pb-2'>
                    <div className='flex items-center'>
                        <div>
                            <Link href={"/"}>
                                <p>Reviews</p>
                            </Link>
                        </div>
                        <div className='bg-white h-[13px] w-[1px] mx-5'></div>
                        <div>
                            <Link href={"/"}>
                                <p>Support</p>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <Link href={"/"} className='flex items-center gap-2'>
                                <FaWhatsapp className='text-[20px]'></FaWhatsapp>
                                <p>+1 86.36.166</p>
                            </Link>
                        </div>
                        <div className='bg-white h-[13px] w-[1px] mx-5'></div>
                        <div>
                            <Link href={"/"} className='flex items-center gap-2'>
                                <MdOutlineEmail className='text-[20px]'></MdOutlineEmail>
                                <p>Contact@Yourdomain.Com</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNav;