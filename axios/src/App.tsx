import axios from 'axios'

const App = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'

  // GET
  const getData = () => {
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((e) => {
        console.log(e)
      })
  }

  // POST
  const postData = () => {
    axios
      .post(url, { name: 'rakib', age: 18 })
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
  }

  return (
    <div>
      <button onClick={getData}>get</button>
      <button onClick={postData}>post data</button>
    </div>
  )
}

export default App
