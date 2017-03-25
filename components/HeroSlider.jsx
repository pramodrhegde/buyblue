import { h, render, Component } from 'preact';

import '../sass/slider.scss';

export default class HeroSlider extends Component {
  render() {
    return <section className='hero-section'>
      <div className='block'>
        <div className='active-slide'>
          <a href='javascript:void(0);' className='controls prev'></a>
          <img src='../assets/brooke-cagle-38255.jpg' alt='slider-img'/>
          <a href='javascript:void(0);' className='controls next'></a>
        </div>

        <div className='slides-container'>
          <div className='siderbar-item active-slide'>
            <img src='../assets/brooke-cagle-38255.jpg' alt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='../assets/feet-1840619_1280.jpg' lt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='../assets/toa-heftiba-134565-min.jpg' alt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='../assets/william-stitt-151784-min.jpg' alt='sidebar-img'/>
          </div>
        </div>

      </div>
    </section>;
  }
}
