
import './App.css';
import User from './getUser/User';
 import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {
  const route = createBrowserRouter([{
    path:"/",
    element:<User />,
  },])

  // 
  return (
    <div className="App">
      <RouterProvider> router={route}</RouterProvider>
    </div>
  );
}

export default App;
