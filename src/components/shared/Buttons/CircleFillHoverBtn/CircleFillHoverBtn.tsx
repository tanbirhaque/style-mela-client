import React from 'react';

interface CircleFillHoverBtnProps {
    btnText: string;
}

const CircleFillHoverBtn: React.FC<CircleFillHoverBtnProps> = ({ btnText }) => {
    console.log(btnText);
    return (
        <div className='group bg-[#fa8c16] w-fit px-[38px] py-[15px] rounded-[10px] text-white relative overflow-hidden'>
            <div className='absolute bg-black w-[0px] h-[0px] group-hover:w-[200px] group-hover:h-[200px]  rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 ease-linear'></div>
            <button className='z-[99999] relative'>{btnText}</button>
        </div>
    );
};

export default CircleFillHoverBtn;