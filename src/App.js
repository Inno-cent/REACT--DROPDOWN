import { useState } from "react";
import "./App.css";

function App() {
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [infants, setInfants] = useState(0);

  const data = [
    { id: 0, label: "Istanbul, TR (AHL)" },
    { id: 1, label: "Paris, FR (CDG)" },
  ];

  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div className="App">
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <div className="guest--types">
            {`Guests ${adult + children}`}
            {infants > 0 ? ` Infant ${infants}` : null}
            {pets > 0 ? ` Pets ${pets}` : null}
          </div>
          <p className={`icon ${isOpen && "open"}`}>&#8594;</p>
        </div>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          <div className="value--list">
            <div className="value--type">
              <span>Adults</span>
              <span>Age 13+</span>
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdult(adult - 1);
                }}
              >
                -
              </button>
              <p>{adult}</p>
              <button
                onClick={() => {
                  setAdult(adult + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="value--list">
            <div className="value--type">
              <span>Children</span>
              <span>Age 2 - 12</span>
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  setChildren(children - 1);
                }}
              >
                -
              </button>
              <p>{children}</p>
              <button
                onClick={() => {
                  setChildren(children + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="value--list">
            <div className="value--type">
              <span>Infants</span>
              <span>Under 2</span>
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  setInfants(infants - 1);
                }}
              >
                -
              </button>
              <p>{infants}</p>
              <button
                onClick={() => {
                  setInfants(infants + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="value--list">
            <div className="value--type">
              <span>Pets</span>
              <span>Bringing an animal ?</span>
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  setPets(pets - 1);
                }}
              >
                -
              </button>
              <p>{pets}</p>
              <button
                onClick={() => {
                  setPets(pets + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
