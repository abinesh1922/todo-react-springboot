import React, { useContext, useState } from 'react'
import Home from './pages/Home';
import AppContext from './context/AppContext';
import AppRouter from './router/Router';

const App = () => {

  const [data, setData] = useState("Todo")
  const dataSet = {
    data,
    setData
  }

  return (
    <>
      <AppContext.Provider value={dataSet}>
        <AppRouter />
      </AppContext.Provider>
    </>
  );
}

export default App;