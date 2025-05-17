import '@styles/global.css';
import Popup from './Popup.svelte';

const popup = new Popup({
  target: document.getElementById('root'),
});

export default popup;
