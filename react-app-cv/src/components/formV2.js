import { useState } from 'react';
import { RenderExp } from './renderExp';

export function Form2() {
  const [name, setName] = useState('');
  const [dates, setDates] = useState('');
  const [degree, setDegree] = useState('');
  const [link, setLink] = useState('');

  return (
    <div className="form">
      <label htmlFor="name">Name of place</label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <br />

      <label htmlFor="dates">Date</label>
      <br />
      <input
        type="text"
        id="dates"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
      ></input>

      <br />

      <label htmlFor="degree">Degree</label>
      <br />
      <input
        type="text"
        id="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      ></input>

      <br />

      <label htmlFor="link">Link</label>
      <br />
      <input
        type="text"
        id="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      ></input>

      <br />
      <button>add</button>
      <RenderExp name={name} dates={dates} degree={degree} link={link} />
    </div>
  );
}
