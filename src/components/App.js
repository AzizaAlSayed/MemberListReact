import Header from './header';
import Search from './search.js';
import MemberList from './memberList.js';
import NewMember from './newMember.js';

import '../App.css';

function App() {
  return (
    <div className="Container">
      <div className="LeftPadding" >
        <Header />
        <div className="TitleStyle">
          <Search />
          <MemberList name="Carolien Bloeme" />
          <MemberList name="Sun Jun" />
          <MemberList name="Song Bao" />
          <MemberList name="Olivia Arribas" />
          <MemberList name="Bonginkosi Mdladlana" />
          <MemberList name="Ariana Belomestnykh" />
          <MemberList name="Jacqueline Likoki" />
          <NewMember />
        </div>
      </div>
    </div>
  );
}


export default App;
