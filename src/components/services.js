import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FiCheck } from "react-icons/fi"
import IconOne from "../images/undraw_youtube_tutorial.svg"
import IconTwo from "../images/undraw_teaching.svg"
import IconThree from "../images/undraw_teacher.svg"

const Services = () => {
  return (
    <div className="site-section" id="programs-section">
      <Container>
        <Row className="mb-5 justify-content-center">
          <Col
            lg={7}
            className="text-center aos-init"
            data-aos="fade-up"
            data-aos-delay
          >
            <h2 className="section-title">Our Programs</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repellat aut neque! Doloribus sunt non aut reiciendis, vel
              recusandae obcaecati hic dicta repudiandae in quas quibusdam
              ullam, illum sed veniam!
            </p>
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
          <Col
            lg={7}
            className="mb-5 aos-init"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <IconOne className="img-fluid" />
          </Col>
          <Col
            lg={4}
            className="ml-auto aos-init"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h2 className="text-black mb-4">We Are Excellent In Education</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              maxime nam porro possimus fugiat quo molestiae illo.
            </p>
            <div className="d-flex align-items-center custom-icon-wrap mb-3">
              <span className="custom-icon-inner mr-3">
                <FiCheck />
              </span>
              <div>
                <strong className="m-0">22,931 Yearly Graduates</strong>
              </div>
            </div>
            <div className="d-flex align-items-center custom-icon-wrap">
              <span className="custom-icon-inner mr-3">
                <FiCheck />
              </span>
              <div>
                <strong className="m-0">150 Universities Worldwide</strong>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
          <Col
            lg={7}
            className="mb-5 order-1 order-lg-2 aos-init"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <IconTwo className="img-fluid" />
          </Col>
          <Col
            lg={4}
            className="mr-auto order-2 order-lg-1 aos-init"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h2 className="text-black mb-4">Strive for Excellent</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              maxime nam porro possimus fugiat quo molestiae illo.
            </p>
            <div className="d-flex align-items-center custom-icon-wrap mb-3">
              <span className="custom-icon-inner mr-3">
                <FiCheck />
              </span>
              <div>
                <strong className="m-0">22,931 Yearly Graduates</strong>
              </div>
            </div>
            <div className="d-flex align-items-center custom-icon-wrap">
              <span className="custom-icon-inner mr-3">
                <FiCheck />
              </span>
              <div>
                <strong className="m-0">150 Universities Worldwide</strong>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
          <Col
            lg={7}
            className="col-lg-7 mb-5 aos-init"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <IconThree className="img-fluid" />
          </Col>
          <Col
            lg={4}
            className="ml-auto aos-init"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h2 className="text-black mb-4">Education is life</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              maxime nam porro possimus fugiat quo molestiae illo.
            </p>
            <div className="d-flex align-items-center custom-icon-wrap mb-3">
              <span className="custom-icon-inner mr-3">
                <FiCheck />
              </span>
              <div>
                <strong className="m-0">22,931 Yearly Graduates</strong>
              </div>
            </div>
            <div className="d-flex align-items-center custom-icon-wrap">
              <span className="custom-icon-inner mr-3">
                <FiCheck />
              </span>
              <div>
                <strong className="m-0">150 Universities Worldwide</strong>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services
