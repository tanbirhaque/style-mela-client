const Subscription = () => {
  return (
    <div className="w-full px-10">
      <div
        style={{
          backgroundImage: 'url("https://i.ibb.co/4NMZ5VG/837-76072.jpg")',
          backgroundSize: "cover",
        }}
        className="text-white h-[500px] p-10 flex justify-end items-center rounded-3xl"
      >
        <div className="max-w-md mr-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49.506"
            height="49.506"
            viewBox="0 0 49.506 49.506"
          >
            <path
              d="M37.9,49.506H11.6A11.616,11.616,0,0,1,0,37.9v-11.6a5.346,5.346,0,0,1,1.672-3.918,5.479,5.479,0,0,1,4.038-1.5,5.386,5.386,0,0,1,2.938,1.07l11.4,8.544.013.01a7.754,7.754,0,0,0,9.382,0l.013-.01,11.4-8.54A5.391,5.391,0,0,1,43.8,20.893a5.48,5.48,0,0,1,4.037,1.5,5.346,5.346,0,0,1,1.672,3.918V37.9A11.616,11.616,0,0,1,37.9,49.506ZM5.431,24.753a1.621,1.621,0,0,0-1.1.441,1.491,1.491,0,0,0-.467,1.112V37.9A7.744,7.744,0,0,0,11.6,45.638H37.9A7.744,7.744,0,0,0,45.638,37.9v-11.6a1.491,1.491,0,0,0-.467-1.112A1.612,1.612,0,0,0,44,24.755a1.509,1.509,0,0,0-.832.31L31.783,33.6a11.631,11.631,0,0,1-14.06,0L6.333,25.061a1.5,1.5,0,0,0-.9-.308Zm24.157-3.868a1.934,1.934,0,0,0-1.934-1.934H17.211a1.934,1.934,0,0,0,0,3.868H27.654A1.934,1.934,0,0,0,29.587,20.885Zm4.835-7.445a1.934,1.934,0,0,0-1.934-1.934H17.211a1.934,1.934,0,0,0,0,3.868H32.488A1.934,1.934,0,0,0,34.422,13.44Zm10.443,1.74V11.6A11.616,11.616,0,0,0,33.262,0H16.437a11.616,11.616,0,0,0-11.6,11.6v3.578a1.934,1.934,0,1,0,3.868,0V11.6a7.744,7.744,0,0,1,7.735-7.735H33.262A7.744,7.744,0,0,1,41,11.6v3.578a1.934,1.934,0,1,0,3.868,0Z"
              fill="#fff"
            />
          </svg>
          <h1 className="text-[45px] font-bold">
            GET $20 OFF YOUR FIRST ORDER?
          </h1>
          <p className=" font-medium">Join our mailing list!</p>
          <form className="mt-5">
            <div className="relative">
              <input
                type="search"
                className="block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Enter Your Email Address"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2 font-medium text-sm px-6 py-3 bg-black hover:bg-[#fa8c16] w-fit rounded-lg transition-all duration-200 ease-linear"
              >
                Shop Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
