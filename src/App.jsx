import './App.css';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import HomePage from './components/Homepage.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router>
</QueryClientProvider>
  )
}