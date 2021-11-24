import Member from "./member";

export default function MemberList({ members, onDeleteMember }) {
  const membersList = members.map(member =>
    <Member key={member.id} id={member.id} name={member.name} onDelete={onDeleteMember}></Member>)
    ;
  return (
    <p> {membersList} </p>
  );
  return (
    <p> {membersList} </p>
  );
}