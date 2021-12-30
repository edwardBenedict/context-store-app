import React, {useState} from 'react'
import MailIcon from '../../assets/icons/Mail';
import PasswordIcon from '../../assets/icons/Password';
import style from './Login.module.css'

const Login = () => {
    const [info, setInfo] = useState({email: '', password: ''})

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const  handleSubmit = (e) => {
        e.preventDefault()
        console.log(info)
    }
    return (
        <div className={style.loginWrapper} >
            <div className={style.login} >
                <h2>Login</h2>
                <form style={{display:"flex", flexDirection:"column"}} onSubmit={handleSubmit}>
                    <label htmlFor="name" style={{}}>Email</label>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <MailIcon/>
                    <input required onChange={handleChange} className={style.input} type="text" id="email" name="email" value={info.email} />
                    </div>
                    <label htmlFor="password">Password</label>
                    <div style={{display:"flex",  alignItems:"center"}}>
                    <PasswordIcon/>
                    <input required onChange={handleChange} className={style.input} type="password" id="password" name="password" value={info.password} />
                    </div>
                    <button type="submit" className={style.submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
