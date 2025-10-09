import LeftSideBar from "@/component/LeftSideBar";
import RightSideBar from "@/component/RightSideBar";
import React from "react";
import QueryProvider from "../../../providers/QueryProviders";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <QueryProvider>
        <LeftSideBar />
        <div className="mr-2 md:mr-10  xl:mr-110  lg:ml-100 ml-12 min-h-screen border border-border mb-20">
          {children}
        </div>
        <RightSideBar />
      </QueryProvider>
    </>
  );
}
