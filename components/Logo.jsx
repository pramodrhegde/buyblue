import { h, render, Component } from 'preact';

export default class Logo extends Component {
  render() {
    return <h1 id='logo'>
      <a href='/'>BuyBlue</a>
    </h1>;
  }
}
