import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from 'app/shared/components/LazyFallback';

const MainPage = React.lazy(() => import('./pages/Main'));
const CertificacionPage = React.lazy(() => import('./pages/Certificacion'));
const ClientePage = React.lazy(() => import('./pages/Cliente'));
const DetalleClientePage = React.lazy(() => import('./pages/DetalleCliente'));
const ExamenPage = React.lazy(() => import('./pages/Examen'));

export const ProductoRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/productos" component={MainPage}></Route>
      <Route path="/certificaciones" component={CertificacionPage}></Route>
      <Route path="/clientes" component={ClientePage}></Route>
      <Route path="/clientes-por-id" component={DetalleClientePage}></Route>
      <Route path="/examenes" component={ExamenPage}></Route>
    </Switch>
  </React.Suspense>
);
