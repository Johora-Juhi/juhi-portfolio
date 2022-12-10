import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
        {
          path: "/",
          element:<Home></Home>,
        },
  ]);
  return (
    <div className="App container mx-auto">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
