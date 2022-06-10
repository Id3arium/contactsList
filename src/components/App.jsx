import React from "react";
import "../../public/styles.css";
import Card from "./Card";
import { contacts } from "../contacts.js/";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((props) => {
        return (
          <Card
            key={props.id}
            name={props.name}
            imgURL={props.imgURL}
            phone={props.phone}
            email={props.email}
          />
        );
      })}
    </div>
  );
}

export default App;
