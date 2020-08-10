import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      strapiReviews {
        title
        review {
          id
          Title
          Quote
          Name
          Description
        }
      }
    }
  `)
  const reviewsList = data.strapiReviews.review.map(rev => {
    return (
      <div className="card" key={rev.id}>
        <div className="card-body">
          <h5 className="card-title">{rev.Title}</h5>
          <p className="card-text">"{rev.Quote}"</p>
          <p className="card-text">
            <small>
              {rev.Name}
              <br />
              <span className="text-muted">{rev.Description}</span>
            </small>
          </p>
        </div>
      </div>
    )
  })

  return (
    <div className="testimonials-section" id="testimonials-section">
      <div className="container pb-5">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="section-title">{data.strapiReviews.title}</h2>
          </div>
        </div>
        <div className="card-deck">{reviewsList}</div>
      </div>
    </div>
  )
}

export default Testimonials
