import { useState, useEffect } from 'react';
import axios from "axios";
import Loading from './components/Loading';
import Emp from './components/Emp';
import Emplist from './components/Emplist';
import Issues from './components/Issues';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [loading, setloading] = useState(true);
  const [emp, setemp] = useState([]);
  const [loadperson, setloadperson] = useState(null);
  const [error, seterror] = useState(false);

  const resetstate = () => {
    
    setloading(true);
    setemp(null);
    setloadperson(null);
    getEmp();
  }
  

  const getEmp = (id = null) => {
    setloading(true);
   
    let actualid = '' ;

    if(!!id && parseInt(id,10) > 0)
    {
      actualid = parseInt(id,10);
    }

    axios.get(`https://api.matgargano.com/employees/${actualid}`).then(response => {
      setemp(response.data)
      setloading(false);
    })
    
  };

  useEffect(() => {
    getEmp();
    
  }, []);
  
  useEffect(()=> {

    if(!!loadperson)
    {
      getEmp(loadperson);
    }

  },[loadperson])

  return (
    <div className='Container text-center'>
      {!!error && <Issues/>}
      {!error && <>
        {!!loading && <Loading/>}
        {!loading && (
        <div className='Content '>
          {!loadperson &&
          (< Emplist data = {emp} setselectedemp = {setloadperson} />)
          }
          
          {!!loadperson && (<Emp  reset = {resetstate} data = {emp}/>)}
        </div>)}
        
        </>
      }
        </div>
      
        
  )}


export default App;
