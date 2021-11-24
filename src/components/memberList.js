import Member from "./member";

export default function MemberList({ members }) {
  const membersList = members.map(member =>
    <Member key={member.id} id={member.id} name={member.name} ></Member>);
  return (
    <p> {membersList} </p>
  );
}