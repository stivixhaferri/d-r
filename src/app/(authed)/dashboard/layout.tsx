import React from "react";
import {  currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'


const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  const myUser = user?.emailAddresses[0].emailAddress;

  if (myUser !== "stivixhaferri01@gmail.com") {
    redirect('/')
  }

  return (
    <div>
      {/* <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
      {children}
    </div>
  );
};

export default layout;
