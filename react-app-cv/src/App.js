import './App.css';
import { MyPhoto } from './components/myPhoto';
import { Contacts } from './components/contacts';
import { Exp } from './components/expirience';
import { Name } from './components/name';

function App() {
  return (
    <div className="container">
      <MyPhoto />
      <Name />
      <div className="info">
        <Contacts />
        <Exp />
      </div>
    </div>
  );
}

export default App;
