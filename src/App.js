import "./App.css";
import ColorForm from "./container/ColorForm";
import ColorList from "./container/ColorList";
import Wallet from "./container/Wallet";

function App() {
  return (
    <div className="App">
      <Wallet />
      <ColorList />
      <ColorForm />
    </div>
  );
}

export default App;
