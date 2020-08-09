import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ServiceSection from "../components/services"
import AboutSection from "../components/about"
import FeaturesSection from "../components/features"
import TestimonialsSection from "../components/testimonials"
import ContactSection from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ServiceSection />
    <AboutSection />
    <FeaturesSection />
    <TestimonialsSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
