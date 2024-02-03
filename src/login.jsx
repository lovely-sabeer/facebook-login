import "./login.css"

function Login(){
    return(
        <div className="over-all">
            <h1 className="brand"><img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" /></h1>
            <div className="box1">
                <h3>Log in to Facebook</h3>
                <input type="text" className="input" placeholder="Email address or phone number"/>
                <input type="password"  className="pass" placeholder="Password"/>
                <button className="btn-login">Log in</button>
                <div className="last-line">
                    <a href="">Forgotten account?</a><br />
                    <a href="">Sign up for Facebook</a>
                </div>
            </div>
        </div>
    )
}

export default Login
