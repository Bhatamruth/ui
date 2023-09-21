import React from 'react';
import './App.css'; 
import BenchDataForm from './BenchDataForm'; 
import PostForm from './components/PostForm'
function App() {
  return (
    <div className="App">
      <h1>Bench Details Application</h1>
      <BenchDataForm /> 
      <PostForm/>
    </div>
  );
}

export default App;

