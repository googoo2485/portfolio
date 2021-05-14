import React from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
const page1 = () => {

   const offsetWidth =()=> {
        if (window.document.body.offsetWidth < 768) {
          return <span className="touch-guide">터치하여 계속 보기</span>
        } else {
          return <span className="touch-guide">클릭하여 계속 보기</span>
        }
      };



    return (
        <div className ="page-1">
            <offsetWidth className = "bottom-first"/>
        </div>
    )
}

export default page1;
