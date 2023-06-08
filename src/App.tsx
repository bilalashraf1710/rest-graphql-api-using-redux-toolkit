import Home from './pages/home/Home'

if (process.env.REACT_APP_ENVIRONMENT === 'development') {
  require('./mocks/setupServer')
}

function App() {
  return <Home />
}
export default App
