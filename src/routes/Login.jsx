import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"


const Login = () => {

  const [email, setEmail] = useState('joseluis@retis.pe');
  const [password, setPassword] = useState('1234567890');

  const { loginUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('procesando form:', email, password);
    try {
      await loginUser(email, password)
      console.log('Usuario logueado');
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email"
          placeholder="Ingrese email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input type="password"
          placeholder="Ingrese password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login