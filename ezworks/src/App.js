import ezlogo from "./assets/image.png"
import "./App.css"
import Services from "./Services";
import FormComponent from "./FormComponent";

function App() {
  return (
    <div className="main-content">
      <div className="text-content">
      <img src={ezlogo} alt="ez logo"/>
      <h1>Suite Of Business Support Services</h1>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      {/* <input type="email"/> */}
      <FormComponent/>
      </div>
      <Services/>
    </div>
  );
}

export default App;
