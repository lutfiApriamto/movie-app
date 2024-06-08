import React, { useEffect, useState } from "react";
import image from "../../Img/Home2.jpg";

const Modal = ({ data, closeModal, isLoading }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center modal-overlay ${show ? 'show' : ''}`} style={{ zIndex: 1000 }}>
        <div className={`w-3/4 h-[450px] sm:h-80 md:h-72 bg-black rounded-xl border border-slate-600 sm:w-5/6 lg:w-3/4 lg:h-96 modal-content ${show ? 'show' : ''}`} style={{ zIndex: 1001 }}>
          <div className="flex justify-between px-1 py-2 relative">
            <h1 className="font-bold text-red-600 text-xl sm:px-2 sm:py-1 lg:text-3xl lg:mb-2">Movie Detail</h1>
            <button 
              className="text-red-600 absolute right-[4px] top-[-30px] lg:top-[-40px] md:text-2xl lg:text-4xl"
              onClick={() => {
                setShow(false);
                setTimeout(closeModal, 300);
              }}
            >
              X
            </button>
          </div>
          <div className="sm:flex sm:px-3 lg:px-5">
            {isLoading ? (
              <div className="flex justify-center items-center w-full h-full">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                <div className="w-full h-24 sm:h-60 lg:h-72 lg:w-2/5 md:h-52 md:w-1/3 sm:w-1/2 rounded-sm overflow-hidden mr-2 sm:border lg:mr-5 sm:border-slate-600">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${data.Poster || image})` }}></div>
                </div>
                <div className="sm:border sm:border-slate-600 w-full ">
                  <ul className="px-2 py-1">
                    <p className="text-white text-base font-semibold mb-3 lg:text-xl"> {data.Title}</p>
                    <p className="text-white text-sm lg:text-base font-extralight mb-2">Director : {data.Director}</p>
                    <p className="text-white text-sm lg:text-base font-extralight mb-2">Actor : {data.Actors}</p>
                    <p className="text-white text-sm lg:text-base font-extralight mb-2">Plot : <br /> {data.Plot}</p>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
