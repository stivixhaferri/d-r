import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Send, Phone, Instagram, Facebook } from "lucide-react";
import { ArrowRight, Award, Clock, Globe, Target } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="lg:h-[100vh] relative   px-[5%] w-full lg:pt-[5%]  overflow-hidden">
        <div className="bg-black top-0 left-0 right-0 bottom-0 absolute z-[3] opacity-[0.2] lg:min-h-[100vh] min-h-[120vh]"></div>
        <img
          src="/about2.jpg"
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
                  <a href="" className="z-[5]">
                    <div className="w-[50px] bg-black  h-[50px] border-black border-[1px] relative flex items-center justify-center rounded-full">
                      <Send fill="white" className="text-white" />
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>hello@navytech.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="lg:w-[80%] w-full flex items-center justify-center">
            <h2 className="stretch lg:text-[80px] lg:py-0 py-5 z-[5] text-[35px] font-semibold relative drop-shadow-4xl text-gray-300 lg:shadow-none ">
              ABOUT OUR <br /> AGENCY
            </h2>
          </div>
          <div className="lg:w-[10%] w-full flex items-center justify-end gap-2 z-[5]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a href="" className="z-[5] ">
                    <div className="w-[50px] lg:mb-0 mb-5 h-[50px] border-black bg-black border-[1px] relative flex items-center justify-center rounded-full">
                      <Phone fill="white" className="" />
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Phone : +01 23456789</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Mission
          </h2>
          <div className="flex items-center justify-center">
            <Target className="w-12 h-12 text-blue-600 mr-4" />
            <p className="text-xl text-gray-700 max-w-2xl">
              To empower businesses with innovative solutions that drive growth,
              efficiency, and success in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly pushing boundaries and exploring new ideas.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest quality in everything we do.
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">
                Delivering consistent results and building trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-semibold mb-2">
                2010: The Beginning
              </h3>
              <p className="text-gray-600">
                Acme Inc. was founded with a vision to transform business
                technology.
              </p>
            </div>
            <div className="mb-8 relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-semibold mb-2">2015: Rapid Growth</h3>
              <p className="text-gray-600">
                Expanded our services and opened offices in 5 new countries.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-semibold mb-2">
                2023: Industry Leader
              </h3>
              <p className="text-gray-600">
                Recognized as a top innovator in business technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s work together to achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
