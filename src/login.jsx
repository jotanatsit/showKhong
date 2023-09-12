import { useState } from "react";
import { useCustomContext } from "./context";
import { Link } from "react-router-dom";

const LoginForm = () => {
   const { setRole } = useCustomContext();
   const [username, setUsername] = useState("");

   return (
      <>
         <h1>Login</h1>
         <form>
            <input
               type="text"
               name="role"
               id="role"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               onKeyDown={(e) => {
                  if (e.key === "Enter") {
                     e.preventDefault();
                     if (username === "admin") {
                        setRole("admin");
                     }
                  }
               }}
            />
         </form>
         <Link to="/">back</Link>
      </>
   );
};

export default LoginForm;
