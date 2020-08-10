import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import ReactMarkdown from "react-markdown"

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

  let reviewsSlider = []
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const reviewsList = data.strapiReviews.review.map(rev => {
    return (
      <article className="card" key={rev.id}>
        <div className="card-body">
          <h5 className="card-title">{rev.Title}</h5>
          <blockquote className="card-text">
            <ReactMarkdown source={rev.Quote} />
          </blockquote>
          <p className="card-text">
            <small>
              {rev.Name}
              <br />
              <span className="text-muted">{rev.Description}</span>
            </small>
          </p>
        </div>
      </article>
    )
  })

  return (
    <div
      className="testimonials-section site-section pb-0"
      id="testimonials-section"
    >
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="section-title">{data.strapiReviews.title}</h2>
          </div>
        </div>
        <Slider ref={slider => (reviewsSlider = slider)} {...settings}>
          {reviewsList}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
        {/* <Slider className="card-deck">{reviewsList}</Slider> */}
      </div>
    </div>
  )
}

export default Testimonials
