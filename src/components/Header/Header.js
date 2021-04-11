import { login, logout } from '../../services/firebase';

import styles from './Header.module.css';

const Header = (props) => {
    return (
    <header className="App-header">
        <h1 className={styles.title}>Followup</h1>
        <ul className={styles.login}>
            {
            props.user ? 
            <>
                <li><strong>{props.user.displayName}</strong></li> 
                <li><img 
               className={styles.avatar} src={props.user.photoURL} alt="avatar"/></li>
                <li className={styles.auth} onClick={logout}>Logout</li>
            </>
            : 
            <>
            <li><img 
            className={styles.avatar} src="blank-avatar.png" alt="avatar"/></li>
            <li className={styles.auth} onClick={login}>Login</li>
            </>
        }
        </ul>
    </header>
    )
}

export default Header;