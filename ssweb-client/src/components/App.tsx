import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, Global } from '@emotion/react';
import theme from '@/styles/theme';
import global from '@/styles/global';
import Layout from '@/components/templates/Layout';
import Jlog from '@/components/views/Jlog';

const routes = [
  {
    name: 'JLOG',
    path: '/',
    exact: true,
    component: Jlog,
  },
];

function App() {
  const route = routes.map(({ path, component, exact }) => (
    <Route key={path} path={path} component={component} exact={exact} />
  ));

  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Layout>
        <Router>
          <Switch>{route}</Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
