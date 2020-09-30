import Error404 from '../pages/Error404';
import Vanilla from '../pages/vanilla/Vanilla';
import Home from '../pages/Home';
import Google from '../pages/google/Google';

import resultsVanilla from '../services/vanilla/index';
import resultsGoogle from '../services/google/index';

const routes = {
  '/': Home,
  '/vanilla': Vanilla,
  '/google': Google,
};

const router = async () => {
  const content = document.getElementById('app');

  const pathName = window.location.pathname;
  const render = routes[pathName] ? routes[pathName] : Error404;
  content.innerHTML = await render();

  switch (pathName) {
    case '/vanilla':
      resultsVanilla();
      break;
    case '/google':
      resultsGoogle();
      break;
    default:
  }
};

export default router;
