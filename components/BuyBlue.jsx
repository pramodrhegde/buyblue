import { h, render, Component } from 'preact';
import Navbar from './Navbar.jsx';
import HeroSlider from './HeroSlider.jsx';
import ProductsComponent from './ProductsComponent.jsx';
import BrandsComponent from './BrandsComponent.jsx';
import Footer from './Footer.jsx';

import '../sass/BuyBlue.scss';

export default class BuyBlue extends Component {

  render() {
    return <div class='main-container'>
      <Navbar />

      <HeroSlider />

      <ProductsComponent />

      <BrandsComponent />

      <Footer />
    </div>;
  }
}
