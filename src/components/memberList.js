import Member from "./member";
import DeleteMembers from "./deleteMembers";

export default function MemberList({
  members,
  onDeleteMember,
  checkMemberDelete,
  deleteMembers,
  setActive,
  isActive,
}) {
  return (
    <div>
      <p>
        {members.map((member) => (
          <Member
            key={member.id}
            id={member.id}
            name={member.name}
            onDelete={onDeleteMember}
            isActive={isActive}
            setActive={() => setActive(!isActive)}
            deleteMember={checkMemberDelete}
          ></Member>
        ))}
        {isActive && <DeleteMembers onDeleteMembers={deleteMembers} />}
      </p>
    </div>
  );
}
