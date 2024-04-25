
import React, { useState } from 'react';
import Alert from './Components/Alert'

function App() {
  const [showAlert, setShowAlert] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setShowAlert(true);
  };
  return (
    <div className="container mx-auto h-[100vh] px-4">
    <div className="flex justify-center">
      {/* Button to trigger alert */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mt-[20rem]" onClick={handleButtonClick}>Show Alert</button>
    </div>
    
    {/* Conditional rendering of Alert component */}
    {showAlert && <Alert message="This is an alert!" />}
  </div>
  );
}

export default App;
