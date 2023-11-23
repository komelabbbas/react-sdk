import React from 'react'

interface IHelloWorld {
  text: string
}

const Helloworld = ({ text }: IHelloWorld) => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <div className="text">This is test text: {text}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>

      <h1 className="text-3xl font-bold underline border-4 border-red-800">Test</h1>
    </div>
  )
}

export default Helloworld
