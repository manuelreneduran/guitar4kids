import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Question from "../components/FAQ/Question"
import Title from "../components/Title"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout home={false} className="faq">
      <SEO title="faq" description="faq page" />
      <Hero home={false} img={data.defaultBcg.childImageSharp.fluid}>
        <Container className="text-center faq__hero" fluid>
          <Row>
            <Col>
              <h1>FAQ</h1>
            </Col>
          </Row>
        </Container>
      </Hero>
      <Container className="mt-4">
        <Row style={{ width: "100%" }}>
          <Col>
            <Title title="Frequently Asked Questions" />
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col>
            {data.allContentfulFaqQuestion.nodes.map(ele => (
              <Question
                key={ele.question}
                question={ele.question}
                answer={ele.answer.answer}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "pages/faq/hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    allContentfulFaqQuestion {
      nodes {
        answer {
          answer
        }
        question
      }
    }
  }
`
