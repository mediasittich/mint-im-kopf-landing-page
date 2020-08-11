import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ServiceSection from "../components/services"
import AboutSection from "../components/about"
import FeaturesSection from "../components/features"
import Pricing from "../components/pricing"
import ReviewsSection from "../components/reviews"
import ContactSection from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ServiceSection />
    <AboutSection />
    <FeaturesSection />
    <Pricing />
    <ReviewsSection />
    {/* <ContactSection /> */}
  </Layout>
)

export default IndexPage
