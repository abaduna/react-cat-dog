
import { useState, useEffect  } from 'react';

import { useFech } from './hook/useFech';

import Image from './componetes/image';
import './App.css';

function App() {
  const [endpoint,setEndpoint] = useState("search?limit=10")
  const {data,loading,error} = useFech(endpoint)
  useEffect(() => {
    if (!loading && !error) {
      // Los datos están disponibles, puedes hacer lo que necesites con ellos aquí.
      console.log('app');
      console.log(data);
      
    }
  }, [data, loading, error]);
  if (loading) {
    return <div className="App">Cargando...</div>;
  }
  if (error) {
    return <div className="App">Error al cargar los datos.</div>;
  }
  if (Array.isArray(data) && data.length > 0) {
    return (
      <div className="App">
        <Image data={data}></Image>
      </div>
    );
  }
  // return (
  //   <div className="App">
  //         <Image data={data}></Image>
  //   </div>
  // );
}

export default App;
