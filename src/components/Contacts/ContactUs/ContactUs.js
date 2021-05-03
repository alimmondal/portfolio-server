import React from 'react';
// import './ContactUs.css';
const ContactUs = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="">
               <div className="section-header mb-3">
                    {/* <h5 className="text-primary">Contact</h5> */}
                    <h2>Always  connect with us</h2>
               </div>
               <div className="">
                   <form action="">
                       <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mb-3">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group mb-3">
                           <textarea name="" className="form-control" id="" cols="30" rows="6" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-primary"> Send Message </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};



export default ContactUs;