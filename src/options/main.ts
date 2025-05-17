import '@styles/global.css';
import Options from './Options.svelte';

const options = new Options({
  target: document.getElementById('root'),
});

export default options;
