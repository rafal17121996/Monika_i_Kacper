import React, { useState } from 'react'
import bemCssModules from "bem-css-modules";
import firebase from "../../firebase";
import { v4 as uuidv4} from 'uuid'

import { default as MusicStyles } from "./Music.module.scss";

const style = bemCssModules(MusicStyles);

const Music = () => {
    const [state, setState] = useState({
        name: "",
        artist: "",
      });
      const [errors, setErrors] = useState("");
 

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = db.collection("monika").add({
          title: state.name,
          name: state.artist
        });  
        setState({
        name: "",
        artist: "",
        });
    }

    const onInputChange = (event) => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value,
        });
      };
    return (
        <div className={style("")}>
            <h1  className={style("title")}>Dodaj piosenkę</h1>
            <form onSubmit={handleOnSubmit}>
            <input
            className={style("input")}
            placeholder="Podaj nazwę piosenki"
            name="name"
            type="text"
            value={state.name}
            onChange={onInputChange}
          />
            <input
            className={style("input")}
            placeholder="Podaj wykonawcę"
            name="artist"
            type="text"
            value={state.artist}
            onChange={onInputChange}
          />
                <button>Dodaj</button>
            </form>
        </div>
    )
}

export default Music
