import React from "react";

class Products extends React.Component {
 render() {
   return (
     <div className="products">
         <div className="product-content">
             <h2>What do we have?</h2>
             <p>We got stuff</p>
         </div>
         <div className="container product-services">
             <div className="row justify-content-between">
                 <div className="card border-dark col-lg-3 col-md-6 mr-auto">
                     <div className="card-body text-dark">
                         <h4 className="card-title">Cut of claws</h4>
                         <p className="card-text">To prevent your cat to cut you in half, we provide the best service ever for cutting the claws of your cat</p>
                     </div>
                     <div className="card-footer bg-transparent border-danger">15€</div>
                 </div>
                 <div className="card border-dark col-lg-3 col-md-6 mr-auto">
                     <div className="card-body text-dark">
                         <h4 className="card-title">Grooming</h4>
                         <p className="card-text">Because your cat deserves the best, we provide an awesome grooming experience even for long or short hair</p>
                     </div>
                     <div className="card-footer bg-transparent border-danger">50€(Short) 70€(Long)</div>
                 </div>
                 <div className="card border-dark col-lg-3 col-md-6 mr-auto">
                     <div className="card-body text-dark">
                         <h4 className="card-title">Nail polish</h4>
                         <p className="card-text">You want your cat to be stylish ? This is the best for your cat</p>
                     </div>
                     <div className="card-footer bg-transparent border-danger">25€</div>
                 </div>
                 <div className="card border-dark col-lg-3 col-md-6 mr-auto">
                     <div className="card-body text-dark">
                         <h4 className="card-title">Massage</h4>
                         <p className="card-text">You think your cat has a stressed life ? This is what you need ! A massage service provided by the best</p>
                     </div>
                     <div className="card-footer bg-transparent border-danger">30€</div>
                 </div>
             </div>
         </div>

     </div>
   );
 }
}

export default Products