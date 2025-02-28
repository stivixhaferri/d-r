import React from "react";
import { Send, Phone, Instagram, Facebook, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
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
                  <a href="mailto:servicesdr.bids@gmail.com" className="z-[5]">
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
                  <a href="tel:+0032478262139" className="z-[5] ">
                    <div className="w-[50px] lg:mb-0 mb-5 h-[50px] border-black bg-black border-[1px] relative flex items-center justify-center rounded-full">
                      <Phone fill="white" className="" />
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Phone : 0032478262139</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div className="px-[5%] py-[5%] flex lg:flex-row flex-col gap-5 bg-white items-center">
        <div className="lg:w-[50%]">
          <span className="text-gray-400 py-2">D&R Services </span>
          <h2 className="lg:text-[40px] text-[35px] text-gray-900 font-semibold">
            Are you looking to expand your business by participating in tenders?
          </h2>
          <p className="text-gray-600 text-xl py-[5%] lg:w-[85%]">
            If you have at least three years of experience in your field,
            you&apos;re in the right place!
            <br />
            Our expert team is dedicated to guiding your business toward
            successful bids and rapid growth—regardless of your industry.
          </p>
          <a
            href="https://wa.me/32478262139"
            className="lg:text-5xl text-xl text-gray-900"
          >
            <p className="pt-[5%] flex items-center gap-5">
              CONTACT NOW <MoveRight fontSize={80} />
            </p>
          </a>
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

          <h2 className="lg:text-[40px] text-[35px] text-start font-semibold">
            What We Offer <br />
            We provide end-to-end bid and tender management services, ensuring a
            smooth and successful bidding process.
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
                Bid Management & Strategy
              </h2>
              <p className="text-gray-500">
                Managing the entire bidding process from start to finish
                Developing and executing a tailored bid plan Proactively
                resolving issues and ensuring seamless bid submission
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <img
                src="/services/3.svg"
                alt=""
                className="w-[50px] object-fill"
              />
              <h2 className="text-3xl font-semibold text-gray-900 py-3">
                Customer & Team Management
              </h2>
              <p className="text-gray-500">
                Acting as the main point of contact for the tendering process
                Coordinating bid team meetings, workshops, and governance
                sessions Building and managing the right team to enhance your
                bid&apos;s success
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <img
                src="/services/1.svg"
                alt=""
                className="w-[50px] object-fill"
              />
              <h2 className="text-3xl font-semibold text-gray-900 py-3">
                Tender Search & Evaluation
              </h2>
              <p className="text-gray-500">
                Identifying new bid opportunities within your industry Providing
                a comprehensive analysis of tenders to support informed
                decision-making (go/no-go assessment)
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <img
                src="/services/2.svg"
                alt=""
                className="w-[50px] object-fill"
              />
              <h2 className="text-3xl font-semibold text-gray-900 py-3">
                Proposal & Documentation Management
              </h2>
              <p className="text-gray-500">
                Ensuring all bid documents are well-organized and compliant with
                tender requirements
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
                      Expert Review
                    </h6>
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="text-gray-900 dark:text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        Elevate Your Bidding Strategy for Maximum Success
                      </h2>
                      <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center"></p>
                      <ul>
                        <li className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center py-1">
                          • Overseeing the review process for written responses
                          to maximize quality and impact.
                        </li>
                        <li className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center py-1">
                          • Managing customer engagement and communication
                          throughout the bidding phase.
                        </li>
                        <li className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center py-1">
                          • Whether you need a dedicated bid manager or a full
                          presales team, we have the expertise to help you win
                          more tenders and accelerate your business growth.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-6 flex">
                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          10+ Years
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Shaping Industries with Consistency and Expertise.
                        </p>
                      </div>
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          1000+ Projects
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          {/* Delivering high-impact solutions with a  value exceeding €1 billion.  */}
                          Delivering high-impact solutions with a value
                          exceeding €1 billion.
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                      <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          200+ Awards
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Recognized for Pioneering Solutions and Commitment.
                        </p>
                      </div>
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          99% Happy Clients
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Reflecting Our Promise to Quality and Trust.
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

      {/* <AppleCarousel/> */}

      <div className="px-[5%] lg:py-[5%] pb-[10%] overflow-hidden">
        {/* <h2 className="text-3xl font-semibold stretch w-full text-center">OUR IT SERVICES</h2> */}
        <div className="lg:grid flex flex-col lg:grid-cols-2 grid-cols-1 lg:py-5 py-[5%] gap-[5%] ">
          <div className="lg:py-1 py-[5%]">
            <img src="/e1.svg" alt="" />
          </div>

          <div className="flex items-center gap-5 lg:py-1 py-[5%]">
            <img src="/s1.svg" alt="" />
            <h2 className="text-gray-500 text-lg">
              Our approach goes beyond standard bid writing—we use data and
              competitor analysis to refine your proposals for maximum impact.
              <br />
              By identifying trends, evaluating past bid performances, and
              aligning strategies with buyer expectations, we help you create
              winning bids.
              <br />
              With our expertise, you can enhance your competitive edge and
              improve your success rate.
              <br />
            </h2>
          </div>

          <div className="flex items-center gap-5 lg:py-1 py-[5%]">
            <img src="/s3.svg" alt="" />
            <h2 className="text-gray-500 text-lg">
              Managing multiple stakeholders, deadlines, and documentation can
              be overwhelming.
              <br />
              Our bid management services ensure that every aspect of your
              submission is handled with precision.
              <br />
              From organizing team workshops to aligning responses with
              evaluation criteria, we guarantee a seamless, stress-free bidding
              experience.
              <br />
            </h2>
          </div>

          <div className="lg:py-1 py-[5%]">
            <img src="/e3.svg" alt="" />
          </div>
        </div>
      </div>

      <section>
        <FAQ />
      </section>

      <BlogsSection />
    </div>
  );
};

export default page;
