import React from 'react'

export interface IHelloWorld {
  text: string
}

export const Helloworld = ({ text }: IHelloWorld) => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <div className="text">This is test text: {text}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </div>
  )
}
