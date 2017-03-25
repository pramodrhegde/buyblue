import { h, render, Component } from 'preact';
import Logo from './Logo.jsx';

import '../sass/header.scss';

export default class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNav: null
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleGlobalClick.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(this.handleGlobalClick);
  }

  handleGlobalClick(e) {
    this.setState({
      currentNav: null
    });
  }

  handleNav(event) {
    this.setState({
      currentNav: event.target.id
    });
    event.stopPropagation();
  }

  handleSidebarBtn() {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen
    });
  }

  render() {
    return <header>
      <div className='block header-container'>
        <a href='javascript:void(0);'
          className='crumb close'
          onClick={this.handleSidebarBtn.bind(this)}></a>

        <Logo />

        <nav className='hidden-xs'>
          <ul>
            <li><a href='javascript:void(0);' onClick={this.handleNav.bind(this)} id='men'>Men</a></li>
            <li><a href='javascript:void(0);' onClick={this.handleNav.bind(this)} id='women'>Women</a></li>
            <li><a href='javascript:void(0);' onClick={this.handleNav.bind(this)} id='kids'>Kids</a></li>
            <li><a href='javascript:void(0);' onClick={this.handleNav.bind(this)} id='others'>Accessories</a></li>
          </ul>
        </nav>

        <ul className='icons'>
          <li className='visible-xs'><a href='javascript:void(0);' className='home'></a></li>
          <li className='visible-xs'><a href='javascript:void(0);'
              className='category'
              onClick={this.handleNav.bind(this)}
              id='mobile'></a></li>
          <li><a href='javascript:void(0);' className='bag' data-count='3'></a></li>
          <li><a href='javascript:void(0);' className='user'></a></li>
          <li><a href='javascript:void(0);' className='search'></a></li>
        </ul>
      </div>

      {
        this.state.currentNav &&
        <div className='jumbo-nav'>

        </div>
      }
      {
        this.state.currentNav ?
        <div className='jumbo-nav'>
          {
            this.state.currentNav === 'mobile' ?
            <div className='block'>
              <h2>categories</h2>
              <ul className='mobile-category'>
                <li><a href='javascript:void(0);' onClick={this.handleNav.bind(this)} id='men'>Men</a></li>
                <li><a href='javascript:void(0);' onClick={this.handleNav.bind(this)} id='women'>Women</a></li>
                <li><a href='javascript:void(0);' onClick={this.handleNav.bind(this)} id='kids'>Kids</a></li>
                <li><a href='javascript:void(0);' onClick={this.handleNav.bind(this)} id='others'>Accessories</a></li>
              </ul>
            </div>
            :
            <div className='block'>
              <h2>{this.state.currentNav}</h2>
              <ul>
                <li>
                  Main 1
                  <ul>
                    <li>Main 1-1</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  Main 2
                  <ul>
                    <li>Main 1-1</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  Main 3
                  <ul>
                    <li>Main 1-1</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                    <li>Main 1-2</li>
                  </ul>
                </li>
              </ul>
            </div>
          }
        </div>
        :
        null
      }

      {
        this.state.isSidebarOpen ?
        <div className='sidebar'>
          <div className='block'>
            <h1>BuyBlue</h1>
            <a href='javascript:void(0);'
              className='close'
              onClick={this.handleSidebarBtn.bind(this)}></a>
            <ul className='list'>
              <li>
                Main 1
                <ul>
                  <li>Main 1-1</li>
                  <li>Main 1-2</li>
                </ul>
              </li>
              <li>
                Main 2
                <ul>
                  <li>Main 2-1</li>
                  <li>Main 2-2</li>
                  <li>Main 2-3</li>
                  <li>Main 2-4</li>
                </ul>
              </li>
              <li>
                Main 3
                <ul>
                  <li>Main 1-1</li>
                  <li>Main 1-2</li>
                  <li>Main 1-3</li>
                  <li>Main 1-4</li>
                  <li>Main 1-5</li>
                </ul>
              </li>
              <li>Main 4</li>
            </ul>
          </div>
        </div>
        :
        null
      }
    </header>;
  }
}
