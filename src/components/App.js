import Header from "./header";
import Search from "./search";
import NewMember from "./newMember";
import "../App.css";
import { useState } from "react";
import { members } from "../data";
import MemberList from "./memberList";

export default function App() {
  const [listOfMembers, setListOfMembers] = useState(members);
  const [memberName, setMemberName] = useState("");
  const [isActive, setActive] = useState(false);
  const searchMemberResult = !memberName
    ? listOfMembers
    : listOfMembers.filter((member) =>
      member.name.toLowerCase().includes(memberName.toLowerCase())
    );

  let deleteMembersArray = [];

  function handleAddNewMember(memberName) {
    setListOfMembers((members) => [
      ...members,
      {
        id: listOfMembers.length,
        name: memberName,
      },
    ]);
  }

  function addCheckMemberDelete(id) {
    if (!deleteMembersArray.includes(id)) deleteMembersArray.push(id);
    else {
      deleteMembersArray.splice(deleteMembersArray.indexOf(id), 1);
    }
  }

  function handleDeleteMembers() {
    setListOfMembers(
      searchMemberResult.filter(
        (member) => !deleteMembersArray.includes(member.id)
      )
    );
  }

  function handleDeleteMember(memberId) {
    setListOfMembers(listOfMembers.filter((member) => member.id !== memberId));
  }

  return (
    <div className="Container">
      <div className="LeftPadding">
        <Header />
        <div className="TitleStyle">
          <Search memberName={memberName} onMemberNameChange={setMemberName} />
          <MemberList
            members={searchMemberResult}
            onDeleteMember={handleDeleteMember}
            checkMemberDelete={addCheckMemberDelete}
            deleteMembers={handleDeleteMembers}
            setActive={setActive}
            isActive={isActive}
          />
          <NewMember onAddNewMember={handleAddNewMember} />
        </div>
      </div>
    </div>
  );
}
