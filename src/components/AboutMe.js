import React from "react";
import author from "../mama.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">

                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                        </div>
            
            </div>
            <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading"> about me</h1>
                <p>
                Mama modi had done many work during his bengal election but couldn't beat mamta . After this defeat Mama modi chiling in the Mughal Garden and saying "hagona karona" is the new chinese virus                
                </p>
            </div>
        </div>
        </div>
    )
}

export default AboutMe
