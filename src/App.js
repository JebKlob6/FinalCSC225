import { useState, useEffect } from 'react';
import axios from "axios";
import Loading from './components/Loading';
import Emp from './components/Emp';
import Emplist from './components/Emplist';
import Issues from './components/Issues';


function App() {

  const [loading, setloading] = useState(true);
  const [emp, setemp] = useState([]);


  const getEmp = () => {
    setloading(true);
    axios.get('https://api.matgargano.com/employees/').then(response => {
      setemp(response.data);
      setloading(false);
    })
    
  };

  useEffect(() => {
    getEmp();
  }, []);
  

  return (
    <div className='Container'>
      {!!loading && <Loading/>}
      {!loading && (
        <div className='Content'>
        < Emplist data = {emp} />
        < Emp/>
        < Issues />
        </div>
      )}
    </div>
  );
}

export default App;
