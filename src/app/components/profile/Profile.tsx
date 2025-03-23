import { AvatarFallback } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import React, { FC } from "react";

type Props = {
  setProfileClicked: (value: boolean) => void;
};

const Profile: FC<Props> = ({ setProfileClicked }) => {
  return (
    <Avatar
      className="w-12 h-12 ml-8 hover:cursor-pointer"
      onClick={() => setProfileClicked(true)}
    >
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
  );
};

export default Profile;
