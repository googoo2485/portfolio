import React from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';



const page2 = () => {
    return (
        <div className="page-2">
            <div className="container-fluid">
                  <div className="page-1-content">
            <ButtonBack className="to-top">
            <span className="fa fa-angle-double-up" aria-hidden="true"></span>
            </ButtonBack>

            <ButtonNext className="to-bottom">
            <span className="fa fa-angle-double-down" aria-hidden="true"></span>

            </ButtonNext>
            </div>
        </div>
        </div>
    )
}

export default page2
