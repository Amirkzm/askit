import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";

type UserCardProps = {
  user: User;
};
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex flex-col background-light900_dark200 text-dark100_light900 shadow-lg p-6 gap-4 flex-grow">
      <Image
        src={user.avatar}
        alt={user.name}
        className="rounded-full self-center"
        width={40}
        height={40}
      />
      <Link href={"#"} className="h3-bold flex flex-col items-center ">
        {user.name}
        <p className="text-light400_light500 text-sm">@{user.userName}</p>
      </Link>
      <p className="text-center text-light400_light500 text-sm relative top-3">
        {user.currentProgress}%
      </p>
      <ProgressIndicator
        progress={user.currentProgress}
        classNames="self-center"
      />
      <div className="flex-between gap-2 mt-8 text-sm text-light400_light500">
        <div className="flex flex-col items-center">
          {user.questions}
          <p>Questions</p>
        </div>
        <div className="flex flex-col items-center">
          {user.answers}
          <p>Answered</p>
        </div>
        <div className="flex flex-col items-center ">
          {user.rank}
          <p>Rank</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
