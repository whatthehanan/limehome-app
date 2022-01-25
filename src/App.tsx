import { QueryClientProvider } from 'react-query'
import './App.less'
import { queryClient } from './shared/infra/react-query'
import Router from './shared/infra/router'

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  )
}

export default App
