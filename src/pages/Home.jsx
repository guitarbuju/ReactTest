import { useNavigate } from 'react-router-dom'
import styles from './home.module.css'

export const Home = () => {

  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate('/q1')
  }
  return (
    <div className={styles.wrapper}>
    <h1 onClick={handleClick}>TEST HERE!!!!</h1>
     <img src='https://occ-0-1348-114.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABf9HCQwc6Epz3CArWHNpM-yiybdhZPyg5w47F_0HLHLrufr65Chh-G9s2St_VimDQMhclKLrKaGn0LZfAiv8kdrPNgaYF2Gju5iIIgWaQChx.png?r=73a'/>
    </div>
   
  )
}
 export default Home