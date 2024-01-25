import { useState } from 'react'
import './authentication.scss'


const Authentication = () => {

    const [error, setError] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (

        <div className='login'>
            <form onSubmit={handleLogin}>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button type='submit'>Login</button>
                {error && <span>Невівний email або пароль!</span>}
            </form>
        </div>

    )
}

export default Authentication