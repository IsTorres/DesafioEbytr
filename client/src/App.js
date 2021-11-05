import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './CSS/App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []);

  return (
    <div className="App">
      <p>{ !data ? 'Loading...' : data }</p>
      <Form />
      <Table />
    </div>
  );
}

export default App;
