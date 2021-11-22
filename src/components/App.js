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
          <MemberList nameMember="Carolien Bloeme" />
          <MemberList nameMember="Sun Jun" />
          <MemberList nameMember="Song Bao" />
          <MemberList nameMember="Olivia Arribas" />
          <MemberList nameMember="Bonginkosi Mdladlana" />
          <MemberList nameMember="Ariana Belomestnykh" />
          <MemberList nameMember="Jacqueline Likoki" />
          <NewMember />
        </div>
      </div>
    </div>
  );
}


export default App;
