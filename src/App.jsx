import './App.css';
<<<<<<< HEAD
// import { QueryClientProvider, useQueryClient } from 'react-query';
=======
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
>>>>>>> c7c27fb6c76c010ffbb0e093c0aad4d5f3d74c98
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
    // <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} exact/>
        </Routes>
      </Router>
    // </QueryClientProvider>
  )
}