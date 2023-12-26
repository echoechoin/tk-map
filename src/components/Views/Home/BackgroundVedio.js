import React, { useState, useEffect } from 'react'
import requireAsset from "../../../assets/assets"
import styled from "@emotion/styled"
import Parallax from 'parallax-js'

const Video = styled('video')`
  width: 100%;
  transition: opacity 2s;
  opacity: ${props => props.videoLoaded ? 1 : 0};
  
  @media (max-width: ${props => props.theme.breakpoints.values.lg}px) {
    width: auto;
    height: 100%;
    float: right;
  }
`;

const Container = styled('div')`
  position: fixed; // 固定定位，不会影响其他元素的布局
  top: -4%;
  right: -4%;
  bottom: -4%;
  left: -4%;
  z-index: -1;
`;

const BackgroundVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  /**
   * useEffect 的两个参数：
   * @param EffectCallback 回调函数，这个函数会在组件挂载后执行
   * @param DependencyList useEffect的依赖项，当依赖项发生变化时，useEffect会重新执行。
   *                       如果没有第二个参数，那么useEffect会在每次组件更新后执行。
   * @return 返回一个函数，这个函数会在组件卸载时执行
   * */
  useEffect(() => {
    const container = document.getElementById('bgv-container');
    const instance = new Parallax(container);
    return () => instance.destroy();
  }, []);

  return (
    <Container id='bgv-container'>
      <Video
        data-depth="0.1" // parallax effect
        muted autoPlay loop
        onCanPlay={() => {setVideoLoaded(true)}}
        videoLoaded={videoLoaded}
      >
        <source src={requireAsset('./videos/mainmenu.webm')} type='video/webm' />
      </Video>
    </Container>
  );
};

export default BackgroundVideo
