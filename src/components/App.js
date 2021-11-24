import Header from './header';
import Search from './search.js';
import MemberList from './memberList.js';
import NewMember from './newMember.js';
import { members } from '../data';

import '../App.css';

function App() {
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
    </div>
  );
}


export default App;
