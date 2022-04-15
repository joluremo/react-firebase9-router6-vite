import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserProvider'

export const Register = () => {

    const [email, setEmail] = useState('joseluis@retis.pe');
    const [password, setPassword] = useState('1234567890');

    const { registerUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('procesando form:',email, password);
        try {
            await registerUser(email, password)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

  return (
      <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" 
                placeholder="Ingrese email" 
                value={email}
                onChange={ e => setEmail(e.target.value) }
            />
            <input type="password" 
                placeholder="Ingrese password" 
                value={password}
                onChange={ e => setPassword(e.target.value) }
            />
            <button type="submit">Registrar</button>
        </form>
      </>
  )
}
