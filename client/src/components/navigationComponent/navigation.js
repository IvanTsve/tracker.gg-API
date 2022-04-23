import navigation from './navigation.css';
import { Link } from "react-router-dom";
function Navigation(params) {

    return (
        <>
            <nav className='site-nav'>
                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user/login">Login</Link></li>
                    <li><Link to="/user/register">register</Link></li>
                    <li><Link to="/user">User</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation