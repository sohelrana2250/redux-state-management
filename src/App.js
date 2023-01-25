
import './App.css';

import Parent from './components/pages/Parent'
import USEContext from './Context/USEContext';
import Child from './components/pages/Child';
import CounterApp from './components/Counter/CounterApp';
import LoginForm from './components/pages/LoginForm';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import ProductCard from './Header/ProductCard';
import AddToCard from './Header/AddToCard';


function App() {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/', element: <ProductCard></ProductCard>
        },
        {
          path: '/count', element: <div>

            <Child></Child>
            <br />
            <Parent></Parent>
            <br /><br />
            <CounterApp></CounterApp>
            <br /><br />
            <LoginForm></LoginForm>
          </div>
        },
        {
          path: '/card', element: <AddToCard></AddToCard>
        }
      ]

    }


  ])



  return (
    <div className="App">

      <USEContext>

        < RouterProvider router={router}>


        </RouterProvider>


      </USEContext>






    </div>
  );
}

export default App;
