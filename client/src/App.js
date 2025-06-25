import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query'
import Form from './components/Form'

function App() {
  const { data, isFetching, status } = useQuery({
    queryKey: ['todo'],
    queryFn: async () =>
      await (await fetch('http://localhost:8000/todo')).json(),
  })

  console.log(data)

  if (isFetching) {
    return <h1>loading...</h1>
  }

  return (
    <div className="App">
      <Form />
      <p>Status: {status}</p>
      {data && data.data && data.data.map((t, i) => <li key={i}>{t.title}</li>)}
    </div>
  )
}

export default App
