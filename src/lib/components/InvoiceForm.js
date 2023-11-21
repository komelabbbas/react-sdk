import { useState } from "react";

const InvoiceForm = () => {
  const [count, setCount] = useState(100);

  console.log("InvoiceForm");
  return (
    <div className="App">
      Invoice Form {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default InvoiceForm;
