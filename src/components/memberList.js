import Member from "./member";
import DeleteMembers from "./deleteMembers";
import { useState } from "react";

export default function MemberList({
  members,
  onDeleteMember,
  deleteMembers,
}) {
  const [activeMembers, setActiveMembers] = useState({});

  const isDeleteVisible = Object.values(activeMembers).some((v) => v === true);
  return (
    <div>
      <p>
        {members.map((member) => (
          <Member
            key={member.id}
            id={member.id}
            name={member.name}
            onDelete={onDeleteMember}
            isActive={Boolean(activeMembers[member.id])}
            setActive={() =>
              setActiveMembers((members) => {
                const isActive = Boolean(activeMembers[member.id]);
                return { ...members, [member.id]: !isActive };
              })
            }
          ></Member>
        ))}
        {isDeleteVisible && (
          <DeleteMembers onDeleteMembers={() => deleteMembers(activeMembers)} />
        )}
      </p>
    </div>
  );
}
