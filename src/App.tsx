import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store } from './store/store';
//import { Counter } from './features/counter/Counter';
import { Aviasales } from './features/aviasales/Aviasales';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App">
          <main className="App-header">
            <Aviasales />
          </main>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
