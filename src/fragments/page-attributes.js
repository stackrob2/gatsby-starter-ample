import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on Page {
    id
    title
    seo {
      ...SEO
    }
    sections {
      title
      config {
        text_align
      }
      sections {
        title
        config {
          text_align
        }
        components {
          template

          # Button
          label
          url

          # Content
          body

          # Form
          form

          # Image
          src: image {
            ...FluidImageAttributes
          }
        }
        body
        label
        url
      }
    }
  }
`
