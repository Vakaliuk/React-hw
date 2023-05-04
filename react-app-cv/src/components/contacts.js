export function Contacts() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <hr />
      <ul className="contact-list">
        <li className="contact-item">
          <h3>Address</h3>
          <span>Vinnytsia, Ukraine</span>
        </li>
        <li className="contact-item">
          <h3>Phone</h3>
          <span>+38 073 307 00 47</span>
        </li>
        <li className="contact-item">
          <h3>E-mail</h3>
          <a href="mailto:vakatlyuk@gmail.com">vakatlyuk@gmail.com</a>
        </li>
        <li className="contact-item">
          <h3>Linkedin</h3>
          <a href="https://www.linkedin.com/in/ihor-vakaliuk-240571208">
            linkedin.com/in/ihor-vakaliuk
          </a>
        </li>
      </ul>
    </div>
  );
}
