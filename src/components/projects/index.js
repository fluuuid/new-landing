import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Project from '../project'

const Wrapper = styled.section``
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: black;
`

const Projects = ({ data: { loading, error, projects } }) => {
  if (error) {
    return (
      <Wrapper><h1>Error loading projects</h1></Wrapper>
    )
  }
  if (!loading && projects) {
    const projectsToSort = [].concat(projects)
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .reverse()
    return (
      <Wrapper>
        <Ul>
          {projectsToSort
            .map((p, index) => (
              <Project {...p} key={p.title} index={index} />
            ))
          }
        </Ul>
      </Wrapper>
    )
  }
  return (
    <Wrapper><h1>Loading projects</h1></Wrapper>
  )
}

const query = gql`
          {
            projects {
              title
              image {
                url
              }
              order
              url
              description
              fwa
              awwwards
            }
          }
          `

export default graphql(query)(Projects)
