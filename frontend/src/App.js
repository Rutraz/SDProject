import './css/App.css';
import Posts from './Posts';
import SendPosts from './SendPosts';


function App() {
  return (
   <div className='app'>
     <div className="posts">
      <Posts></Posts>
      <SendPosts></SendPosts>
     </div>  
   </div>
  );
}

export default App;
