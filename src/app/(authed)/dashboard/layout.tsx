import React from "react";
import {  currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  const myUser = user?.emailAddresses[0].emailAddress;

  if (myUser !== "stivixhaferri01@gmail.com" && myUser !== "servicesdr.bids@gmai") {
    redirect('/');
  }

  return (
    <SidebarProvider>
    <AppSidebar />
    <main className="w-full">
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
  );
};

export default layout;
