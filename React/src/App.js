import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import TournamentListing from './pages/TournamentListings'
import UserPage from './pages/UserPage';
import TournamentDetails from './pages/TournamentDetails';
import AuthCallback from './pages/AuthCallback';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header>
          <Routes>
            <Route path="" element={<TournamentListing />}></Route>
            <Route path='TournamentListings' element={<TournamentListing />}> 
            </Route>
            <Route path='TournamentListings/:id' element={<TournamentDetails />}/>
            {/* <Route path='/UserPage' element={<UserPage />}/> */}
            <Route path='authcallback' element={<AuthCallback />}></Route>

          </Routes>
        </Header>
    </BrowserRouter>
   </div>
  );
}

export default App;
