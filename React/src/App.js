import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import TournamentListing from './pages/TournamentVisiting'
import UserPage from './pages/UserPage';
import TournammentDetails from './pages/TournamentDetails';


function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/TournamentListings' element={<TournamentListing />}/>
          <Route path='/UserPage' element={<UserPage />}/>
          <Route path='/TournammentDetails' element={<TournammentDetails />}/>


        </Routes>
      </Header>
   </BrowserRouter>
  );
}

export default App;
