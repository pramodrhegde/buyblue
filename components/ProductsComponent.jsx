import { h, render, Component } from 'preact';

export default class ProductsComponent extends Component {
  render() {
    return <div className='block'>
      <div className='product-card non-product text-center'>
        <span></span>
        <h1>Featured products</h1>
        <p>the best of our store</p>
      </div>

      <div className='product-card text-center'>
        <h1>H&M Chino Shorts</h1>
        <div className='product-img'>
          <img src='./assets/hmprod.png' className="img-responsive" alt='H&M Chino Shorts-img'/>
        </div>
        <section>
          <span className='tag yellow'>hit</span>
          <span className='price'>$12</span>
        </section>
      </div>

      <div className='product-card text-center'>
        <h1>Bobbies Elegant Leather Driving Shoes</h1>
        <div className='product-img'>
          <img src='./assets/image3xl.png' className="img-responsive" alt='Bobbies Elegant Leather Driving Shoes-img'/>
        </div>
        <section>
          <span className='price'>$140</span>
        </section>
      </div>

      <div className='product-card text-center'>
        <h1>Fiorelli Rita Striped Tote Bag</h1>
        <div className='product-img'>
          <img src='./assets/image1xxl-(1).png' className="img-responsive" alt='>Fiorelli Rita Striped Tote Bag-img'/>
        </div>
        <section>
          <span className='tag red'>sale</span>
          <span className='price'>$170</span>
          <span className='price slashed'>$180</span>
        </section>
      </div>

      <div className='product-card text-center'>
        <h1>H&M Polo Shirt</h1>
        <div className='product-img'>
          <img src='./assets/hmprod-(1).png' className="img-responsive" alt='H&M Polo Shirt-img'/>
        </div>
        <section>
          <span className='price'>$9.95</span>
        </section>
      </div>

      <div className='product-card text-center'>
        <h1>ASOS Skinny Band Felt Floppy Hat</h1>
        <div className='product-img'>
          <img src='./assets/image2xl.png' className="img-responsive" alt='ASOS Skinny Band Felt Floppy Hat-img'/>
        </div>
        <section>
          <span className='price'>$24</span>
        </section>
      </div>

      <div className='product-card text-center'>
        <h1>Ted Baker Leather Messenger Bag</h1>
        <div className='product-img'>
          <img src='./assets/image1xl.png' className="img-responsive" alt='Ted Baker Leather Messenger Bag-img'/>
        </div>
        <section>
          <span className='tag green'>new</span>
          <span className='price'>$344</span>
        </section>
      </div>

      <div className='product-card text-center'>
        <h1>H&M Canvas Parka</h1>
        <div className='product-img'>
          <img src='./assets/hmprod-(3).png' className="img-responsive" alt='H&M Canvas Parka-img'/>
        </div>
        <section>
          <span className='price'>$69</span>
        </section>
      </div>
    </div>;
  }
}
