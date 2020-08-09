import React from "react"

const About = () => {
  return (
    <div
      className="site-section bg-image overlay bg-dark text-white"
      style={{ backgroundImage: 'url("../images/hero_1.jpg")' }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 text-center testimony">
            <img
              src="../images/person_4.webp"
              alt="Image"
              className="img-fluid w-25 mb-4 rounded-circle"
            />
            <h3 className="mb-4">Jerome Jensen</h3>
            <blockquote>
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                rem soluta sit eius necessitatibus voluptate excepturi beatae ad
                eveniet sapiente impedit quae modi quo provident odit molestias!
                Rem reprehenderit assumenda”
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
