import React from 'react'
import styled from 'styled-components'
import Scroll from '../../assets/scroll.svg'

const Wrapper = styled.section`
  height: 100vh;
`

const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1000;
  overflow: hidden;
`

const ArrowLabs = styled.a`
  bottom: 5%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  width: 26px;
  height: 26px;
  display: block;
  background: url(${Scroll});
  background-size: cover;
`

const Splash = () => (
  <Wrapper>
    <Video loop autoPlay playsInline muted>
      <source src='/assets/img/03.mp4' type='video/mp4' />
    </Video>
    <ArrowLabs />
  </Wrapper>
)

export default Splash
