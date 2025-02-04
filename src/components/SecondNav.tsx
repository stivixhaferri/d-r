"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PanelLeft, BadgeInfo, House, MessagesSquare, MapPinHouse, Phone, Mail } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SecondNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDashboardRoute, setIsDashboardRoute] = useState(false);

  useEffect(() => {
    // Check the current route
    if (window.location.pathname.startsWith("/dashboard")) {
      setIsDashboardRoute(true);
    } else {
      setIsDashboardRoute(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 0 && !isDashboardRoute) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDashboardRoute]); 

  if(isDashboardRoute){
    return <></>
  }

  return (
    <div
      className={`flex items-center px-[5%] w-full lg:fixed fixed top-0 left-0 transition-all w-[100%] max-w-full overflow-x-hidden duration-300 z-[100] ${
        scrolled && !isDashboardRoute ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="lg:w-[50%] w-[50%] py-3">
        <Link href={"/"}>
          {scrolled && !isDashboardRoute ? (
            <img src="/logo.svg" className="lg:w-[25%] w-[50%]" alt="Logo" />
          ) : (
            <img src="/logo.svg" className="lg:w-[25%] w-[50%]" alt="Logo" />
          )}
        </Link>
      </div>

      <div className="lg:w-[50%] py-3 lg:flex hidden items-center justify-end gap-5 text-lg">
        <Link
          href={"/"}
          className={scrolled && !isDashboardRoute ? "text-gray-900 hover:underline transition-all 0.2s ease-in-out" : "text-gray-900 hover:underline transition-all 0.2s ease-in-out"}
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className={scrolled && !isDashboardRoute ? "text-gray-900 hover:underline transition-all 0.2s ease-in-out" : "text-gray-900 hover:underline transition-all 0.2s ease-in-out"}
        >
          About us
        </Link>

        <Link
          href={"/contact"}
          className={scrolled && !isDashboardRoute ? "text-white bg-gray-900 px-4 py-2 rounded-lg" : "text-white bg-gray-900 px-4 py-2 rounded-lg"}
        >
          Get in touch
        </Link>
      </div>

      <div className="lg:hidden flex w-[50%] items-center justify-end">
        <Sheet>
          <SheetTrigger>
            <PanelLeft className={scrolled && !isDashboardRoute ? "text-gray-900" : "text-gray-200"} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <img src="/logo.svg" alt="" />
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-5 pt-5 border-b-[0.4px] pb-5">
                  <Link href={'/'} className="w-full text-black bg-white text-start text-[20px] flex items-center gap-2 justify-start">
                    <House /> Home
                  </Link>

                  <Link href={'/about'} className="w-full text-black bg-white text-start text-[20px] flex items-center gap-2 justify-start">
                    <BadgeInfo /> About us
                  </Link>

                  <Link href={'/contact'} className="w-full text-black bg-white text-start text-[20px] flex items-center gap-2 justify-start">
                    <MessagesSquare /> Contact us
                  </Link>
                </div>
                <div className="flex flex-col gap-5 pt-5 border-b-[0.4px] pb-5">
                  <div className="w-full text-start text-gray-600 flex items-center gap-2">
                    <MapPinHouse /> 2020 Antwerp, Belgium
                  </div>
                  <div className="w-full text-start text-gray-600 flex items-center gap-2">
                    <Phone /> 2020 Antwerp, Belgium
                  </div>
                  <div className="w-full text-start text-gray-600 flex items-center gap-2">
                    <Mail /> hello@navytech.com
                  </div>
                </div>
                <div className="flex flex-col gap-5 pt-5 border-b-[0.4px] pb-5">
                  <Link href={'terms'} className="w-full text-start">
                    Terms & Conditions
                  </Link>
                  <Link href={'privacy'} className="w-full text-start">
                    Privacy Policy
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default SecondNav;
