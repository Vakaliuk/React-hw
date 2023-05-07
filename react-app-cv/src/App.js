import './App.css';
import { Contacts } from './components/contacts';
import { Expirience } from './components/expirience';
import { MyPhoto } from './components/myPhoto';
import { Name } from './components/name';
import { Expiriences } from './components/expiriences';
import { Repos } from './components/repo';

function App() {
  return (
    <div className="container">
      <MyPhoto />

      <Name />

      <div className="info">
        <Contacts />
        <div className="education">
          <h2 className="section-title">Education</h2>

          <hr />
          <Expirience
            name="'Robot_dreams'"
            dates="from 2022 - now"
            title="Web-developing, JavaScript,
                Frontend"
            link="https://robotdreams.cc/"
            descLink="robotdreams.cc"
          />

          <Expiriences />
        </div>
        <Repos />
      </div>
    </div>
  );
}

export default App;
