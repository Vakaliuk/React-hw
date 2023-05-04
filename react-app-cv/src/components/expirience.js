export function Expirience(props) {
  return (
    <div className="extra-section education" id="third-section">
      <ul className="ed-list">
        <li className="ed-item">
          <p>
            <span>Name of institution:</span> {props.name}
          </p>
          <p>
            <span>Dates of studying:</span> {props.dates}
          </p>
          <p>
            <span>Degree and major:</span> {props.title}
          </p>
          <p>
            <span>Link:</span> <a href={props.link}>{props.descLink}</a>
          </p>
        </li>
      </ul>
    </div>
  );
}
