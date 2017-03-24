import { h, render, Component } from 'preact';

export default class HeroSlider extends Component {
  render() {
    return <section className='hero-section'>
      <div className='block'>
        <div className='active-slide'>
          <img src='' className='img-responsive' alt='slider-img'/>
        </div>

        <div className='slides-container'>
          <div className='siderbar-item'>
            <img src='' className='img-responsive' alt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='' className='img-responsive' alt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='' className='img-responsive' alt='sidebar-img'/>
          </div>

          <div className='siderbar-item'>
            <img src='' className='img-responsive' alt='sidebar-img'/>
          </div>
        </div>

      </div>
    </section>;
  }
}
