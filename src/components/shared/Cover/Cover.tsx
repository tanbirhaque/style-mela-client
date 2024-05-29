import Image from "next/image";
//icons
import { FaChevronRight } from "react-icons/fa6";

const Cover = ({ image, heading, route }: any) => {
  return (
    <div
      className="min-h-64 flex flex-col justify-center items-center text-white space-y-5"
      style={{
        backgroundImage: `url('https://demo.phlox.pro/shop-furniture-2/wp-content/uploads/sites/258/2020/12/Group-8053.jpg')`,
        backgroundRepeat: "no-repeat",
        // backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="font-black uppercase text-[50px]">{heading}</h1>
      <p className="text-base flex gap-3 text-center items-center capitalize">
        home <FaChevronRight /> {route}
      </p>
    </div>
  );
};

export default Cover;
