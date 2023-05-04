import './App.css';
import { Contacts } from './components/contacts';
import { Counter } from './components/counter';
import { Expirience } from './components/expirience';
// import { Form2 } from './components/formV2';
import { MyPhoto } from './components/myPhoto';
import { Name } from './components/name';
import { RenderExp } from './components/renderExp';

function App() {
  return (
    <div className="container">
      <Counter />

      <MyPhoto />

      <Name />

      <div className="info">
        <Contacts />
        <div>
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

          <RenderExp />
        </div>
      </div>
    </div>
  );
}

export default App;
