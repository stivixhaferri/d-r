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
              SIMPLIFY AND <br /> LACE OF EXTRA
            </h2>
          </div>
          <div className="lg:w-[10%] w-full flex items-center justify-end gap-2 z-[5]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a href="" className="z-[5] ">
                    <div className="w-[50px] lg:mb-0 mb-5 h-[50px] border-black bg-black border-[1px] relative flex items-center justify-center rounded-full">
                      <Phone fill='white' className="" />
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

   

      <div className="px-[5%] py-[5%] flex lg:flex-row flex-col gap-5 bg-white items-center">
        <div className="lg:w-[50%]">
          <span className="text-gray-400 py-2">D&R Consultancy </span>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                tempora ut accusamus
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                tempora ut accusamus
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                tempora ut accusamus
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                tempora ut accusamus
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
                The Tale of Our Achievement Story
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Our achievement story is a testament to teamwork and
                perseverance. Together, we&apos;ve overcome challenges, celebrated
                victories, and created a narrative of progress and success.
              </p>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-start gap-6 flex">
            <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  33+ Years
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Influencing Digital Landscapes Together
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  125+ Projects
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Excellence Achieved Through Success
                </p>
              </div>
            </div>
            <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  26+ Awards
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Our Dedication to Innovation Wins Understanding
                </p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  99% Happy Clients
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Mirrors our Focus on Client Satisfaction.
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
                  Speechless with how easy this was to integrate
                </h3>
                <p className="my-4">
                  I recently got my hands on Flowbite Pro, and holy crap, I&apos;m
                  speechless with how easy this was to integrate within my
                  application. Most templates are a pain, code is scattered, and
                  near impossible to theme.
                </p>
                <p className="my-4">
                  Flowbite has code in one place and I&apos;m not joking when I say
                  it took me a matter of minutes to copy the code, customise it
                  and integrate within a Laravel + Vue application.
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
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">
                  Solid foundation for any project
                </h3>
                <p className="my-4">
                  FlowBite provides a robust set of design tokens and
                  components based on the popular Tailwind CSS framework. From
                  the most used UI components like forms and navigation bars to
                  the whole app screens designed both for desktop and mobile,
                  this UI kit provides a solid foundation for any project.
                </p>
                <p className="my-4">
                  Designing with Figma components that can be easily translated
                  to the utility classes of Tailwind CSS is a huge timesaver!
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
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">
                  Mindblowing workflow and variants
                </h3>
                <p className="my-4">
                  As someone who mainly designs in the browser, I&apos;ve been a
                  casual user of Figma, but as soon as I saw and started playing
                  with FlowBite my mind was 🤯.
                </p>
                <p className="my-4">
                  Everything is so well structured and simple to use (I&apos;ve
                  learnt so much about Figma by just using the toolkit).
                </p>
                <p className="my-4">
                  Aesthetically, the well designed components are beautiful and
                  will undoubtedly level up your next application.
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
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">
                  Efficient Collaborating
                </h3>
                <p className="my-4">
                  This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.
                </p>
                <p className="my-4">
                  You have many examples that can be used to create a fast
                  prototype for your team.
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
                    CTO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          
        </div>
      </section>

    
   

                    

    </div>
  );
};

export default page;
