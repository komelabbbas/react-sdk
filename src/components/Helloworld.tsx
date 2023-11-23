interface IHelloWorld {
  text: string
}

const Helloworld = ({ text }: IHelloWorld) => {
  const [total, setTotal] = useState(50)

  return (
    <div>
      <div className="text">This is test text: {text}</div>
      <div className="card">
        <button onClick={() => setTotal((total) => total + 1)}>world is {total}</button>
      </div>

      <h1 className="text-3xl font-bold underline border-4 border-red-800">Test</h1>
    </div>
  )
}

export default Helloworld
