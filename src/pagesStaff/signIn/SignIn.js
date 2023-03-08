import "./signIn.css"

function SignIn(){

    // This is extremely scuffed but is necessary for demo (will all be migrated to Fauna bc this is ASS :/)
    function redirect(user, pw){
       fetch("http://localhost:9000/.netlify/functions/apiv1/login", {
        method: 'POST',
        mode: 'no-cors',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "user": user,
            "pw": pw})
       }).then(res => console.log(res))
    }

    return(
       <div className="container staff">
            <div className="staff-card">
                <h1 className='staff-card-title'>Welcome back</h1>
                <div className='staff-card-content'>
                    <div className='staff-user-box'>
                        <label className='staff-user-label'>Student ID</label>
                        <div className='staff-user'>
                            <input placeholder='Ex: 71621730' id="staff-user"/>
                        </div>
                    </div>
                    <div className='staff-pw-box'>
                        <label className='staff-pw-label'>Password</label>
                        <div className='staff-pw'>
                            <input type={"password"} id="staff-pw"/>
                        </div>
                    </div>
                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tandevin1730@students.esuhsd.org&su=I%20Forgot%20My%20Insane%20Ink%20Password%20:(" target="_blank" rel="noreferrer">Forgot password?</a>

                    <div className='staff-signInBtn'><button id='staff-signInBtn' onClick={
                        ()=> {
                            let user = document.getElementById("staff-user").value
                            let pw = document.getElementById("staff-pw").value
                            redirect(user, pw)
                        }
                    }>Log in</button></div>
                </div>
            </div>
       </div> 
    )
}

export default SignIn;