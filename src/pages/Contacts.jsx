import React from "react";

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Mykolaiv, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="tel:+380996111940">+38 (099) 611-19-40</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:jeyzik.pro@gmail.com">jeyzik.pro@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
