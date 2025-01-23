import React from "react";
import ContactForm from "@/components/ContactForm";


const page = () => {
  return (
    <div className="px-[5%] pb-[5%] lg:pt-[10%] pt-[17%] bg-gray-100 relative min-h-screen">
      <img
        src="/werp.jpg"
        className="top-0 left-0 right-0 bottom-0 absolute z-[1] min-h-screen  lg:min-h-screen w-[100%] h-full"
        alt=""
      />
      <div className="bg-black top-0 left-0 right-0 bottom-0 absolute bg-opacity-[0.3] z-[2]"></div>
      <div className=" flex lg:flex-row flex-col  gap-5 bg-gray-100 relative z-[5] rounded-lg overflow-hidden">
        <div className="lg:w-[50%] z-[5] bg-gray-100">
          <ContactForm />
        </div>
        <div className="lg:w-[50%] flex  justify-center bg-gray-100 z-[5]">
          <div className="px-[4%] lg:py-[6%] pt-2 pb-[6%] rounded-2xl bg-gray-100 w-full ">
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.471001255642!2d4.392788733305481!3d51.18329187483666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6cc859847d9%3A0x37ade488493ad5c0!2sKruishofstraat%20142%2C%202020%20Antwerpen%2C%20Belgium!5e0!3m2!1sen!2sru!4v1737128649974!5m2!1sen!2sru"
              loading="lazy"
              className="w-full  lg:h-full h-[300px] rounded-xl border-black border-[0.5px]"
            ></iframe>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
