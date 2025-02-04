import React from "react";
import { Send, Phone, Instagram, Facebook, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {AppleCarousel} from '@/components/AppleCarousel'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import FAQ from "@/components/FAQ";
import BlogsSection from "@/components/BlogSection";

const page = () => {
  return (
    <div className="w-full obverflow-x-hidden">
      <div className="lg:h-[100vh] relative   px-[5%] w-full lg:pt-[5%]  overflow-hidden">
        <div className="bg-black top-0 left-0 right-0 bottom-0 absolute z-[3] opacity-[0.2] lg:min-h-[100vh] min-h-[120vh]"></div>
        <img
          src="/2.jpg"
          className="absolute top-0 left-0 right-0 bottom-0 z-[2]  lg:h-[100vh] min-h-[80vh]"
          style={{ width: "100%" }}
          alt=""
        />
        <div className="lg:flex hidden flex-col gap-5 bottom-5 right-5 absolute z-[5] pl-3 border-l-[0.3px] border-gray-300">
          <a href="">
            <Instagram className="text-gray-100" />
          </a>
          <a href="">
            <Facebook className="text-gray-100" />
          </a>
        </div>
        <div className="flex items-center z-[5] lg:flex-row flex-col lg:pt-[20%] pt-[35%] gap-2">
          <div className="lg:w-[10%] w-full flex items-center gap-2 z-[5]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a href="mailto:servicesdr.bids@gmail" className="z-[5]">
                    <div className="w-[50px] bg-black  h-[50px] border-black border-[1px] relative flex items-center justify-center rounded-full">
                      <Send fill="white" className="text-white" />
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>servicesdr.bids@gmail</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="lg:w-[80%] w-full flex items-center justify-center">
            <h2 className="stretch lg:text-[80px] lg:py-0 py-5 z-[5] text-[35px] font-semibold relative drop-shadow-4xl text-gray-300 lg:shadow-none ">
            EASE YOUR PATH, LEAD AHEAD
            </h2>
          </div>
          <div className="lg:w-[10%] w-full flex items-center justify-end gap-2 z-[5]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a href="tel:+32495135112" className="z-[5] ">
                    <div className="w-[50px] lg:mb-0 mb-5 h-[50px] border-black bg-black border-[1px] relative flex items-center justify-center rounded-full">
                      <Phone fill='white' className="" />
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Phone : +32 495 13 51 12</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

   

      <div className="px-[5%] py-[5%] flex lg:flex-row flex-col gap-5 bg-white items-center">
        <div className="lg:w-[50%]">
          <span className="text-gray-400 py-2">D&R Services </span>
          <h2 className="lg:text-[60px] text-[35px] text-gray-900 font-semibold">
            We help our <br /> clients succeed.
          </h2>
          <p className="text-gray-600 text-xl py-[5%] lg:w-[85%]">
            Through careful analysis, creative thinking, and a deep
            understanding of their goals, we empower businesses to surpass
            expectations and thrive in today&apos;s dynamic and competitive
            landscape.
          </p>
          <a href="" className="lg:text-5xl text-xl text-gray-900">
            <p className="pt-[5%] flex items-center gap-5">
              CONTACT NOW <MoveRight fontSize={80} />
            </p>
          </a>

          <div className="pt-[5%] flex items-center gap-4">
            <div className="flex -space-x-4 rtl:space-x-reverse ">
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/p1.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/p2.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/p3.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/p4.jpg"
                alt=""
              />
            </div>
            <h3 className="text-gray-900">100+ Happy Clients</h3>
          </div>
        </div>
        <div className="lg:w-[50%] lg:py-0 pt-5 relative overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-800 opacity-[0.3] to-blue-900 lg:hidden flex w-[500px] h-[500px] absolute top-[35%] left-0 right-0 bottom-0 rounded-full blur-3xl"></div>
          <img
            src="/bruxelles.jpg"
            className="lg:w-[85%] w-full lg:h-[800px] mx-auto rounded-lg object-cover relative"
            alt=""
          />
        </div>
      </div>

      <div className="px-[5%] py-[5%] bg-white text-gray-900 flex lg:flex-row flex-col items-center">
        <div className="lg:w-[50%]">
          <Badge
            variant="outline"
            className="bg-[#003BA4] text-white my-2 text-lg rounded-full"
          >
            Features
          </Badge>

          <h2 className="lg:text-[60px] text-[35px] text-start font-semibold">
            Less Accounting is <br /> trusted by thousands <br /> of companies
          </h2>
        </div>
        <div className="lg:w-[50%]">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-3 pt-5">
            <div className="flex flex-col gap-3">
              <img
                src="/services/5.svg"
                alt=""
                className="w-[50px] object-fill"
              />
              <h2 className="text-3xl font-semibold text-gray-900 py-3">
                Bid Management
              </h2>
              <p className="text-gray-500">
              Streamline your processes with tailored solutions to meet every requirement.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <img
                src="/services/3.svg"
                alt=""
                className="w-[50px] object-fill"
              />
              <h2 className="text-3xl font-semibold text-gray-900 py-3">
                IT Services
              </h2>
              <p className="text-gray-500">
              Empower your business with cutting-edge tech and expert support for growth.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <img
                src="/services/1.svg"
                alt=""
                className="w-[50px] object-fill"
              />
              <h2 className="text-3xl font-semibold text-gray-900 py-3">
                Visa Support
              </h2>
              <p className="text-gray-500">
                Navigate visa complexities effortlessly with our personalized guidance.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <img
                src="/services/2.svg"
                alt=""
                className="w-[50px] object-fill"
              />
              <h2 className="text-3xl font-semibold text-gray-900 py-3">
                Hiring Constructtion
              </h2>
              <p className="text-gray-500">
              Bridge the gap to skilled teams for seamless project execution abroad.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-center items-start gap-8 flex">
          <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
            <h6 className="text-gray-400 text-base font-normal leading-relaxed">
              About Us
            </h6>
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <h2 className="text-gray-900 dark:text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              The Journey of Progress and Purpose
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              Our story is built on dedication, collaboration, and growth. Together, we’ve turned challenges into opportunities, milestones into achievements, and aspirations into realities.
              </p>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-start gap-6 flex">
            <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  5+ Years
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                Shaping Industries with Consistency and Expertise
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  100+ Projects
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                Delivering Results That Make a Difference
                </p>
              </div>
            </div>
            <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  8+ Awards
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                Recognized for Pioneering Solutions and Commitment
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  99% Happy Clients
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                Reflecting Our Promise to Quality and Trust
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="w-full lg:justify-start justify-center items-start flex">
        <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
          <img
            className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717742431.png"
            alt="about Us image"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      </div>


      <AppleCarousel/>


      <div className="px-[5%] lg:py-[5%] pb-[10%] overflow-hidden">
        <h2 className="text-3xl font-semibold stretch w-full text-center">OUR IT SERVICES</h2>
        <div className="lg:grid flex flex-col lg:grid-cols-2 grid-cols-1 lg:py-5 py-[5%] gap-[5%] ">
          <div className="lg:py-1 py-[5%]">
            <img src="/s11.svg" alt="" />
          </div>

          <div className="flex items-center gap-5 lg:py-1 py-[5%]">
            <img src="/s1.svg" alt="" />
            <h2 className="text-gray-500 text-lg">
            Robust and scalable cloud storage solutions designed to securely manage and store sensitive data related to bidding processes and recruitment operations. Our advanced security measures.
            </h2>
          </div>



          <div className="flex items-center gap-5 lg:py-1 py-[5%]">
            <img src="/s2.svg" alt="" />
            <h2 className="text-gray-500 text-lg">
            Robust and scalable cloud storage solutions designed to securely manage and store sensitive data related to bidding processes and recruitment operations. Our advanced security measures.
            </h2>
          </div>

          <div className="lg:py-1 py-[5%]">
            <img src="/s223.svg" alt="" />
          </div>


          
          <div className="lg:py-1 py-[5%]">
            <img src="/s33.svg" alt="" />
          </div>


          <div className="flex items-center gap-5 lg:py-1 py-[5%]">
            <img src="/s3.svg" alt="" />
            <h2 className="text-gray-500 text-lg">
            We offer tailored project management solutions using tools like Notion to help you manage bids, recruitment tasks.
            </h2>
          </div>




        </div>
      </div>

    <section>
      <FAQ/>
    </section>
      

      <section className="bg-white lg:pt-0">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-[5%] lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Testimonials
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">
                  Simplifying Bid Management
                </h3>
                <p className="my-4">
                Working with D&R Services has been a transformative experience. Their expertise in identifying, managing, and winning bids is unparalleled.
                With clear processes and well-organized strategies, they made a complex task feel straightforward. If you`re looking for dependable support, D&R is the right choice.
                </p>
                
                <p className="my-4">
                  If you care for your time, I hands down would go with this.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium text-left">
                  <div>Bonnie Green</div>
                  <div className="text-sm font-light text-gray-500">
                  Project Manager at Open Solutions
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">
                Reliable IT Services
                </h3>
                <p className="my-4">
                D&R Services&apos;s IT services are a game-changer. From setting up systems to maintaining security, they provide end-to-end support that keeps everything running smoothly.

Their team’s attention to detail ensures that every project is completed on time and within budget.
                </p>
               
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium text-left">
                  <div>Roberta Casas</div>
                  <div className="text-sm font-light text-gray-500">
                  IT Lead at TechBridge
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">
                Efficient Visa Support
                </h3>
                <p className="my-4">
                D&R Services made the visa process incredibly simple and stress-free. Their deep understanding of legal requirements and documentation saved us valuable time.

Their professionalism and commitment to detail truly stand out. I highly recommend their visa support services.
                </p>
               
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium text-left">
                  <div>Jese Leos</div>
                  <div className="text-sm font-light text-gray-500">
                  HR Specialist at GlobalLink
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">
                Skilled Workforce Hiring
                </h3>
                <p className="my-4">
                Hiring skilled workers through D&R Services has been a seamless process. They have an impressive network and provide reliable candidates who meet our project needs perfectly.

Their support has been instrumental in helping us meet tight deadlines while maintaining high-quality standards.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium text-left">
                  <div>Joseph McFall</div>
                  <div className="text-sm font-light text-gray-500">
                  Construction Manager at BuildSmart
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          
        </div>
      </section>


      <BlogsSection/>
    
   

                    

    </div>
  );
};

export default page;
