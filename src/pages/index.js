import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ServiceSection from "../components/services"
import AboutSection from "../components/about"
import FeaturesSection from "../components/features"
import Pricing from "../components/pricing"
import TestimonialsSection from "../components/testimonials"
import ContactSection from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ServiceSection />
    <AboutSection />
    <FeaturesSection />
    {/* <Pricing /> */}
    {/* <TestimonialsSection /> */}
    {/* <ContactSection /> */}
  </Layout>
)

export default IndexPage
