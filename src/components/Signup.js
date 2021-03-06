import React from 'react'

function Signup() {
    return (
        <form className="signup-form">
            <span className="login-signup-header">Log In</span>
            <div className="field">
                <input type="text" placeholder="Username" required />
            </div>
            <div className="field">
                <input type="email" placeholder="Email" required />
            </div>
            <div className="field">
                <input type="password" placeholder="Password" required />
            </div>
            <div className="field">
                <input type="password" placeholder="Confirm Password" required />
            </div>
            <div className="field">
                <button>Sign Up</button>
            </div>
        </form>
    )
}

export default Signup
