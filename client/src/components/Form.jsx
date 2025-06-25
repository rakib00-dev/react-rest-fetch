import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const createTodo = (text) => {
  return () => {
    fetch('http://localhost:8000/todo/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: text }),
    })
  }
}

const Form = () => {
  const [text, setText] = useState('')
  const queryClient = useQueryClient()

  const todoMutation = useMutation({
    mutationFn: createTodo(text),
    onSuccess: () => {
      console.log('success')
      queryClient.invalidateQueries({ queryKey: ['todo'] })
    },
    onError: () => {
      console.log('error')
    },
  })
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={() => todoMutation.mutate()}>Create</button>
    </div>
  )
}

export default Form
