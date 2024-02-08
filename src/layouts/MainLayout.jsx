import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-slate-200 min-h-screen flex justify-center">
      <div className="w-screen h-screen md:max-w-[768px] bg-white">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
