import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import TournamentListing from './pages/TournamentListings'
import UserPage from './pages/UserPage';
import TournamentDetails from './pages/TournamentDetails';


function App() {
  return (
    <BrowserRouter>
    <Header>
        <Routes>
          <Route path='TournamentListings' element={<TournamentListing />}> 
          </Route>
          <Route path='TournamentListings/:id' element={<TournamentDetails />}/>
          <Route path='/UserPage' element={<UserPage />}/>
            
        </Routes>
      </Header>
   </BrowserRouter>
  );
}

export default App;
