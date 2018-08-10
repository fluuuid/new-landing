import React, {Component} from 'react'
import styled from 'styled-components'
import Visible from 'react-on-screen'
import {media} from '../../styles/media'
import ArrowRight from '../../assets/right_arrow.svg'

const Wrapper = styled.li`
  width: 100%;
  height: 230px;
  display: block;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  ${media.sm`
    width: calc(100% / 2);
    height: 250px;
  `}

  ${media.md`
    width: calc(100% / 3);
    height: 350px;
  `}
`

const Image = styled.div`
  background-image: url(${props => props.src});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  transform:  rotateZ(0);
  transition: 0.25s ease-in-out;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    pointer-events: none;
    transform-origin: 0 bottom;
    transition: 0.15s all ease-in-out;
    content: '';
    z-index: 1;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    pointer-events: none;
    transform-origin: 0 bottom;
    transition: 0.15s all ease-in-out;
    content: '';
  }

  ${media.md`
    &:after {
      transform: scaleY(${props => props.show ? 1 : 0});
    }
  `}
`

const Arrow = styled.div`
  display: inline;
  background-image: url(${ArrowRight});
  width: 25px;
  height: 25px;
  background-size: contain;
  transition: 0.3s ease 0.1s;
  align-self: center;
  margin-top: 20px;

  ${media.md`
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(20px)'};
    opacity: ${props => props.show ? 1 : 0};
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  width: 100%;
  transition: all .2s;
  ${media.md`
    opacity: ${props => props.show ? 1 : 0};
  `}
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: .4s opacity ease;
  transition-delay: ${props => `${(props.order % 1) * 0.15}s`};

  ${media.sm`
    transition-delay: ${props => `${(props.order % 2) * 0.15}s`};
  `}

  ${media.md`
    transition-delay: ${props => `${(props.order % 3) * 0.15}s`};
  `}

`

const FWA = styled.a`
  text-indent: -666em;
  position: absolute;
  right: 0;
  background-image: url('/assets/img/assets/fwa-top-right.png');
  width: 100px;
  height: 100px;
  z-index: 200;
`

const Awwwards = styled.a`
  background-image: url("../img/assets/awwwards_sotd_black_left.png@2x.png");
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
  height: 135px;
  background-size: 90px 135px;
  background-repeat: no-repeat;
  z-index: 200;
`

const Title = styled.h2`
  font-size: 2.4rem;
  transition: all .2s ease;
  ${media.md`
    transform: translate( 0, ${props => props.show ? 0 : '-20px'} );
  `}
`

const Description = styled.h3`
  font-size: 1.8rem;
  transition: all .2s ease;
  ${media.md`
    transform: translate( 0, ${props => props.show ? 0 : '20px'} );
  `}
`

export default class extends Component {
  state = {
    showDetails: false
  }

  onOver = () => {
    this.setState({showDetails: true})
  }

  onOut = () => {
    this.setState({showDetails: false})
  }

  render () {
    const { showDetails } = this.state
    const {
      url,
      image,
      title,
      description,
      fwa,
      awwwards,
      index
    } = this.props

    return (
      <Wrapper key={title} onMouseOver={this.onOver} onMouseOut={this.onOut}>
        <Visible partialVisibility style={{width: '100%', height: '100%'}} once>
          <Container order={index}>
            {fwa && <FWA href={fwa} target='_blank' />}
            {awwwards && <Awwwards href={awwwards} target='_blank' />}
            <a href={url} target='_blank'>
              <Image show={showDetails} src={`https://media.graphcms.com/compress/${image.handle}`} />
              <Content show={showDetails}>
                <Title show={showDetails}>{title}</Title>
                <Description show={showDetails}>{description}</Description>
                <Arrow show={showDetails} />
              </Content>
            </a>
          </Container>
        </Visible>
      </Wrapper>
    )
  }
}
