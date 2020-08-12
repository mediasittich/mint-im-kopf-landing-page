import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import ReactMarkdown from "react-markdown"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      strapiReviews {
        section_title
        review_list_item {
          id
          title
          content
          name
          description
        }
      }
    }
  `)

  // Slider settings
  let reviewsSlider = []

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  const reviewsList = data.strapiReviews.review_list_item.map(rev => {
    return (
      <article className="card" key={rev.id}>
        <div className="card-body">
          <h5 className="card-title">{rev.title}</h5>
          <blockquote className="card-text">
            <ReactMarkdown source={rev.content} />
          </blockquote>
          <p className="card-text">
            <small>
              {rev.name}
              <br />
              <span className="text-muted">{rev.description}</span>
            </small>
          </p>
        </div>
      </article>
    )
  })

  return (
    <div
      className="testimonials-section site-section"
      id="testimonials-section"
    >
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="section-title">
              {data.strapiReviews.section_title}
            </h2>
          </div>
        </div>
        <div className="slider-container">
          <Slider ref={slider => (reviewsSlider = slider)} {...settings}>
            {reviewsList}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
