"use client";
import React, { useRef, useState } from "react";
import Profile from "./profile/Profile";
import ProfileDropDown from "./profile/ProfileDropDown";
import useClickOutside from "../hooks/useClickOutSide";

const Navbar = () => {
  const [isProfileClicked, setProfileClicked] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  useClickOutside(divRef as React.RefObject<HTMLElement>, setProfileClicked);

  return (
    <div
      className="py-6 w-full bg-blue-400 h-20 flex flex-row items-center relative"
      ref={divRef}
    >
      <Profile setProfileClicked={setProfileClicked} />
      {isProfileClicked && <ProfileDropDown />}
    </div>
  );
};

export default Navbar;
