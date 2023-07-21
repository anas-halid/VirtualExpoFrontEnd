import React, { useEffect} from 'react';

export default function Livechat() {
   
  

  
    useEffect(() => {
      const script = document.createElement('script')
      script.src = 'https://static.elfsight.com/platform/platform.js'
     
      script.defer = true
      document.body.appendChild(script)
    }, [])
  
    return (
      <h2><div className="elfsight-app-f28709fc-7bd9-459a-bc9c-027973b581e6"></div></h2>
    )
  }

  
