import devConfig from './config/vite.config.dev';
import prodConfig from './config/vite.config prod';

export default ({ mode }) => {
  if (mode === 'production') {
    return prodConfig;
  }
  return devConfig;
};
