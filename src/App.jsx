import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import HomePage from './components/Homepage.jsx'
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';

export default function App() {

  const queryClient = QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} exact/>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}