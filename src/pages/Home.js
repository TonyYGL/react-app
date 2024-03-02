import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const { username } = location.state || {};


    return (
        <h1>Hello {username || 'Guest'}</h1>
    )
  }
  
  export default Home;