import './App.css'; // first .css to improve performance
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { routes } from './routes';

/**
 * @author Ruth Rojas
 * @returns {*}
 * @constructor
 */
const App = () => {

  return (
    <React.Fragment>
      <div id={`Meli`} className={``}>
        <BrowserRouter >
          <div className={``}>
            <Routes>
              {Object.keys(routes()).map((element, index) => {
                const RouterComponent = routes()[element].component;
                return <Route key={index} exact path={element} element={<RouterComponent />} />;
              })}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
};

export default App;





