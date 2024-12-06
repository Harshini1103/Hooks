import  { useState } from 'react';
import { useEffect } from 'react';

const useFetch=(url)=>
{const [data,setData]=useState(null);
    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error("Error fetching data:", error)); // Add error handling
      }, [url]);
    return[data];
}
export default useFetch;


App.jsx(parent file)
import React  from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import useFetch from './useFetch.jsx';

const App = () => {
//   const [data, setData] = useState(null);
const [data]=useFetch("https://jsonplaceholder.typicode.com/todos")

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error("Error fetching data:", error)); // Add error handling
//   }, []);

  return (
    <>
      {data && data.map((item) => (
        <p key={item.id}>{item.title}</p> // Corrected to use 'title' property
      ))}
    </>
  );
};

export default App;
