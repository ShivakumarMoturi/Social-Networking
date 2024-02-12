import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import {ToastContainer}from 'react-toastify'
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Post.js';
import Friends from './Friends.js';
import Photos from './Cardimage.js';
import Profile from './Profile.js';
import Addpost from './Addpost.js';
import Groups from './Groups.js';
import Addcomment from './Addcomment.js';
import ContentDisplay from './Addcomment.js';
import Sample from './Sample.js';
function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/navbar' element={<Navbar />}></Route>
        <Route path='/post' element={<Post />}></Route>
        <Route path='/addpost' element={<Addpost />}></Route>
       <Route path='/friends' element={<Friends/>}></Route>
          <Route path='/groups' element={<Groups/>}></Route>
          <Route path='/photos' element={<Photos/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
            {/* <Post /> */}
            {/* <Friends/>
                <Photos />
                <Profile /> */}

            {/* <Addcomment/>
            <ContentDisplay />
            <Sample /> */}
      
    </div>
  );
}

export default App;
