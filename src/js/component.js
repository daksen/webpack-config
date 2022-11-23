import webpackLogo from '../assets/webpack-logo.png';
import '../css/component.css';

export const component = () => {
  const img = document.createElement('img');
  img.src = webpackLogo;
  document.body.append(img);
}
