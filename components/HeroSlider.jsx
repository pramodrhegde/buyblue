import { h, render, Component } from 'preact';

import '../sass/slider.scss';

export default class HeroSlider extends Component {
  render() {
    return <section className='hero-section'>
      <div className='block'>
        <div className='active-slide'>
          <a href='javascript:void(0);' className='controls prev'></a>
          <img src='http://res.cloudinary.com/prazor9/image/upload/v1490442716/img1_tlbgth.jpg' alt='slider-img'/>
          <a href='javascript:void(0);' className='controls next'></a>
        </div>

        <div className='slides-container'>
          <div className='siderbar-item active-slide'>
            <img src='http://res.cloudinary.com/prazor9/image/upload/v1490442716/img1_tlbgth.jpg' alt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='http://res.cloudinary.com/prazor9/image/upload/v1490442716/img2_ykadsu.jpg' lt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='http://res.cloudinary.com/prazor9/image/upload/v1490442723/img3_obaexp.jpg' alt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='http://res.cloudinary.com/prazor9/image/upload/v1490442721/img4_t1ujba.jpg' alt='sidebar-img'/>
          </div>
        </div>

      </div>
    </section>;
  }
}
