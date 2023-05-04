import { useState } from 'react';

export function Form2({ onAddPlace }) {
  const [name, setName] = useState('');
  const [dates, setDates] = useState('');
  const [degree, setDegree] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newPlace = {
      name: name,
      dates: dates,
      title: degree,
      link: link,
      descLink: link,
    };
    onAddPlace(newPlace);
    setName('');
    setDates('');
    setDegree('');
    setLink('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name of institution</label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <label htmlFor="dates">Dates of studying</label>
      <br />
      <input
        type="text"
        id="dates"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
      />

      <br />

      <label htmlFor="degree">Degree and major</label>
      <br />
      <input
        type="text"
        id="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />

      <br />

      <label htmlFor="link">Link to website</label>
      <br />
      <input
        type="text"
        id="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <br />
      <button type="submit">add</button>
    </form>
  );
}
