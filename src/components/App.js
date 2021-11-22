import Header from './header';
import Search from './search.js';
import Member from './member.js';
import NewMember from './newMember.js';
import '../App.css';

function App() {
  return (
    <div className="Container">
      <div className="LeftPadding" >
        <Header />
        <div className="TitleStyle">
          <Search />
          <Member />
          <NewMember />
        </div>
      </div>
    </div>
  );
}


export default App;
