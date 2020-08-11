import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const About = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     strapiAbout {
  //       title
  //       description
  //     }
  //   }
  // `)
  return (
    <div></div>
    // <section
    //   className="about-section site-section bg-image overlay bg-dark text-white"
    //   style={{
    //     backgroundImage:
    //       'url("http://localhost:8000/static/d98c802666261362e19907293f416401/1a900/e343aad9ebac63613abce7ce767be34b.jpg")',
    //   }}
    // >
    // {/* <div className="container">
    //   <div className="row justify-content-center align-items-center">
    //     <div className="col-md-8 text-center quote">
    //       <h3 className="mb-4">{data.strapiAbout.title}</h3> */}
    //         {/* <img
    //           src="../images/person_4.webp"
    //           alt="Image"
    //           className="img-fluid w-25 mb-4 rounded-circle"
    //         /> */}
    //         {/* <blockquote>
    //           <ReactMarkdown source={data.strapiAbout.description} />
    //         </blockquote>
    //       </div>
    //     </div>
    //   </div>
    // </section> */}
  )
}

export default About
