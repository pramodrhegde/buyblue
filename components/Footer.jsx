import { h, render, Component } from 'preact';

export default class Footer extends Component {
  render() {
    return <footer>
      <div className='block'>
        <section className='categories'>
          <ul>
            <li><a href='javascript:void(0);'>Men</a></li>
            <li><a href='javascript:void(0);'>Women</a></li>
            <li><a href='javascript:void(0);'>Kids</a></li>
            <li><a href='javascript:void(0);'>Accessories</a></li>
            <li><a href='javascript:void(0);'>Sale</a></li>
            <li><a href='javascript:void(0);'>Lookbook</a></li>
            <li><a href='javascript:void(0);'>Blog</a></li>
          </ul>
        </section>

        <section>
          <div className='copyrights text-center'>
            <h1>BuyBlue</h1>
            <p>2015 All Rights Reserved.</p>
          </div>

          <div className='signup text-center'>
            <div className='input-group'>
              <input type='text'
                    placeholder='Sign up for style news'/>
              <a href='javascript:void(0);'>go</a>
            </div>

            <ul>
              <li><a href='javascript:void(0);'>Privacy & Cookies</a></li>
              <li><a href='javascript:void(0);'>Terms & Conditions</a></li>
              <li><a href='javascript:void(0);'>Accessibility</a></li>
            </ul>
          </div>

          <div className='associations text-center'>
            <ul className='social'>
              <li><a href='javascript:void(0);' className='twitter'></a></li>
              <li><a href='javascript:void(0);' className='instagram'></a></li>
              <li><a href='javascript:void(0);' className='pinterest'></a></li>
              <li><a href='javascript:void(0);' className='facebook'></a></li>
            </ul>

            <ul className='payments'>
              <li><a href='javascript:void(0);' className='visa'></a></li>
              <li><a href='javascript:void(0);' className='mastercard'></a></li>
              <li><a href='javascript:void(0);' className='paypal'></a></li>
            </ul>
          </div>
        </section>
      </div>
    </footer>;
  }
}
