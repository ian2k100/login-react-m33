import './App.css';
import { useEffect, useState } from "react";
import { fetchRequest, tokenFetch } from './utils';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    tokenFetch(setUser)
  }, [])


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username, email, password);
    fetchRequest(setUser, username, email, password);
  }


  return (
    <div>
      <h1>{user ? `Welcome ${user}` : "Please Login or Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
      <button type="submit"> Submit </button> 
      </form>
    </div>
  );
}

export default App;
