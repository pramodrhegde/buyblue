import { h, render, Component } from 'preact';

import '../sass/brand.scss';

export default class BrandsComponent extends Component {
  render() {
    return <div className='block'>
      <div className='brand-card'>
        <img src='./assets/hanm.png' className='img-responsive' alt='brand-img'/>
      </div>
      <div className='brand-card'>
        <img src='./assets/puma.png' className='img-responsive' alt='brand-img'/>
      </div>
      <div className='brand-card'>
        <img src='./assets/adidas.png' className='img-responsive' alt='brand-img'/>
      </div>
      <div className='brand-card'>
        <img src='./assets/converse.png' className='img-responsive' alt='brand-img'/>
      </div>
      <div className='brand-card'>
        <img src='./assets/boss.png' className='img-responsive' alt='brand-img'/>
      </div>
      <div className='brand-card'>
        <img src='./assets/nike.png' className='img-responsive' alt='brand-img'/>
      </div>
      <div className='brand-card'>
        <img src='./assets/logo.png' className='img-responsive' alt='brand-img'/>
      </div>
      <div className='brand-card more'>
        <a href='javascript:void(0);' className='text-center'>All <br/> brands</a>
        <span className='text-center'>274</span>
      </div>
    </div>;
  }
}
