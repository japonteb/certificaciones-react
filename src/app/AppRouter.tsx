import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import MainPage from 'app/Main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/home" component={HomeRouter} />
        <Route path="/productos" component={ProductoRouter} />
        <Route path="/certificaciones" component={ProductoRouter} />
        <Route path="/clientes" component={ProductoRouter} />
        <Route path="/clientes-por-id/:id" component={ProductoRouter} />
        <Route path="/examenes" component={ProductoRouter} />
      </Switch>
    </BrowserRouter>
  );
};
