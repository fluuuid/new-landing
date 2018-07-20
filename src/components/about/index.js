import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {media} from '../../styles/media'

const Wrapper = styled.div`
  height: 65vmin;
  padding: 0 10vh 0 5vw;
  background: rgba(0, 0, 0, .85);
  flex-direction: column;
  justify-content: center;
  display: none;

  ${media.sm`
    display: flex;
  `}

`

const Paragraph = styled.h2`
  max-width: 50vmax;
  line-height: 2;
  font-size: 2rem;
  padding-left: 5%;
`

const Header = styled.h1`

`

const query = gql`
  {
    pages {
      pageType
      title
      paragraph
    }
  }
`

const About = ({ data: { loading, error, pages } }) => {
  if (error) {
    return (
      null
    )
  }
  if (!loading && pages) {
    if (pages.find(p => p.pageType === 'About')) {
      return (
        <Wrapper>
          <Header>FLUUUID Who?</Header>
          <Paragraph>
            We are a full service consultancy and creative-tech collective striving to create playful and innovative interactive experiences converging art and technology.
          </Paragraph>
        </Wrapper>
      )
    }
  }
  return null
}

export default graphql(query)(About)
