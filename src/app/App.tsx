import * as React from 'react';
import { AppRouter } from 'app/AppRouter';
import { Footer } from './shared/components/Footer';
import { GlobalErrorBoundary } from './core/errors/GlobalErrorBoundary';
import { Provider } from 'react-redux';
import store from 'app/core/redux/store';

function App() {
  return (
    <GlobalErrorBoundary>
      <Provider store={store}>
        <AppRouter />
        <Footer />
      </Provider>
    </GlobalErrorBoundary>
  );
}

export default App;
