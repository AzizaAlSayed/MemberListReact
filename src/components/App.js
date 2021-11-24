import Header from './header';
import Search from './search';
import NewMember from './newMember';
import '../App.css';
import { useState } from "react";
import { members } from '../data';
import MemberList from './memberList';



export default function App() {
  const [listOfMembers, setListOfMembers] = useState(members);
  const [memberName, setMemberName] = useState("");

  const searchMemberResult = !memberName
    ? members : members.filter(member =>
      (member.name.toLowerCase()).includes(memberName.toLowerCase())
    );

  function handleDeleteMember(memberId) {
    setListOfMembers(listOfMembers.filter(member => member.id !== memberId));
  }

  return (
    <div className="Container">
      <div className="LeftPadding" >
        <Header />
        <div className="TitleStyle">
          <Search memberName={memberName}
            onMemberNameChange={setMemberName} />
          <MemberList members={listOfMembers} onDeleteMember={handleDeleteMember} />
          <NewMember />
        </div>
      </div>
    </div >
  );
}