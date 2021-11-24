import Header from './header';
import Search from './search';
import NewMember from './newMember';
import '../App.css';
import { members } from '../data';
import MemberList from './memberList';
import { useState } from 'react';

export default function App() {
  const [listOfMembers, setListOfMembers] = useState(members);

  function handleAddNewMember(memberName) {
    setListOfMembers(members => [...members, {
      id: listOfMembers.length,
      name: memberName,
    }]);
  }

  return (
    <div className="Container">
      <div className="LeftPadding" >
        <Header />
        <div className="TitleStyle">
          <Search />
          <MemberList members={listOfMembers} />
          <NewMember onAddNewMember={handleAddNewMember} />
        </div>
      </div>
    </div >
  );
}