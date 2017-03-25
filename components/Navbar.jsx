import { h, render, Component } from 'preact';
import Logo from './Logo.jsx';

export default class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNav: null
    }
  }

  handleNav(event) {
    this.setState({
      currentNav: event.target.id
    });
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
          className={this.state.isSidebarOpen ? 'crumb open' : 'crumb close'}
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
          <li className='visible-xs'><a href='javascript:void(0);' className='category'></a></li>
          <li><a href='javascript:void(0);' className='bag' data-count='3'></a></li>
          <li><a href='javascript:void(0);' className='user'></a></li>
          <li><a href='javascript:void(0);' className='search'></a></li>
        </ul>
      </div>

      {
        this.state.currentNav ?
        <div className='jumbo-nav'>
          <ul className='block'>
            <li><a>Main</a></li>
            <li><a>Main</a></li>
            <li><a>Main</a></li>
          </ul>
        </div>
        :
        null
      }

      {
        this.state.isSidebarOpen ?
        <div className='sidebar'>
          <ul className='block'>
            <li><a>Main</a></li>
            <li><a>Main</a></li>
            <li><a>Main</a></li>
          </ul>
        </div>
        :
        null
      }
    </header>;
  }
}
