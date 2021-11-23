import Header from './header';
import Search from './search';
import Member from './member';
import NewMember from './newMember';
import '../App.css';
import { members } from '../data.js';
import MemberList from './memberList';

export default function App() {
  return (
    <div className="Container">
      <div className="LeftPadding" >
        <Header />
        <div className="TitleStyle">
          <Search />
          <MemberList members={members} />
          <NewMember />
        </div>
      </div>
    </div >
  );
}