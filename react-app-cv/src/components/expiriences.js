import { useState } from 'react';
import { Expirience } from './expirience';
import { Form2 } from './formV2';

export function Expiriences() {
  const [allPlaceOfExp, setAllPlaceOfExp] = useState([
    {
      name: 'Vinnytsia National Agrarian University',
      dates: 'from 2016 - to 2019',
      title: "Mechanical engineering, master's degree",
      link: 'https://vsau.org/',
      descLink: 'vsau.org',
    },
    {
      name: 'Technological and Industrial Professional College of VNAU',
      dates: 'from 2012 - to 2016',
      title: "Mechanical engineering, bachelor's degree",
      link: 'http://tpk-vnau.org',
      descLink: 'tpk-vnau.org',
    },
  ]);

  function addNewPlace(newPlace) {
    setAllPlaceOfExp([...allPlaceOfExp, newPlace]);
  }

  function renderPlace() {
    return allPlaceOfExp.map((item) => {
      return (
        <Expirience
          key={item.link}
          name={item.name}
          dates={item.dates}
          title={item.title}
          link={item.link}
          descLink={item.descLink}
        />
      );
    });
  }

  return (
    <>
      {renderPlace()}
      <Form2 onAddPlace={addNewPlace} />
    </>
  );
}
