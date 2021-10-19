import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListLayout from '../../components/list/listLayout';
import Layout from '../../components/Layout';

const List: React.FC = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route exact path="/list" render={() => <ListLayout />} />
        <Route exact path="/list/add" render={() => <ListLayout panel="add" />} />
        <Route exact path="/list/edit/:id" render={() => <ListLayout panel="edit" />} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default List;
