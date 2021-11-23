import Header from './header';
import Search from './search';
import NewMember from './newMember';
import '../App.css';
import { useState } from "react";
import { members } from '../data.js';
import MemberList from './memberList';

function App() {
  const [memberName, setMemberName] = useState("");

  const searchMemberResult = !memberName
    ? members : members.filter(member =>
      (member.name.toLowerCase()).includes(memberName.toLowerCase())
    );
  return (
    <div className="Container">
      <div className="LeftPadding" >
        <Header />
        <div className="TitleStyle">
          <Search memberName={memberName}
            onMemberNameChange={setMemberName} />
          <MemberList members={searchMemberResult} />
          <NewMember />
        </div>
      </div>
    </div>
  );
}


export default App;
