import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from 'app/shared/components/LazyFallback';

const MainPage = React.lazy(() => import('./pages/Main'));
const CertificacionPage = React.lazy(() => import('./pages/Certificacion'));
const ClientePage = React.lazy(() => import('./pages/Cliente'));

export const ProductoRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/productos" component={MainPage}></Route>
      <Route path="/certificaciones" component={CertificacionPage}></Route>
      <Route path="/clientes" component={ClientePage}></Route>
    </Switch>
  </React.Suspense>
);
