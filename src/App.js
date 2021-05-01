
import './App.css';
import Header from './Header';
import TinderCard from './Tindercards'
import SwipeButtons from './SwipeButtons'
function App() {
  return (
    <div className="app">
       {/* {Header} */}
<Header/>
<TinderCard/>

{/* swipebtn */}
<SwipeButtons/>
    </div>
  );
}

export default App;
