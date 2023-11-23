import classNames from 'classnames'

export const InvoiceCreate = () => {
  const [count, setCount] = useState(0)

  return (
    <div
      //   className={classNames(
      //     'text-white',
      //     {
      //       'border-2': true,
      //       'bg-red-100': true,
      //     },
      //     ['border-red-500', 'bg-red-800'],
      //   )}
      className={classNames(['border-2', { 'bg-red-100': true }])}
    >
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>

      <Helloworld text="sdf" />
      <BaseInput />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat placeat eius illum
        impedit facere rem hic at culpa reiciendis consequatur, id dolor esse perferendis
        reprehenderit enim recusandae, natus similique.
      </div>
    </div>
  )
}
