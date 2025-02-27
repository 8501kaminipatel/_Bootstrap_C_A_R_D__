
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



const Card = () => {
    return (
        <>
            <div className="container d-flex align-items-center justify-content-center" style={{
               border:"1px solid Black", width: '80%'
            }}>
                <div className="row w-80 align-items-center bg-Light mx-5">
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="fw-bold">Hi, Hi, I'm John Deo.</h1>
                        <p className="text-muted fs-5">
                            I'm a freelance web developer from London, specializing in converting custom web designs into Bootstrap templates. I also create YouTube videos and write a blog.
                        </p>
                        <button className="btn btn-primary p-2" aria-controls="example-fade-text">I'm Available</button>

                        <div className="mt-3">
                            <i className="bi bi-facebook mx-2 fs-4"></i>
                            <i className="bi bi-twitter mx-2 fs-4"></i>
                            <i className="bi bi-instagram mx-2 fs-4"></i>
                            <i className="bi bi-github mx-2 fs-4"></i>

                        </div>
                    </div>
                    <div className="col-md-6 text-center p-4" >
                        <img src="https://canfixit.ca/wp-content/uploads/2020/06/testi-3.jpg" className="img-fluid rounded-circle w-75" alt="John Deo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card







