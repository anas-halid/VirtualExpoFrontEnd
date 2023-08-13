import React, { useState, useEffect } from 'react';


function Login() {

    const [Login, setLogin] = useState('');
    const [Password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [user, set] = useState('');
  
  
    const handleLogin = async () => {
      const response = await fetch('https://virtual-expo-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Login, Password })
      });
      const data = await response.text();
      setMessage(data);
    };

   
  
    return (
        
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p style={{color: "white", backgroundColor: "#9834ec"}} ><b>Exhibitor Info : </b><br></br><hr></hr><b>{message}</b><hr></hr> Contact the exhibitor administrator (Anas Halideen) at [anashalid--n@gmail.com] if you'd like to make some changes or have queries.</p>
            <br></br>
            <br></br>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-6xl font-semibold text-center text-black-700 ">
               Log In 
            </h1>
       
              
                    
                        Login
                    
                    <input type="text"  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Login" value={Login} onChange={e => setLogin(e.target.value)} />
             
                    
                        Password
                   
                    <input type="password" placeholder="Password" value={Password} onChange={e => setPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            
            
                
                    <button  onClick={handleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                 
             
               
            
        </div>
        
    </div>



      
       
      
       
   

        
        
        
      
    );
  }
    

export default Login;