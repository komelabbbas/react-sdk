import React from 'react';

export const InvoiceForm = () => {
  const [count, setCount] = React.useState(100);

  console.log("InvoiceForm");
  return (
    <div className="App">
      Invoice Form {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
