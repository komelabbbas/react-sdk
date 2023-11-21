import React from "react";

const InvoiceForm = () => {
  const [count, setCount] = React.useState(101);

  return (
    <div className="App">
      Invoice Form112 {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default InvoiceForm;
