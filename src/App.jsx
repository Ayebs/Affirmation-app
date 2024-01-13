import "./App.css";
import Unicorn from "../src/assets/unicorn.jpg";

function App() {

  
  return (
    <div>
      <h3>Affirmations chez Ayebs</h3>
      <div>
        <img
          src={Unicorn}
          alt="Unicorn"
          style={{ width: "300px", height: "300px", borderRadius: "6px" }} />
      </div>
      <div className="btns">
        <button type="button">New affirmation</button>
        <button type="button">Translate</button>
      </div>
    </div>
  );
}

export default App;
