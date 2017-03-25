import { h, render, Component } from 'preact';

import '../sass/slider.scss';

export default class HeroSlider extends Component {
  render() {
    return <section className='hero-section'>
      <div className='block'>
        <div className='active-slide'>
          <a href='javascript:void(0);' className='controls prev'></a>
          <img src='../assets/img1.jpg' alt='slider-img'/>
          <a href='javascript:void(0);' className='controls next'></a>
        </div>

        <div className='slides-container'>
          <div className='siderbar-item active-slide'>
            <img src='../assets/img1.jpg' alt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='../assets/img2.jpg' lt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='../assets/img3.jpg' alt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='../assets/img4.jpg' alt='sidebar-img'/>
          </div>
        </div>

      </div>
    </section>;
  }
}
