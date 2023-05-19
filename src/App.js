import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import ItemRow from './Components/ItemRow/ItemRow';
import {popular, upcoming, nowPlaying, topRated} from './constants'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ItemRow title="Popular Movies" url={popular}/>
      <ItemRow title="Upcoming Movies" url={upcoming}/>
      <ItemRow title="Top Rated" url={topRated}/>
      <br />
      <br />
    </div>
  );
}

export default App;
