import { useState } from "react";
import Member from "./member";
import DeleteMembers from './deleteMembers';

export default function MemberList({ members, onDeleteMember}) {
  const [isActive, setActive] = useState(false);
  const [memberList, setMemberList] = useState(members);
  const membersList = memberList.map(member =>
    <Member key={member.id} id={member.id} name={member.name} onDelete={onDeleteMember} isActive={isActive} setActivation={() => setActive(!isActive)} deleteMember={addCheckMemberDelete}></Member>);

  let deleteMembersArray = [];

  function handleDeleteMembers() {
    setMemberList(memberList.filter(member => !(deleteMembersArray.includes(member.id))));
    deleteMembersArray = [];
  }

  function addCheckMemberDelete(id) {
    if (!deleteMembersArray.includes(id))
      deleteMembersArray.push(id);
    else {
      deleteMembersArray.splice(deleteMembersArray.indexOf(id), 1);
    }
  }

  return (
    <div>
      <p> {membersList} </p>
      <DeleteMembers onDeleteMembers={handleDeleteMembers} />
    </div>
  );
}