import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Show } from '../pages/Show';
import { Create } from '../pages/Create';
import { Update } from '../pages/Update';
import { Delete } from '../pages/Delete';

const Routes = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path='/' component={Show} />
         <Route path='/Create' component={Create} />
         <Route path='/Update' component={Update} />
         <Route path='/Delete' component={Delete} />
      </Switch>
   </BrowserRouter>
)

export { Routes };