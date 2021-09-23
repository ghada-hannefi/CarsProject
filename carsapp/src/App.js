import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CarsData } from './Components/CarsData';
import SearchCar from './Components/searchCar/searchCar';
import CarsList from './Components/CarsList';
import CarDetail from './Components/CarDetail/CarDetail';
import { CommentsContainer } from './Components/Comments/CommentsContainer';
import './App.css';


function App() {
  const [carsList, setcarsList] = useState(CarsData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);
  const [isLogin, setIsLogin] = useState(false);

  const add = () => {

    setcarsList(CarsData)
  }
  const btnLogin = !isLogin ?
    (<button type="button" id="login" className="btn " onClick={() => setIsLogin(!isLogin)}>Login</button>)

    : (<button type="button" id="login" className="btn" onClick={() => setIsLogin(!isLogin)}>Logout</button>);

  const loginContainer = isLogin ? (
   
     <div id="between"> 
   <CarDetail />
      <CommentsContainer />
     
    </div>
  ) : (<div ><CarDetail /></div>)


  return (
    <div className="App">
      <BrowserRouter>
         {btnLogin}
        <Switch>
          <Route exact path="/" ><SearchCar
            setNameSearch={setNameSearch}
            ratingSearch={ratingSearch}
            setRatingSearch={setRatingSearch}
          />
            <CarsList
              carsList={carsList}
              nameSearch={nameSearch}
              ratingSearch={ratingSearch}
            /></Route>
          <Route  exact path="/:CarId">{loginContainer}</Route>
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;