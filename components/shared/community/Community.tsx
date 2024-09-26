import { users } from "@/constants/tempConst";
import React from "react";
import UserCard from "./UserCard";

const Community = () => {
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
    >
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Community;
