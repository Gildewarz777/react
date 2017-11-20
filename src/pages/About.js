import React from "react";

class About extends React.Component {
 render() {
   return (
     <div className="about">
         <div className="row">
             <div className="about-content col-md-4">
                 <p><strong> Who are we ?</strong> </p>
                 <p>We the best</p>
             </div>
             <div className="about-content col-md-4">
                 <p><strong> Where are we ?</strong> </p>
                 <p>10 rue Sixtius Michel, 75015 Paris, France</p>
             </div>
             <div className="about-content col-md-4">
                 <p><strong> When can you come ?</strong> </p>
                 <p>From Monday to Saturday, between 9AM and 7PM</p>
             </div>
         </div>

     </div>
   );
 }
}

export default About