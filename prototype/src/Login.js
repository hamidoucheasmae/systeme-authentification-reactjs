import React, { useState } from "react";

const Login =()=>{

  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(null);

    return(
        <div>
           Login  <br /><br />
           <div>
           username <br/>
           <input
           type="text"/>   
           </div>

           <div>
           password <br/>
           <input
           type="password"/>   
           </div> <br/>

{error && <div className="error">{Error}</div>}
<input type="button" value="Login"/>


        </div>
   

    )
}
export default Login;