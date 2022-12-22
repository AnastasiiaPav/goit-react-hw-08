import { Link } from "react-router-dom";

const Home = ( ) => {
    return(
        <div>
            <h2>Phonebook applicatiion</h2>
            <p>Posible:</p>
            <li>Add contacts ✏</li>
            <li>Remove contacts❌</li>
            <li>Filter contacts by name🆒</li>

            <li> <Link to={'/login'}>Sign in</Link></li>
            <li><Link to={'/register'}>Sign up</Link></li>
        </div>
    )
}

export default Home