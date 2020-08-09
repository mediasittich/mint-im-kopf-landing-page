import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const BgImage = styled(BackgroundImage)`
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
`

const Hero = () => {
  const imageData = useStaticQuery(graphql`
    {
      hero: file(relativePath: { eq: "pexels-julia-m-cameron-4143794.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BgImage fluid={imageData.hero.childImageSharp.fluid} fadeIn>
      <HeroContainer fluid>
        <Container className="text-center">
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            molestiae eveniet numquam inventore dicta eos, ducimus eius soluta
            sed itaque.
          </p>
          <Button variant="primary" size="lg" href="#">
            Learn more
          </Button>
        </Container>
      </HeroContainer>
    </BgImage>
  )
}

export default Hero
