// import React, { useState, useEffect } from 'react';
import React from 'react';
import Form from './components/Form';
// import Table from './components/Table';
import './CSS/App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:3002');
socket.on('connect', () => console.log('conectado'));
socket.on('dale', (e) => console.log(e, 'funfo?'));

const App = () => {
  // const [response, setResponse] = useState('');
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on('message', data => {
  //     setResponse(data);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch('/')
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message))
  // }, []);

  return (
    <div className="App">
      {/* <p>{ !data ? 'Loading...' : data }</p> */}
      <Form />
      {/* <Table /> */}
    </div>
  );
}

export default App;
