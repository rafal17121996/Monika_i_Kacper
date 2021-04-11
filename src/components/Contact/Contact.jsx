import React from "react";
import bemCssModules from "bem-css-modules";

import { default as ContactStyles } from "./Contact.module.scss";

const style = bemCssModules(ContactStyles);
import img from "../../assets/hands.jpeg";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundImage: `url(${img})`,
      }}
      className={style("")}
    >
      <h1 className={style("title")}>Kontakt</h1>
      <div className={style("wrapper")}>
        <div className={style("section")}>
          <img src="https://img.icons8.com/ios-filled/50/000000/bride.png" />
          <h2>Panna Młoda</h2>
          <p>
            Monika Czerwińska <br />
            Tel. 690 006 924
          </p>
        </div>

        <div className={style("section")}>
          <img src="https://img.icons8.com/ios/50/000000/groom.png" />
          <h2>Pan Młody</h2>
          <p>
            Kacper Łyszczarz
            <br />
            Tel. 785 223 556
          </p>
        </div>
      </div>
      <div className={style("wrapper")}>
          <div className={style("section")}>
          <img src="https://img.icons8.com/ios/50/000000/groom.png" />
          <h2>Świadek</h2>
          <p>
            Przemek Czerwiński
            <br />
            Tel. 601 828 971
          </p>
        </div>

        <div className={style("section")}>
          <img src="https://img.icons8.com/ios/50/000000/groom.png" />
          <h2>Świadek</h2>
          <p>
            Radek Grzybowski
            <br />
            Tel. 726 649 845
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
