import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const Wrapper = styled.footer`
padding: 100px 0;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`

const Container = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin-top: 30px;
`

const Img = styled.img`
  width: 30px;
`

const Link = styled.a`
  opacity: 1;
  transition: 0.15s all;
  &:hover {
    opacity: 0.5;
  }
`

const Footer = ({ data: { loading, error, socials } }) => {
  if (error) {
    return (
      null
    )
  }
  if (!loading && socials) {
    return (
      <Wrapper>
        <Link href='mailto:heeey@fluuu.id'>heeey@fluuu.id</Link>
        <Container>
          {socials.map(s => (
            <Link key={s.link} href={s.link} target='_blank'>
              <Img src={s.logo.url} />
            </Link>
          ))}
        </Container>
      </Wrapper>
    )
  }
  return (
    null
  )
}

const query = gql`
{
  socials {
    link
    logo {
      url
    }
  }
}
`

export default graphql(query)(Footer)
