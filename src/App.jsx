import "./App.css";
import { useCustomContext } from "./context";
import { Link } from "react-router-dom";

function App() {
   const { role } = useCustomContext();

   return (
      <div>
         <h1>HomePage</h1>
         {role === "admin" && <h1>{role}</h1>}
         <Link to="/login">Login</Link>
      </div>
   );
}

export default App;
