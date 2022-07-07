import {useState} from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false)

  const submit = async e => {
    e.preventDefault();

    await axios.post('http"//localhost:8000/api/register',{
      name, email, password
    });
    setNavigate(true)
  }
  if (navigate) {
    return <Navigate to="/login" />;
  }

    return <main className="form-signin">
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>

      <div className="form-floating">
        <input className="form-control" placeholder="Name"
          onClick={e => setName(e.target.value)}
        />
        <label>Name</label>
      </div>

      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    onClick={e => setEmail(e.target.value)}

        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    onClick={e => setPassword(e.target.value)}

        />
        <label for="floatingPassword">Password</label>
      </div>
  
      
      <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
}