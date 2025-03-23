import { Button } from "@/components/ui/button";
import React from "react";

const ProfileDropDown = () => {
  return (
    <div className="w-28 h-24 absolute top-16 left-4 shadow-2xl">
      <Button className="w-full mt-1 hover:cursor-pointer bg-white text-black hover:bg-gray-300 h-1/2">
        Logout
      </Button>
      <Button className="w-full mt-1 hover:cursor-pointer bg-white text-black hover:bg-gray-300 h-1/2">
        Logout
      </Button>
    </div>
  );
};

export default ProfileDropDown;
