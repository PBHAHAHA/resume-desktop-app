import React, {Component} from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';

import ROUTER from '@common/constants/router';


// class Router extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <Switch>
//           {/* 👇 一定要添加 exact */}
//           <Route path="/" exact>
//             <Root />
//           </Route>
//         </Switch>
//         {/* 重定向到首页 */}
//         <Redirect to="/" />
//       </HashRouter>
//     );
//   }
// }
function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
      </Switch>
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;