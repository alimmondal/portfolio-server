import React from "react";
import website from "../../../images/web.png";
import seo from "../../../images/seo.png";
import speed from "../../../images/sp.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const servicesData = [
  {
    name: "Website Development",
    imageURL: website,
    description: "A great design could increase your brand value a lot. We can build a beautiful website with top-notch technologies for your any needs.."
  },
  {
    name: "SEO",
    imageURL: seo,
    description: "people search online for services. So, SEO optimized website is very much important to get search engine ranking. We can do that for you as well."
  },
  {
    name: "Speedup Optimization",
    imageURL: speed,
    description: "Speed up optimization is very important. A visitor can feel bored  if your website slow which can decrease traffic in your website"
  },
];

const Services = () => {
  return (
    <div>
      <section className="container mt-5">
        <div className="" >
          <h2 className="text-center">What <span className="text-primary">I Do</span> </h2>
          <hr style={{width:'80px', marginLeft:'490px', height: '2px', color:'blue'}}/>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
            <div className=" row">
                {
                    servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
            </div>
      </section>
    </div>
  );
};

export default Services;