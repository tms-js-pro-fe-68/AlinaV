import './App.css';
import { QueryClientProvider, useQueryClient } from 'react-query';
import HomePage from './components/Homepage.jsx'
import { Route, Router, Routes } from 'react-router-dom';

export default function App() {

  const queryClient = useQueryClient({
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