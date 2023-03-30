import './App.css'
import Cards from './components/Cards.jsx'
import Nav  from './components/Nav.jsx'
import About from './components/views/About'
import Detail from './components/views/Detail'
import { useState,useEffect } from 'react'
import { Routes, Route,useLocation,useNavigate} from 'react-router-dom'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

function App () {
  const [characters,setCharacters] = useState([])
  const location = useLocation()
  const [access,setAccess] = useState(false)
  const navigate = useNavigate()

  const username='choquematia@gmail.com'
  const password='123asd'

  const login = (userData) =>{
    if (userData.username===username&&userData.password===password){
      setAccess(true)
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onSearch = (id) => {
    fetch (`http://localhost:3001/rickandmorty/onsearch/${id}`)
    .then ((response) => response.json())
    .then ((data) => {
      if (data.name && !characters.find((char)=>char.id === data.id)){
        setCharacters((oldChars)=>[...oldChars, data]);
      } else { alert("Algo salió mal")}
    })
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  };
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login}/> :<div className='nav'><Nav onSearch={onSearch}/></div> }
      
      
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App
